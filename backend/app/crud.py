import datetime
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
