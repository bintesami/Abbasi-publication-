from pydantic import BaseModel, Field
from typing import Optional, List
from datetime import datetime

# --- Raw Materials ---
class RawMaterialBase(BaseModel):
    name: str
    category: str
    size: Optional[str] = None
    gsm: Optional[int] = None
    unit: str = "REAMS"
    min_reorder_level: float = 5.0
    unit_cost: float = 0.0

class RawMaterialCreate(RawMaterialBase):
    current_stock: float = 0.0

class RawMaterialOut(RawMaterialBase):
    id: int
    current_stock: float
    created_at: datetime
    class Config:
        from_attributes = True

# --- Transactions ---
class RawMaterialTransactionCreate(BaseModel):
    material_id: int
    transaction_type: str # PURCHASE_IN, WORK_ORDER_OUT, DAMAGE_LOSS, ADJUSTMENT
    quantity: float
    reference_no: Optional[str] = None
    notes: Optional[str] = None

class RawMaterialTransactionOut(RawMaterialTransactionCreate):
    id: int
    date: datetime
    class Config:
        from_attributes = True

# --- Books ---
class BookBOMCreate(BaseModel):
    material_id: int
    quantity_per_copy: float
    unit: str
    wastage_allowance_pct: float = 3.0

class BookBOMOut(BookBOMCreate):
    id: int
    material_name: Optional[str] = None
    class Config:
        from_attributes = True

class BookBase(BaseModel):
    article_id: str
    title: str
    language: str = "Urdu"
    subject: Optional[str] = None
    page_count: int
    inner_paper_spec: Optional[str] = None
    outer_card_spec: Optional[str] = None
    colors: Optional[str] = "4-Color"
    standard_cost_per_copy: float = 0.0

class BookCreate(BookBase):
    bom_items: Optional[List[BookBOMCreate]] = []

class BookOut(BookBase):
    forms_count: float
    created_at: datetime
    bom_items: List[BookBOMOut] = []
    class Config:
        from_attributes = True

# --- Work Orders ---
class WorkOrderCreate(BaseModel):
    work_order_no: Optional[str] = None # Generated automatically if not provided
    book_article_id: str
    target_quantity: int
    target_delivery_date: Optional[datetime] = None
    notes: Optional[str] = None

class WorkOrderUpdateProgress(BaseModel):
    stage: str # INNER_PRINT, OUTER_PRINT, BINDING, FINALIZE
    inner_printed_sheets: Optional[int] = None
    inner_damage_sheets: Optional[int] = None
    outer_printed_covers: Optional[int] = None
    outer_damage_covers: Optional[int] = None
    binding_assembled_qty: Optional[int] = None
    binding_damage_qty: Optional[int] = None
    operator: Optional[str] = None
    notes: Optional[str] = None

class WorkOrderOut(BaseModel):
    work_order_no: str
    book_article_id: str
    book_title: Optional[str] = None
    target_quantity: int
    status: str
    inner_printed_sheets: int
    inner_damage_sheets: int
    inner_status: str
    outer_printed_covers: int
    outer_damage_covers: int
    outer_status: str
    binding_assembled_qty: int
    binding_damage_qty: int
    binding_status: str
    actual_finished_quantity: int
    total_damage_quantity: int
    start_date: datetime
    target_delivery_date: Optional[datetime] = None
    completed_date: Optional[datetime] = None
    notes: Optional[str] = None
    class Config:
        from_attributes = True

# --- Finished Goods ---
class FinishedGoodsCreate(BaseModel):
    book_article_id: str
    work_order_no: str
    batch_no: str
    warehouse_name: str = "Main Central Warehouse (گودام)"
    rack_location: str = "Rack-A"
    shelf_location: str = "Shelf-1"
    quantity_on_hand: int

class FinishedGoodsOut(FinishedGoodsCreate):
    id: int
    book_title: Optional[str] = None
    received_date: datetime
    class Config:
        from_attributes = True

# --- Damage & Wastage ---
class DamageWastageCreate(BaseModel):
    work_order_no: Optional[str] = None
    stage: str
    item_type: str
    damaged_quantity: float
    unit: str = "SHEETS"
    reason: str
    cost_loss: float = 0.0

class DamageWastageOut(DamageWastageCreate):
    id: int
    recorded_at: datetime
    class Config:
        from_attributes = True

# ==================== HR SCHEMAS ====================

class EmployeeBase(BaseModel):
    emp_code: str
    full_name: str
    father_name: Optional[str] = None
    cnic: Optional[str] = None
    phone: Optional[str] = None
    department: str
    designation: str
    salary_type: str = "MONTHLY"
    basic_salary: float = 0.0
    status: str = "ACTIVE"
    address: Optional[str] = None

class EmployeeCreate(EmployeeBase):
    pass

class EmployeeOut(EmployeeBase):
    id: int
    joining_date: datetime
    created_at: datetime
    class Config:
        from_attributes = True

class AttendanceCreate(BaseModel):
    employee_id: int
    date: str
    status: str = "PRESENT"
    check_in: Optional[str] = None
    check_out: Optional[str] = None
    overtime_hours: float = 0.0
    notes: Optional[str] = None

class AttendanceOut(AttendanceCreate):
    id: int
    employee_name: Optional[str] = None
    class Config:
        from_attributes = True

class PayrollCreate(BaseModel):
    employee_id: int
    month_year: str
    basic_salary: float
    overtime_amount: float = 0.0
    allowance: float = 0.0
    deductions: float = 0.0
    advance_deduction: float = 0.0
    net_salary: float
    payment_status: str = "PENDING"
    payment_method: str = "CASH"

class PayrollOut(PayrollCreate):
    id: int
    employee_name: Optional[str] = None
    emp_code: Optional[str] = None
    designation: Optional[str] = None
    payment_date: Optional[datetime] = None
    created_at: datetime
    class Config:
        from_attributes = True

# ==================== CHART OF ACCOUNTS & FINANCE SCHEMAS ====================

class AccountBase(BaseModel):
    account_code: str
    account_name_en: str
    account_name_ur: str
    account_type: str # ASSET, LIABILITY, EQUITY, REVENUE, EXPENSE
    subcategory: Optional[str] = None
    opening_balance: float = 0.0

class AccountCreate(AccountBase):
    pass

class AccountOut(AccountBase):
    id: int
    current_balance: float
    is_active: int
    created_at: datetime
    class Config:
        from_attributes = True

class JournalEntryCreate(BaseModel):
    account_id: int
    debit: float = 0.0
    credit: float = 0.0
    narration: Optional[str] = None

class JournalEntryOut(JournalEntryCreate):
    id: int
    account_code: Optional[str] = None
    account_name_ur: Optional[str] = None
    class Config:
        from_attributes = True

class JournalVoucherCreate(BaseModel):
    voucher_no: Optional[str] = None
    voucher_type: str # CPV, CRV, BPV, BRV, JV
    voucher_date: Optional[datetime] = None
    description: Optional[str] = None
    created_by: Optional[str] = "Admin"
    entries: List[JournalEntryCreate]

class JournalVoucherOut(BaseModel):
    id: int
    voucher_no: str
    voucher_type: str
    voucher_date: datetime
    description: Optional[str] = None
    total_amount: float
    created_by: str
    entries: List[JournalEntryOut] = []
    class Config:
        from_attributes = True

# ==================== USERS & PERMISSIONS SCHEMAS ====================

class UserBase(BaseModel):
    username: str
    full_name: str
    role: str = "CUSTOM"
    permissions: List[str] = []
    is_active: int = 1

class UserCreate(UserBase):
    password: str = "1234"

class UserUpdate(BaseModel):
    full_name: Optional[str] = None
    role: Optional[str] = None
    permissions: Optional[List[str]] = None
    password: Optional[str] = None
    is_active: Optional[int] = None

class UserOut(UserBase):
    id: int
    created_at: datetime
    class Config:
        from_attributes = True

class UserLogin(BaseModel):
    username: str
    password: str

