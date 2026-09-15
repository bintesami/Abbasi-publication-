import datetime
import json
import os
from sqlalchemy.orm import Session
from sqlalchemy import func, desc
from . import models, schemas

# ==================== RAW MATERIALS ====================

def get_raw_materials(db: Session):
    return db.query(models.RawMaterial).order_by(models.RawMaterial.category, models.RawMaterial.name).all()

def get_low_stock_materials(db: Session):
    return db.query(models.RawMaterial).filter(models.RawMaterial.current_stock <= models.RawMaterial.min_reorder_level).all()

def create_raw_material(db: Session, item: schemas.RawMaterialCreate):
    db_item = models.RawMaterial(**item.dict())
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item

def record_raw_material_transaction(db: Session, trans: schemas.RawMaterialTransactionCreate):
    mat = db.query(models.RawMaterial).filter(models.RawMaterial.id == trans.material_id).first()
    if not mat:
        raise ValueError("خام مال موجود نہیں ہے (Raw material not found)")

    # Adjust stock balance
    if trans.transaction_type == "PURCHASE_IN":
        mat.current_stock += trans.quantity
    elif trans.transaction_type in ("WORK_ORDER_OUT", "DAMAGE_LOSS"):
        mat.current_stock = max(0.0, mat.current_stock - trans.quantity)
    elif trans.transaction_type == "ADJUSTMENT":
        mat.current_stock = trans.quantity

    db_trans = models.RawMaterialTransaction(
        material_id=trans.material_id,
        transaction_type=trans.transaction_type,
        quantity=trans.quantity,
        reference_no=trans.reference_no,
        notes=trans.notes
    )
    db.add(db_trans)
    db.commit()
    db.refresh(db_trans)
    return db_trans

# ==================== BOOK MASTER & BOM ====================

def get_books(db: Session):
    return db.query(models.Book).order_by(desc(models.Book.created_at)).all()

def get_book_by_id(db: Session, article_id: str):
    return db.query(models.Book).filter(models.Book.article_id == article_id).first()

def create_book(db: Session, book: schemas.BookCreate):
    # Calculate forms count: 16 pages per standard form
    forms_count = round(book.page_count / 16.0, 2)
    db_book = models.Book(
        article_id=book.article_id.strip(),
        title=book.title.strip(),
        language=book.language,
        subject=book.subject,
        page_count=book.page_count,
        forms_count=forms_count,
        inner_paper_spec=book.inner_paper_spec,
        outer_card_spec=book.outer_card_spec,
        colors=book.colors,
        standard_cost_per_copy=book.standard_cost_per_copy
    )
    db.add(db_book)
    db.commit()
    db.refresh(db_book)

    # Add BOM items if provided
    if book.bom_items:
        for bom in book.bom_items:
            db_bom = models.BookBOM(
                book_article_id=db_book.article_id,
                material_id=bom.material_id,
                quantity_per_copy=bom.quantity_per_copy,
                unit=bom.unit,
                wastage_allowance_pct=bom.wastage_allowance_pct
            )
            db.add(db_bom)
        db.commit()
        db.refresh(db_book)
    return db_book

# ==================== WORK ORDERS ====================

def generate_work_order_no(db: Session) -> str:
    year = datetime.datetime.utcnow().year
    prefix = f"APN-WO-{year}-"
    last_wo = db.query(models.WorkOrder).filter(models.WorkOrder.work_order_no.like(f"{prefix}%")).order_by(desc(models.WorkOrder.work_order_no)).first()
    if last_wo:
        try:
            seq = int(last_wo.work_order_no.split("-")[-1]) + 1
        except Exception:
            seq = 1
    else:
        seq = 1
    return f"{prefix}{seq:04d}"

def create_work_order(db: Session, wo_data: schemas.WorkOrderCreate):
    wo_no = wo_data.work_order_no or generate_work_order_no(db)
    book = get_book_by_id(db, wo_data.book_article_id)
    if not book:
        raise ValueError("کتاب کا آرٹیکل موجود نہیں ہے (Book article not found)")

    db_wo = models.WorkOrder(
        work_order_no=wo_no,
        book_article_id=book.article_id,
        target_quantity=wo_data.target_quantity,
        status="PLANNED",
        target_delivery_date=wo_data.target_delivery_date,
        notes=wo_data.notes
    )
    db.add(db_wo)
    db.commit()
    db.refresh(db_wo)

    # Auto issue raw materials from store based on Book BOM
    boms = db.query(models.BookBOM).filter(models.BookBOM.book_article_id == book.article_id).all()
    for bom in boms:
        # Total needed = (qty_per_copy * target_quantity) * (1 + wastage_pct/100)
        needed = (bom.quantity_per_copy * wo_data.target_quantity) * (1.0 + (bom.wastage_allowance_pct / 100.0))
        mat = db.query(models.RawMaterial).filter(models.RawMaterial.id == bom.material_id).first()
        if mat:
            mat.current_stock = max(0.0, mat.current_stock - needed)
            trans = models.RawMaterialTransaction(
                material_id=mat.id,
                transaction_type="WORK_ORDER_OUT",
                quantity=round(needed, 2),
                reference_no=wo_no,
                notes=f"Auto issued for Work Order {wo_no} ({book.title})"
            )
            db.add(trans)

    if boms:
        db_wo.status = "MATERIAL_ISSUED"
        db.commit()
        db.refresh(db_wo)

    # Initial log
    log = models.ProductionStageLog(
        work_order_no=wo_no,
        stage="WORK_ORDER_CREATED",
        action=f"ورک آرڈر جاری کیا گیا برائے {wo_data.target_quantity} کتب",
        quantity_done=0,
        notes=wo_data.notes
    )
    db.add(log)
    db.commit()
    return db_wo

def get_work_orders(db: Session):
    orders = db.query(models.WorkOrder).order_by(desc(models.WorkOrder.start_date)).all()
    # attach book_title
    for o in orders:
        if o.book:
            o.book_title = o.book.title
    return orders

def get_work_order_by_no(db: Session, work_order_no: str):
    wo = db.query(models.WorkOrder).filter(models.WorkOrder.work_order_no == work_order_no).first()
    if wo and wo.book:
        wo.book_title = wo.book.title
    return wo

def update_work_order_progress(db: Session, work_order_no: str, progress: schemas.WorkOrderUpdateProgress):
    wo = db.query(models.WorkOrder).filter(models.WorkOrder.work_order_no == work_order_no).first()
    if not wo:
        raise ValueError("ورک آرڈر موجود نہیں ہے (Work Order not found)")

    if progress.stage == "INNER_PRINT":
        if progress.inner_printed_sheets is not None:
            wo.inner_printed_sheets += progress.inner_printed_sheets
        if progress.inner_damage_sheets is not None:
            wo.inner_damage_sheets += progress.inner_damage_sheets
            # Record damage
            dmg = models.DamageWastageRecord(
                work_order_no=wo.work_order_no,
                stage="PRINTING_INNER",
                item_type="انر شیٹس / فارمے (Inner Sheets)",
                damaged_quantity=progress.inner_damage_sheets,
                unit="SHEETS",
                reason=progress.notes or "پرنٹنگ مس پرنٹ یا پیپر ڈیمیج",
                cost_loss=progress.inner_damage_sheets * 4.5 # approximate unit sheet cost
            )
            db.add(dmg)
        
        if wo.inner_printed_sheets >= wo.target_quantity:
            wo.inner_status = "COMPLETED"
        else:
            wo.inner_status = "IN_PROGRESS"
        
        if wo.status in ("PLANNED", "MATERIAL_ISSUED"):
            wo.status = "IN_PRINTING"

    elif progress.stage == "OUTER_PRINT":
        if progress.outer_printed_covers is not None:
            wo.outer_printed_covers += progress.outer_printed_covers
        if progress.outer_damage_covers is not None:
            wo.outer_damage_covers += progress.outer_damage_covers
            dmg = models.DamageWastageRecord(
                work_order_no=wo.work_order_no,
                stage="PRINTING_OUTER",
                item_type="ٹائٹل / آؤٹر کارڈ (Outer Covers)",
                damaged_quantity=progress.outer_damage_covers,
                unit="SHEETS",
                reason=progress.notes or "کور پرنٹنگ خرابی یا لیمینیشن نقص",
                cost_loss=progress.outer_damage_covers * 15.0 # cover card unit cost
            )
            db.add(dmg)

        if wo.outer_printed_covers >= wo.target_quantity:
            wo.outer_status = "READY_FOR_BINDING"
        else:
            wo.outer_status = "IN_PROGRESS"

        if wo.status in ("PLANNED", "MATERIAL_ISSUED"):
            wo.status = "IN_PRINTING"

    elif progress.stage == "BINDING":
        if progress.binding_assembled_qty is not None:
            wo.binding_assembled_qty += progress.binding_assembled_qty
        if progress.binding_damage_qty is not None:
            wo.binding_damage_qty += progress.binding_damage_qty
            dmg = models.DamageWastageRecord(
                work_order_no=wo.work_order_no,
                stage="BINDING",
                item_type="بائنڈنگ شدہ کتب (Bound Books)",
                damaged_quantity=progress.binding_damage_qty,
                unit="BOOKS",
                reason=progress.notes or "بائنڈنگ خرابی، کٹائی یا گلو نقص",
                cost_loss=progress.binding_damage_qty * (wo.book.standard_cost_per_copy if wo.book else 120.0)
            )
            db.add(dmg)

        wo.status = "IN_BINDING"
        if wo.binding_assembled_qty >= wo.target_quantity:
            wo.binding_status = "COMPLETED"
        else:
            wo.binding_status = "IN_PROGRESS"

    elif progress.stage == "FINALIZE":
        wo.actual_finished_quantity = wo.binding_assembled_qty
        wo.total_damage_quantity = wo.inner_damage_sheets + wo.outer_damage_covers + wo.binding_damage_qty
        wo.status = "COMPLETED"
        wo.completed_date = datetime.datetime.utcnow()

        # Send to Finished Goods Warehouse automatically!
        fg = models.FinishedGoods(
            book_article_id=wo.book_article_id,
            work_order_no=wo.work_order_no,
            batch_no=wo.work_order_no,
            warehouse_name="مرکزی گودام عباسی پبلیکیشن (APN Warehouse)",
            rack_location="Rack-A",
            shelf_location="Shelf-1",
            quantity_on_hand=wo.actual_finished_quantity
        )
        db.add(fg)

    # Log action
    log = models.ProductionStageLog(
        work_order_no=wo.work_order_no,
        stage=progress.stage,
        action=f"اسٹیج اپڈیٹ: {progress.stage}",
        quantity_done=progress.binding_assembled_qty or progress.inner_printed_sheets or progress.outer_printed_covers or 0,
        quantity_waste=progress.binding_damage_qty or progress.inner_damage_sheets or progress.outer_damage_covers or 0,
        operator=progress.operator,
        notes=progress.notes
    )
    db.add(log)
    db.commit()
    db.refresh(wo)
    if wo.book:
        wo.book_title = wo.book.title
    return wo

# ==================== FINISHED GOODS WAREHOUSE ====================

def get_finished_goods(db: Session):
    items = db.query(models.FinishedGoods).order_by(desc(models.FinishedGoods.received_date)).all()
    for item in items:
        if item.book:
            item.book_title = item.book.title
    return items

def transfer_finished_goods_location(db: Session, fg_id: int, rack: str, shelf: str):
    fg = db.query(models.FinishedGoods).filter(models.FinishedGoods.id == fg_id).first()
    if fg:
        fg.rack_location = rack
        fg.shelf_location = shelf
        db.commit()
        db.refresh(fg)
    return fg

# ==================== DAMAGE & WASTAGE ====================

def get_damage_records(db: Session):
    return db.query(models.DamageWastageRecord).order_by(desc(models.DamageWastageRecord.recorded_at)).all()

# ==================== DASHBOARD METRICS ====================

def get_dashboard_summary(db: Session):
    total_finished_books = db.query(func.coalesce(func.sum(models.FinishedGoods.quantity_on_hand), 0)).scalar()
    active_jobs_count = db.query(models.WorkOrder).filter(models.WorkOrder.status.in_(["PLANNED", "MATERIAL_ISSUED", "IN_PRINTING", "IN_BINDING"])).count()
    completed_jobs_count = db.query(models.WorkOrder).filter(models.WorkOrder.status == "COMPLETED").count()
    
    # Low stock alerts
    low_stock_items = get_low_stock_materials(db)
    low_stock_count = len(low_stock_items)

    # Damage & Wastage
    total_damage_items = db.query(func.coalesce(func.sum(models.DamageWastageRecord.damaged_quantity), 0)).scalar()
    total_financial_loss = db.query(func.coalesce(func.sum(models.DamageWastageRecord.cost_loss), 0)).scalar()

    # Active work orders list with brief progress
    active_orders = db.query(models.WorkOrder).filter(models.WorkOrder.status != "COMPLETED").order_by(desc(models.WorkOrder.start_date)).limit(10).all()
    for o in active_orders:
        if o.book:
            o.book_title = o.book.title

    return {
        "total_finished_books": int(total_finished_books),
        "active_jobs_count": active_jobs_count,
        "completed_jobs_count": completed_jobs_count,
        "low_stock_count": low_stock_count,
        "low_stock_items": [
            {
                "id": m.id,
                "name": m.name,
                "category": m.category,
                "current_stock": m.current_stock,
                "min_reorder_level": m.min_reorder_level,
                "unit": m.unit
            } for m in low_stock_items
        ],
        "total_damage_items": float(total_damage_items),
        "total_financial_loss": float(total_financial_loss),
        "recent_active_orders": active_orders
    }


# ==================== HR (HUMAN RESOURCES) CRUD ====================

def get_employees(db: Session):
    return db.query(models.Employee).order_by(models.Employee.full_name).all()

def get_employee_by_id(db: Session, emp_id: int):
    return db.query(models.Employee).filter(models.Employee.id == emp_id).first()

def create_employee(db: Session, emp: schemas.EmployeeCreate):
    data = emp.model_dump() if hasattr(emp, "model_dump") else emp.dict()
    db_emp = models.Employee(**data)
    db.add(db_emp)
    db.commit()
    db.refresh(db_emp)
    return db_emp

def update_employee(db: Session, emp_id: int, data: dict):
    db_emp = get_employee_by_id(db, emp_id)
    if not db_emp:
        return None
    for k, v in data.items():
        if hasattr(db_emp, k) and v is not None:
            setattr(db_emp, k, v)
    db.commit()
    db.refresh(db_emp)
    return db_emp

def get_attendances(db: Session, date_str: str = None):
    query = db.query(models.Attendance)
    if date_str:
        query = query.filter(models.Attendance.date == date_str)
    records = query.order_by(desc(models.Attendance.date)).all()
    for r in records:
        if r.employee:
            r.employee_name = r.employee.full_name
    return records

def record_attendance(db: Session, att: schemas.AttendanceCreate):
    data = att.model_dump() if hasattr(att, "model_dump") else att.dict()
    # Check if record already exists for this employee and date
    existing = db.query(models.Attendance).filter(
        models.Attendance.employee_id == att.employee_id,
        models.Attendance.date == att.date
    ).first()
    if existing:
        for k, v in data.items():
            setattr(existing, k, v)
        db.commit()
        db.refresh(existing)
        if existing.employee:
            existing.employee_name = existing.employee.full_name
        return existing
    db_att = models.Attendance(**data)
    db.add(db_att)
    db.commit()
    db.refresh(db_att)
    if db_att.employee:
        db_att.employee_name = db_att.employee.full_name
    return db_att

def get_payrolls(db: Session, month_year: str = None):
    query = db.query(models.Payroll)
    if month_year:
        query = query.filter(models.Payroll.month_year == month_year)
    payrolls = query.order_by(desc(models.Payroll.created_at)).all()
    for p in payrolls:
        if p.employee:
            p.employee_name = p.employee.full_name
            p.emp_code = p.employee.emp_code
            p.designation = p.employee.designation
    return payrolls

def create_payroll(db: Session, pr: schemas.PayrollCreate):
    data = pr.model_dump() if hasattr(pr, "model_dump") else pr.dict()
    db_pr = models.Payroll(**data)
    db.add(db_pr)
    db.commit()
    db.refresh(db_pr)
    if db_pr.employee:
        db_pr.employee_name = db_pr.employee.full_name
        db_pr.emp_code = db_pr.employee.emp_code
        db_pr.designation = db_pr.employee.designation
    return db_pr

def update_payroll_payment(db: Session, payroll_id: int, status: str, method: str):
    pr = db.query(models.Payroll).filter(models.Payroll.id == payroll_id).first()
    if pr:
        pr.payment_status = status
        pr.payment_method = method
        if status == "PAID":
            pr.payment_date = datetime.datetime.utcnow()
        db.commit()
        db.refresh(pr)
        if pr.employee:
            pr.employee_name = pr.employee.full_name
            pr.emp_code = pr.employee.emp_code
            pr.designation = pr.employee.designation
    return pr


# ==================== FINANCE & CHART OF ACCOUNTS (COA) CRUD ====================

def get_accounts(db: Session):
    return db.query(models.Account).order_by(models.Account.account_code).all()

def create_account(db: Session, acc: schemas.AccountCreate):
    data = acc.model_dump() if hasattr(acc, "model_dump") else acc.dict()
    data["current_balance"] = data.get("opening_balance", 0.0)
    db_acc = models.Account(**data)
    db.add(db_acc)
    db.commit()
    db.refresh(db_acc)
    return db_acc

def get_vouchers(db: Session):
    vouchers = db.query(models.JournalVoucher).order_by(desc(models.JournalVoucher.voucher_date)).all()
    for v in vouchers:
        for e in v.entries:
            if e.account:
                e.account_code = e.account.account_code
                e.account_name_ur = e.account.account_name_ur
    return vouchers

def create_journal_voucher(db: Session, v_data: schemas.JournalVoucherCreate):
    entries_data = v_data.entries
    # Auto-generate voucher number if missing
    today_str = datetime.date.today().strftime("%Y%m")
    count = db.query(models.JournalVoucher).filter(models.JournalVoucher.voucher_type == v_data.voucher_type).count()
    v_no = v_data.voucher_no or f"{v_data.voucher_type}-{today_str}-{count + 1:04d}"

    total_amount = sum(e.debit for e in entries_data)
    db_v = models.JournalVoucher(
        voucher_no=v_no,
        voucher_type=v_data.voucher_type,
        voucher_date=v_data.voucher_date or datetime.datetime.utcnow(),
        description=v_data.description,
        total_amount=total_amount,
        created_by=v_data.created_by or "Admin"
    )
    db.add(db_v)
    db.flush()

    for item in entries_data:
        entry = models.JournalEntry(
            voucher_id=db_v.id,
            account_id=item.account_id,
            debit=item.debit,
            credit=item.credit,
            narration=item.narration
        )
        db.add(entry)

        # Update account live balance
        acc = db.query(models.Account).filter(models.Account.id == item.account_id).first()
        if acc:
            if acc.account_type in ["ASSET", "EXPENSE"]:
                acc.current_balance += (item.debit - item.credit)
            else:
                acc.current_balance += (item.credit - item.debit)

    db.commit()
    db.refresh(db_v)
    for e in db_v.entries:
        if e.account:
            e.account_code = e.account.account_code
            e.account_name_ur = e.account.account_name_ur
    return db_v

def get_trial_balance(db: Session):
    accounts = get_accounts(db)
    trial_items = []
    total_debit = 0.0
    total_credit = 0.0
    for a in accounts:
        bal = a.current_balance
        debit_bal = 0.0
        credit_bal = 0.0
        if a.account_type in ["ASSET", "EXPENSE"]:
            if bal >= 0:
                debit_bal = bal
            else:
                credit_bal = abs(bal)
        else:
            if bal >= 0:
                credit_bal = bal
            else:
                debit_bal = abs(bal)
        total_debit += debit_bal
        total_credit += credit_bal
        trial_items.append({
            "account_code": a.account_code,
            "account_name_en": a.account_name_en,
            "account_name_ur": a.account_name_ur,
            "account_type": a.account_type,
            "subcategory": a.subcategory,
            "debit": debit_bal,
            "credit": credit_bal
        })
    return {
        "items": trial_items,
        "total_debit": total_debit,
        "total_credit": total_credit,
        "is_balanced": abs(total_debit - total_credit) < 0.01
    }


# ==================== USERS & PERMISSIONS CRUD ====================

def _parse_user_out(u: models.UserAccount):
    perms = []
    try:
        perms = json.loads(u.permissions or "[]")
    except Exception:
        perms = []
    return schemas.UserOut(
        id=u.id,
        username=u.username,
        full_name=u.full_name,
        role=u.role,
        permissions=perms,
        is_active=u.is_active,
        created_at=u.created_at
    )

def get_users(db: Session):
    users = db.query(models.UserAccount).all()
    return [_parse_user_out(u) for u in users]

def create_user(db: Session, user: schemas.UserCreate):
    perms_json = json.dumps(user.permissions or [])
    db_u = models.UserAccount(
        username=user.username,
        full_name=user.full_name,
        role=user.role,
        password_hash=user.password,
        permissions=perms_json,
        is_active=user.is_active
    )
    db.add(db_u)
    db.commit()
    db.refresh(db_u)
    return _parse_user_out(db_u)

def update_user(db: Session, user_id: int, udata: schemas.UserUpdate):
    db_u = db.query(models.UserAccount).filter(models.UserAccount.id == user_id).first()
    if not db_u:
        return None
    if udata.full_name is not None:
        db_u.full_name = udata.full_name
    if udata.role is not None:
        db_u.role = udata.role
    if udata.password is not None:
        db_u.password_hash = udata.password
    if udata.is_active is not None:
        db_u.is_active = udata.is_active
    if udata.permissions is not None:
        db_u.permissions = json.dumps(udata.permissions)
    db.commit()
    db.refresh(db_u)
    return _parse_user_out(db_u)

def delete_user(db: Session, user_id: int):
    db_u = db.query(models.UserAccount).filter(models.UserAccount.id == user_id).first()
    if db_u:
        db.delete(db_u)
        db.commit()
        return True
    return False

def authenticate_user(db: Session, login: schemas.UserLogin):
    user = db.query(models.UserAccount).filter(
        models.UserAccount.username == login.username,
        models.UserAccount.password_hash == login.password,
        models.UserAccount.is_active == 1
    ).first()
    if not user:
        return None
    return _parse_user_out(user)


# ==================== BULK IMPORTS & QUICKBOOKS REPORT IMPORT ====================

def import_packages_report_from_excel(db: Session, file_path: str = None):
    if not file_path:
        file_path = r"d:\APM\report 05-aug-2026 Pakeges.xlsx"
    if not os.path.exists(file_path):
        raise FileNotFoundError(f"File not found: {file_path}")

    import openpyxl
    wb = openpyxl.load_workbook(file_path, data_only=True)
    
    # Read sheet: prefer 'available items list ' or 'master sheet '
    sheet_name = 'master sheet ' if 'master sheet ' in wb.sheetnames else wb.sheetnames[0]
    ws = wb[sheet_name]
    
    imported_count = 0
    updated_count = 0

    current_cat = "PACKAGING"
    for r in range(4, ws.max_row + 1):
        # Find item name across columns 5, 4, 3, 2 (QuickBooks hierarchical indentation)
        item_name = None
        for c in (5, 4, 3, 2):
            val = ws.cell(r, c).value
            if val and str(val).strip() and str(val).strip().lower() not in ['inventory', 'assemblies', 'total', 'dated']:
                item_name = str(val).strip()
                break

        if not item_name:
            continue

        col6 = ws.cell(r, 6).value # On Hand
        col11 = ws.cell(r, 11).value # Unit

        # If it's a category header (all caps short brand/cat with no stock)
        if col6 is None:
            current_cat = item_name
            continue

        unit_val = str(col11).strip() if col11 and str(col11).strip() else "PCS"
        
        try:
            on_hand = float(col6) if col6 is not None and str(col6).strip() else 0.0
        except (ValueError, TypeError):
            on_hand = 0.0

        # Determine subcategory
        name_lower = item_name.lower()
        if "paper" in name_lower or "btp" in name_lower or "offset" in name_lower:
            cat = "PAPER_INNER"
        elif "card" in name_lower or "art" in name_lower or "bleach" in name_lower:
            cat = "CARD_OUTER"
        elif "ink" in name_lower or "cmyk" in name_lower or "cyan" in name_lower:
            cat = "INK"
        elif "lam" in name_lower or "thermal" in name_lower or "film" in name_lower:
            cat = "LAMINATION"
        elif "glue" in name_lower or "gum" in name_lower:
            cat = "GLUE_BINDING"
        else:
            cat = "PACKING"

        # Check existing item
        existing = db.query(models.RawMaterial).filter(models.RawMaterial.name == item_name).first()
        if existing:
            existing.current_stock = on_hand
            updated_count += 1
        else:
            new_item = models.RawMaterial(
                name=item_name,
                category=cat,
                unit=unit_val,
                current_stock=on_hand,
                min_reorder_level=10.0,
                unit_cost=0.0
            )
            db.add(new_item)
            imported_count += 1

    db.commit()
    return {
        "file_name": os.path.basename(file_path),
        "imported_new": imported_count,
        "updated_existing": updated_count,
        "total_processed": imported_count + updated_count
    }


def _get_val(obj, key, default=None):
    if isinstance(obj, dict):
        val = obj.get(key, default)
    else:
        val = getattr(obj, key, default)
    return default if val is None else val

def bulk_import_raw_materials(db: Session, items: list):
    count = 0
    for item in items:
        name = _get_val(item, "name")
        if not name:
            continue
        existing = db.query(models.RawMaterial).filter(models.RawMaterial.name == name).first()
        if existing:
            existing.current_stock = float(_get_val(item, "current_stock", existing.current_stock))
            existing.unit_cost = float(_get_val(item, "unit_cost", existing.unit_cost))
            if _get_val(item, "min_reorder_level"):
                existing.min_reorder_level = float(_get_val(item, "min_reorder_level"))
        else:
            db_item = models.RawMaterial(
                name=name,
                category=_get_val(item, "category", "PAPER_INNER"),
                size=_get_val(item, "size"),
                gsm=int(_get_val(item, "gsm")) if _get_val(item, "gsm") else None,
                unit=_get_val(item, "unit", "REAMS"),
                current_stock=float(_get_val(item, "current_stock", 0)),
                min_reorder_level=float(_get_val(item, "min_reorder_level", 5.0)),
                unit_cost=float(_get_val(item, "unit_cost", 0))
            )
            db.add(db_item)
        count += 1
    db.commit()
    return {"imported": count}

def bulk_import_books(db: Session, books: list):
    count = 0
    for b in books:
        art_id = _get_val(b, "article_id")
        title = _get_val(b, "title")
        if not art_id or not title:
            continue
        page_cnt = int(_get_val(b, "page_count", 128))
        forms = float(round(page_cnt / 16.0, 2))
        existing = db.query(models.Book).filter(models.Book.article_id == art_id).first()
        if existing:
            existing.title = title
            existing.page_count = page_cnt
            existing.forms_count = forms
        else:
            db_b = models.Book(
                article_id=art_id,
                title=title,
                language=_get_val(b, "language", "Urdu"),
                subject=_get_val(b, "subject"),
                page_count=page_cnt,
                forms_count=forms,
                inner_paper_spec=_get_val(b, "inner_paper_spec"),
                outer_card_spec=_get_val(b, "outer_card_spec"),
                colors=_get_val(b, "colors", "4-Color"),
                standard_cost_per_copy=float(_get_val(b, "standard_cost_per_copy", 0))
            )
            db.add(db_b)
        count += 1
    db.commit()
    return {"imported": count}

def bulk_import_accounts(db: Session, accounts: list):
    count = 0
    for a in accounts:
        code = str(_get_val(a, "account_code", "")).strip()
        name_en = _get_val(a, "account_name_en")
        name_ur = _get_val(a, "account_name_ur", name_en)
        acc_type = _get_val(a, "account_type", "EXPENSE")
        if not code or not name_en:
            continue
        existing = db.query(models.Account).filter(models.Account.account_code == code).first()
        if existing:
            existing.account_name_en = name_en
            existing.account_name_ur = name_ur
            existing.account_type = acc_type
        else:
            db_acc = models.Account(
                account_code=code,
                account_name_en=name_en,
                account_name_ur=name_ur,
                account_type=acc_type,
                subcategory=_get_val(a, "subcategory"),
                opening_balance=float(_get_val(a, "opening_balance", 0.0)),
                current_balance=float(_get_val(a, "opening_balance", 0.0))
            )
            db.add(db_acc)
        count += 1
    db.commit()
    return {"imported": count}

def bulk_import_employees(db: Session, employees: list):
    count = 0
    for e in employees:
        code = str(_get_val(e, "emp_code", "")).strip()
        name = _get_val(e, "full_name")
        if not code or not name:
            continue
        existing = db.query(models.Employee).filter(models.Employee.emp_code == code).first()
        if existing:
            existing.full_name = name
            existing.department = _get_val(e, "department", existing.department)
            existing.designation = _get_val(e, "designation", existing.designation)
            existing.basic_salary = float(_get_val(e, "basic_salary", existing.basic_salary))
        else:
            db_emp = models.Employee(
                emp_code=code,
                full_name=name,
                father_name=_get_val(e, "father_name"),
                cnic=_get_val(e, "cnic"),
                phone=_get_val(e, "phone"),
                department=_get_val(e, "department", "Production"),
                designation=_get_val(e, "designation", "Staff"),
                salary_type=_get_val(e, "salary_type", "MONTHLY"),
                basic_salary=float(_get_val(e, "basic_salary", 0.0)),
                status="ACTIVE"
            )
            db.add(db_emp)
        count += 1
    db.commit()
    return {"imported": count}


# ==================== SYSTEM SEEDING FOR NEW MODULES ====================

def seed_default_modules_if_empty(db: Session):
    # 1. Seed Users if empty
    if db.query(models.UserAccount).count() == 0:
        all_modules = [
            "raw_materials", "books", "work_orders", "printing",
            "outer", "binding", "warehouse", "damage", "hr",
            "accounts", "excel_hub", "users", "admin"
        ]
        users_to_seed = [
            models.UserAccount(
                username="admin",
                full_name="ایڈمنسٹریٹر (محمد عامر عباسی)",
                role="ADMIN",
                password_hash="1234",
                permissions=json.dumps(all_modules)
            ),
            models.UserAccount(
                username="store",
                full_name="اسٹور کیپر (حافظ طارق محمود)",
                role="STORE",
                password_hash="1234",
                permissions=json.dumps(["raw_materials", "excel_hub"])
            ),
            models.UserAccount(
                username="press",
                full_name="پریس سپروائزر (استاد فیاض احمد)",
                role="FLOOR",
                password_hash="1234",
                permissions=json.dumps(["work_orders", "printing", "outer", "binding", "damage"])
            ),
            models.UserAccount(
                username="warehouse",
                full_name="گودام انچارج (محمد عثمان)",
                role="WAREHOUSE",
                password_hash="1234",
                permissions=json.dumps(["warehouse", "work_orders"])
            ),
            models.UserAccount(
                username="accounts",
                full_name="اکاؤنٹس مینیجر (سید کاشف علی)",
                role="ACCOUNTS",
                password_hash="1234",
                permissions=json.dumps(["accounts", "excel_hub", "damage"])
            ),
            models.UserAccount(
                username="hr",
                full_name="ایچ آر آفیسر (بلال رضا)",
                role="HR",
                password_hash="1234",
                permissions=json.dumps(["hr", "excel_hub"])
            )
        ]
        db.add_all(users_to_seed)
        db.commit()

    # 2. Seed Standard Chart of Accounts if empty
    if db.query(models.Account).count() == 0:
        coa_to_seed = [
            # 1. ASSETS (موجودات / اثاثہ جات)
            models.Account(account_code="1010", account_name_en="Cash in Hand (Petty Cash)", account_name_ur="نقدی کھاتہ (کیش ان ہینڈ)", account_type="ASSET", subcategory="Current Asset", opening_balance=150000.0, current_balance=150000.0),
            models.Account(account_code="1020", account_name_en="Bank Al Habib Limited", account_name_ur="بینک الحبیب لمیٹڈ (کرنٹ اکاؤنٹ)", account_type="ASSET", subcategory="Bank Account", opening_balance=850000.0, current_balance=850000.0),
            models.Account(account_code="1030", account_name_en="Meezan Bank Limited", account_name_ur="میزان بینک لمیٹڈ (اسلامک اکاؤنٹ)", account_type="ASSET", subcategory="Bank Account", opening_balance=420000.0, current_balance=420000.0),
            models.Account(account_code="1040", account_name_en="Raw Material Inventory", account_name_ur="خام مال اسٹاک کھاتہ (کاغذ، کارڈ، سیاہی)", account_type="ASSET", subcategory="Current Asset", opening_balance=2400000.0, current_balance=2400000.0),
            models.Account(account_code="1050", account_name_en="Finished Goods Inventory", account_name_ur="تیار کتب گودام اسٹاک", account_type="ASSET", subcategory="Current Asset", opening_balance=3100000.0, current_balance=3100000.0),
            models.Account(account_code="1060", account_name_en="Accounts Receivable (Publishers/Dealers)", account_name_ur="گاہکوں سے واجب الوصول رقوم (ادھار کتب)", account_type="ASSET", subcategory="Receivables", opening_balance=650000.0, current_balance=650000.0),
            models.Account(account_code="1070", account_name_en="Printing & Binding Machinery", account_name_ur="پرنٹنگ و بائنڈنگ مشینیں و پلانٹ", account_type="ASSET", subcategory="Fixed Asset", opening_balance=8500000.0, current_balance=8500000.0),

            # 2. LIABILITIES (واجبات / ادائیگیاں)
            models.Account(account_code="2010", account_name_en="Paper Mills & Vendors Payable", account_name_ur="کاغذ و بورڈ ملز واجب الادا رقوم", account_type="LIABILITY", subcategory="Current Liability", opening_balance=750000.0, current_balance=750000.0),
            models.Account(account_code="2020", account_name_en="Ink & Chemicals Suppliers", account_name_ur="سیاہی و کیمیکل سپلائرز واجبات", account_type="LIABILITY", subcategory="Current Liability", opening_balance=120000.0, current_balance=120000.0),
            models.Account(account_code="2030", account_name_en="Salaries & Wages Payable", account_name_ur="ملازمین کی واجب الادا تنخواہیں", account_type="LIABILITY", subcategory="Current Liability", opening_balance=380000.0, current_balance=380000.0),
            models.Account(account_code="2040", account_name_en="Factory Electricity & Utilities Accrued", account_name_ur="واجب الادا بجلی کے بل و گیس", account_type="LIABILITY", subcategory="Current Liability", opening_balance=95000.0, current_balance=95000.0),

            # 3. EQUITY (سرمایہ)
            models.Account(account_code="3010", account_name_en="Owner Capital (Abbasi)", account_name_ur="مالکانہ سرمایہ کاری (عباسی پبلیکیشن)", account_type="EQUITY", subcategory="Owner Equity", opening_balance=12000000.0, current_balance=12000000.0),
            models.Account(account_code="3020", account_name_en="Retained Earnings", account_name_ur="سابقہ منافع و ریزرو فنڈ", account_type="EQUITY", subcategory="Retained Earnings", opening_balance=2725000.0, current_balance=2725000.0),

            # 4. REVENUE (آمدنی / سیلز)
            models.Account(account_code="4010", account_name_en="Book Sales Revenue", account_name_ur="کتب فروخت آمدنی (نقد و کریڈٹ)", account_type="REVENUE", subcategory="Sales Revenue", opening_balance=0.0, current_balance=0.0),
            models.Account(account_code="4020", account_name_en="Commercial Printing Services", account_name_ur="کمرشل پرنٹنگ و جاب ورک آمدنی", account_type="REVENUE", subcategory="Service Revenue", opening_balance=0.0, current_balance=0.0),
            models.Account(account_code="4030", account_name_en="Paper Scrap & Waste Sales", account_name_ur="ردی کاغذ اور کٹنگ ویسٹ فروخت آمدنی", account_type="REVENUE", subcategory="Other Revenue", opening_balance=0.0, current_balance=0.0),

            # 5. EXPENSES (اخراجات)
            models.Account(account_code="5010", account_name_en="Cost of Paper & Card Consumed", account_name_ur="استعمال شدہ کاغذ و کارڈ کی لاگت", account_type="EXPENSE", subcategory="Direct Production Cost", opening_balance=0.0, current_balance=0.0),
            models.Account(account_code="5020", account_name_en="Printing Plates & Chemicals Cost", account_name_ur="سی ٹی پی پلیٹس، سیاہی و کیمیکل لاگت", account_type="EXPENSE", subcategory="Direct Production Cost", opening_balance=0.0, current_balance=0.0),
            models.Account(account_code="5030", account_name_en="Press Machine Operators Wages", account_name_ur="پریس ورکرز اور ہیلپرز کی اجرت", account_type="EXPENSE", subcategory="Direct Production Cost", opening_balance=0.0, current_balance=0.0),
            models.Account(account_code="5040", account_name_en="Lamination & Binding Expenses", account_name_ur="لیمینیشن فلم، ہاٹ گلو اور تھری نائف کٹنگ خرچ", account_type="EXPENSE", subcategory="Direct Production Cost", opening_balance=0.0, current_balance=0.0),
            models.Account(account_code="5050", account_name_en="Factory Electricity & Generator Fuel", account_name_ur="فیکٹری بجلی بل اور ڈیزل جنریٹر خرچ", account_type="EXPENSE", subcategory="Factory Overhead", opening_balance=0.0, current_balance=0.0),
            models.Account(account_code="5060", account_name_en="Press Maintenance & Spares", account_name_ur="مشینوں کی آئلنگ، بیرنگ و مرمتی اخراجات", account_type="EXPENSE", subcategory="Factory Overhead", opening_balance=0.0, current_balance=0.0),
            models.Account(account_code="5070", account_name_en="Administrative Staff Salaries", account_name_ur="دفتری عملہ و منیجرز کی تنخواہیں", account_type="EXPENSE", subcategory="Administrative Expense", opening_balance=0.0, current_balance=0.0),
            models.Account(account_code="5080", account_name_en="Loss on Damaged & Misprinted Goods", account_name_ur="پرنٹنگ ڈیمیج اور مس پرنٹ کا مالی نقصان", account_type="EXPENSE", subcategory="Production Loss", opening_balance=0.0, current_balance=0.0)
        ]
        db.add_all(coa_to_seed)
        db.commit()

    # 3. Seed Sample Employees if empty
    if db.query(models.Employee).count() == 0:
        emp_to_seed = [
            models.Employee(emp_code="EMP-001", full_name="استاد محمد فیاض", father_name="محمد بشیر", cnic="35201-1234567-1", phone="0300-1234567", department="پرنٹنگ فلور", designation="چیف پریس ماسٹر (Offset Master)", basic_salary=65000.0, salary_type="MONTHLY"),
            models.Employee(emp_code="EMP-002", full_name="عبدالستار ملک", father_name="ملک نذیر", cnic="35201-2345678-3", phone="0301-2345678", department="بائنڈنگ یونٹ", designation="بائنڈنگ و کٹنگ ماسٹر", basic_salary=50000.0, salary_type="MONTHLY"),
            models.Employee(emp_code="EMP-003", full_name="محمد شہزاد", father_name="اللہ دتہ", cnic="35201-3456789-5", phone="0302-3456789", department="پرنٹنگ فلور", designation="سیکنڈ آپریٹر / فیڈر مین", basic_salary=38000.0, salary_type="MONTHLY"),
            models.Employee(emp_code="EMP-004", full_name="حافظ طارق محمود", father_name="غلام رسول", cnic="35201-4567890-7", phone="0303-4567890", department="خام مال اسٹور", designation="اسٹور کیپر", basic_salary=42000.0, salary_type="MONTHLY"),
            models.Employee(emp_code="EMP-005", full_name="سید کاشف علی", father_name="سید علی رضا", cnic="35201-5678901-9", phone="0304-5678901", department="اکاؤنٹس", designation="اکاؤنٹنٹ", basic_salary=55000.0, salary_type="MONTHLY")
        ]
        db.add_all(emp_to_seed)
        db.commit()

