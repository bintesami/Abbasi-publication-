import datetime
from sqlalchemy import Column, Integer, String, Float, DateTime, ForeignKey, Text
from sqlalchemy.orm import relationship
from .database import Base

class RawMaterial(Base):
    __tablename__ = "raw_materials"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    name = Column(String(200), nullable=False) # e.g. 68 GSM Offset Paper
    category = Column(String(50), nullable=False) # PAPER_INNER, CARD_OUTER, INK, LAMINATION, GLUE_BINDING, PACKING
    size = Column(String(50), nullable=True) # e.g. 23x36, 20x30
    gsm = Column(Integer, nullable=True) # e.g. 68, 80, 250, 300
    unit = Column(String(20), nullable=False, default="REAMS") # REAMS, SHEETS, KG, ROLLS, PACKS
    current_stock = Column(Float, nullable=False, default=0.0)
    min_reorder_level = Column(Float, nullable=False, default=5.0) # triggers red alert
    unit_cost = Column(Float, nullable=False, default=0.0)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

    transactions = relationship("RawMaterialTransaction", back_populates="material", cascade="all, delete-orphan")
    bom_items = relationship("BookBOM", back_populates="material")


class RawMaterialTransaction(Base):
    __tablename__ = "raw_material_transactions"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    material_id = Column(Integer, ForeignKey("raw_materials.id"), nullable=False)
    transaction_type = Column(String(20), nullable=False) # PURCHASE_IN, WORK_ORDER_OUT, DAMAGE_LOSS, ADJUSTMENT
    quantity = Column(Float, nullable=False)
    reference_no = Column(String(100), nullable=True) # e.g. PO-101, APN-WO-2026-001
    date = Column(DateTime, default=datetime.datetime.utcnow)
    notes = Column(Text, nullable=True)

    material = relationship("RawMaterial", back_populates="transactions")


class Book(Base):
    __tablename__ = "books"

    article_id = Column(String(50), primary_key=True, index=True) # e.g. APN-BK-0101
    title = Column(String(250), nullable=False) # e.g. اردو قواعد و انشا - جماعت پنجم
    language = Column(String(50), nullable=False, default="Urdu")
    subject = Column(String(100), nullable=True)
    page_count = Column(Integer, nullable=False) # e.g. 128
    forms_count = Column(Float, nullable=False) # page_count / 16 (e.g. 8 forms)
    inner_paper_spec = Column(String(100), nullable=True) # 68 GSM Offset (23x36)
    outer_card_spec = Column(String(100), nullable=True) # 260 GSM Art Card (Gloss Lam)
    colors = Column(String(50), default="4-Color")
    standard_cost_per_copy = Column(Float, default=0.0)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

    bom_items = relationship("BookBOM", back_populates="book", cascade="all, delete-orphan")
    work_orders = relationship("WorkOrder", back_populates="book")
    finished_goods = relationship("FinishedGoods", back_populates="book")


class BookBOM(Base):
    __tablename__ = "book_boms"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    book_article_id = Column(String(50), ForeignKey("books.article_id"), nullable=False)
    material_id = Column(Integer, ForeignKey("raw_materials.id"), nullable=False)
    quantity_per_copy = Column(Float, nullable=False) # quantity required per 1 copy
    unit = Column(String(20), nullable=False) # SHEETS, REAMS, KG, METER
    wastage_allowance_pct = Column(Float, default=3.0) # standard wastage %

    book = relationship("Book", back_populates="bom_items")
    material = relationship("RawMaterial", back_populates="bom_items")


class WorkOrder(Base):
    __tablename__ = "work_orders"

    work_order_no = Column(String(50), primary_key=True, index=True) # Unique Tracking ID: APN-WO-2026-0001
    book_article_id = Column(String(50), ForeignKey("books.article_id"), nullable=False)
    target_quantity = Column(Integer, nullable=False) # e.g. 5000 books
    status = Column(String(30), default="PLANNED") # PLANNED, MATERIAL_ISSUED, IN_PRINTING, IN_BINDING, COMPLETED, CANCELLED
    
    # Progress tracking across split stages
    inner_printed_sheets = Column(Integer, default=0)
    inner_damage_sheets = Column(Integer, default=0)
    inner_status = Column(String(30), default="PENDING") # PENDING, IN_PROGRESS, COMPLETED
    
    outer_printed_covers = Column(Integer, default=0)
    outer_damage_covers = Column(Integer, default=0)
    outer_status = Column(String(30), default="PENDING") # PENDING, IN_PROGRESS, LAMINATED, READY_FOR_BINDING
    
    binding_assembled_qty = Column(Integer, default=0)
    binding_damage_qty = Column(Integer, default=0)
    binding_status = Column(String(30), default="PENDING") # PENDING, IN_PROGRESS, COMPLETED
    
    actual_finished_quantity = Column(Integer, default=0)
    total_damage_quantity = Column(Integer, default=0)

    start_date = Column(DateTime, default=datetime.datetime.utcnow)
    target_delivery_date = Column(DateTime, nullable=True)
    completed_date = Column(DateTime, nullable=True)
    notes = Column(Text, nullable=True)

    book = relationship("Book", back_populates="work_orders")
    finished_goods = relationship("FinishedGoods", back_populates="work_order")
    stage_logs = relationship("ProductionStageLog", back_populates="work_order", cascade="all, delete-orphan")
    damage_records = relationship("DamageWastageRecord", back_populates="work_order", cascade="all, delete-orphan")


class ProductionStageLog(Base):
    __tablename__ = "production_stage_logs"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    work_order_no = Column(String(50), ForeignKey("work_orders.work_order_no"), nullable=False)
    stage = Column(String(30), nullable=False) # MATERIAL_ISSUE, INNER_PRINT, OUTER_PRINT, BINDING, WAREHOUSE_IN
    action = Column(String(100), nullable=False)
    quantity_done = Column(Integer, default=0)
    quantity_waste = Column(Integer, default=0)
    operator = Column(String(100), nullable=True)
    timestamp = Column(DateTime, default=datetime.datetime.utcnow)
    notes = Column(Text, nullable=True)

    work_order = relationship("WorkOrder", back_populates="stage_logs")


class FinishedGoods(Base):
    __tablename__ = "finished_goods"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    book_article_id = Column(String(50), ForeignKey("books.article_id"), nullable=False)
    work_order_no = Column(String(50), ForeignKey("work_orders.work_order_no"), nullable=False)
    batch_no = Column(String(50), nullable=False)
    warehouse_name = Column(String(100), default="Main Central Warehouse (گودام)")
    rack_location = Column(String(50), default="Rack-A")
    shelf_location = Column(String(50), default="Shelf-1")
    quantity_on_hand = Column(Integer, default=0)
    received_date = Column(DateTime, default=datetime.datetime.utcnow)

    book = relationship("Book", back_populates="finished_goods")
    work_order = relationship("WorkOrder", back_populates="finished_goods")


class DamageWastageRecord(Base):
    __tablename__ = "damage_wastage_records"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    work_order_no = Column(String(50), ForeignKey("work_orders.work_order_no"), nullable=True)
    stage = Column(String(30), nullable=False) # RAW_STORE, PRINTING_INNER, PRINTING_OUTER, BINDING, WAREHOUSE
    item_type = Column(String(50), nullable=False) # Paper Sheets, Outer Card, Bound Book, Ink Waste
    damaged_quantity = Column(Float, nullable=False)
    unit = Column(String(20), default="SHEETS")
    reason = Column(String(200), nullable=False) # Misprint, Cutting defect, Glue failure, Water damage, Folding error
    cost_loss = Column(Float, default=0.0) # Financial loss in PKR
    recorded_at = Column(DateTime, default=datetime.datetime.utcnow)

    work_order = relationship("WorkOrder", back_populates="damage_records")


# ==================== HR (HUMAN RESOURCES) MODULE ====================

class Employee(Base):
    __tablename__ = "employees"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    emp_code = Column(String(50), unique=True, index=True, nullable=False) # e.g. EMP-001
    full_name = Column(String(150), nullable=False) # e.g. محمد وسیم
    father_name = Column(String(150), nullable=True)
    cnic = Column(String(30), nullable=True)
    phone = Column(String(30), nullable=True)
    department = Column(String(100), nullable=False) # Printing, Binding, Warehouse, Store, Pre-Press, Accounts, Admin
    designation = Column(String(100), nullable=False) # Offset Machine Master, Binding Specialist, etc.
    salary_type = Column(String(30), default="MONTHLY") # MONTHLY, DAILY, PIECE_RATE
    basic_salary = Column(Float, default=0.0)
    joining_date = Column(DateTime, default=datetime.datetime.utcnow)
    status = Column(String(30), default="ACTIVE") # ACTIVE, ON_LEAVE, RESIGNED, TERMINATED
    address = Column(Text, nullable=True)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

    attendances = relationship("Attendance", back_populates="employee", cascade="all, delete-orphan")
    payrolls = relationship("Payroll", back_populates="employee", cascade="all, delete-orphan")


class Attendance(Base):
    __tablename__ = "attendances"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    employee_id = Column(Integer, ForeignKey("employees.id"), nullable=False)
    date = Column(String(20), nullable=False) # YYYY-MM-DD
    status = Column(String(20), default="PRESENT") # PRESENT, ABSENT, LEAVE, HALF_DAY
    check_in = Column(String(20), nullable=True)
    check_out = Column(String(20), nullable=True)
    overtime_hours = Column(Float, default=0.0)
    notes = Column(Text, nullable=True)

    employee = relationship("Employee", back_populates="attendances")


class Payroll(Base):
    __tablename__ = "payrolls"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    employee_id = Column(Integer, ForeignKey("employees.id"), nullable=False)
    month_year = Column(String(30), nullable=False) # e.g. "2026-08"
    basic_salary = Column(Float, default=0.0)
    overtime_amount = Column(Float, default=0.0)
    allowance = Column(Float, default=0.0)
    deductions = Column(Float, default=0.0)
    advance_deduction = Column(Float, default=0.0)
    net_salary = Column(Float, default=0.0)
    payment_status = Column(String(20), default="PENDING") # PENDING, PAID, PARTIAL
    payment_date = Column(DateTime, nullable=True)
    payment_method = Column(String(30), default="CASH") # CASH, BANK_TRANSFER, CHEQUE
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

    employee = relationship("Employee", back_populates="payrolls")


# ==================== FINANCE & CHART OF ACCOUNTS (COA) MODULE ====================

class Account(Base):
    __tablename__ = "accounts"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    account_code = Column(String(20), unique=True, index=True, nullable=False) # e.g. 1010, 2010, 4010
    account_name_en = Column(String(150), nullable=False) # Cash in Hand
    account_name_ur = Column(String(150), nullable=False) # نقدی کھاتہ (پیٹی کیش)
    account_type = Column(String(30), nullable=False) # ASSET, LIABILITY, EQUITY, REVENUE, EXPENSE
    subcategory = Column(String(100), nullable=True) # Current Assets, Cost of Production, Operating Expense
    opening_balance = Column(Float, default=0.0)
    current_balance = Column(Float, default=0.0)
    is_active = Column(Integer, default=1)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

    entries = relationship("JournalEntry", back_populates="account")


class JournalVoucher(Base):
    __tablename__ = "journal_vouchers"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    voucher_no = Column(String(50), unique=True, index=True, nullable=False) # CPV-2026-0001, JV-2026-0001
    voucher_type = Column(String(20), nullable=False) # CPV, CRV, BPV, BRV, JV
    voucher_date = Column(DateTime, default=datetime.datetime.utcnow)
    description = Column(Text, nullable=True)
    total_amount = Column(Float, default=0.0)
    created_by = Column(String(100), default="Admin")

    entries = relationship("JournalEntry", back_populates="voucher", cascade="all, delete-orphan")


class JournalEntry(Base):
    __tablename__ = "journal_entries"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    voucher_id = Column(Integer, ForeignKey("journal_vouchers.id"), nullable=False)
    account_id = Column(Integer, ForeignKey("accounts.id"), nullable=False)
    debit = Column(Float, default=0.0)
    credit = Column(Float, default=0.0)
    narration = Column(String(255), nullable=True)

    voucher = relationship("JournalVoucher", back_populates="entries")
    account = relationship("Account", back_populates="entries")


# ==================== USERS & PERMISSIONS MODULE ====================

class UserAccount(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    username = Column(String(50), unique=True, index=True, nullable=False)
    full_name = Column(String(150), nullable=False)
    role = Column(String(50), default="CUSTOM") # ADMIN, STORE, FLOOR, WAREHOUSE, ACCOUNTS, HR, VIEWER, CUSTOM
    password_hash = Column(String(255), default="1234")
    permissions = Column(Text, nullable=False, default="[]") # JSON encoded list of module keys
    is_active = Column(Integer, default=1)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

