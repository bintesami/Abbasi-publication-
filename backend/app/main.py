import os
from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from sqlalchemy.orm import Session
from typing import List

from .database import engine, Base, get_db
from . import models, schemas, crud

# Initialize database tables
Base.metadata.create_all(bind=engine)

# Seed default modules if database empty
try:
    init_db = next(get_db())
    crud.seed_default_modules_if_empty(init_db)
    init_db.close()
except Exception as e:
    print("Startup seed notice:", e)

app = FastAPI(
    title="Abbasi Publication Network (APN) ERP",
    description="Inventory, Production & Warehouse Management ERP System for Printing & Publishing",
    version="1.0.0"
)

# Enable CORS for local and network access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ==================== API ROUTES ====================

@app.get("/api/dashboard/metrics")
def get_dashboard(db: Session = Depends(get_db)):
    return crud.get_dashboard_summary(db)

# --- Raw Materials ---
@app.get("/api/raw-materials", response_model=List[schemas.RawMaterialOut])
def list_raw_materials(db: Session = Depends(get_db)):
    return crud.get_raw_materials(db)

@app.get("/api/raw-materials/low-stock")
def list_low_stock(db: Session = Depends(get_db)):
    return crud.get_low_stock_materials(db)

@app.post("/api/raw-materials", response_model=schemas.RawMaterialOut)
def create_material(item: schemas.RawMaterialCreate, db: Session = Depends(get_db)):
    return crud.create_raw_material(db, item)

@app.post("/api/raw-materials/transactions")
def add_material_transaction(trans: schemas.RawMaterialTransactionCreate, db: Session = Depends(get_db)):
    try:
        return crud.record_raw_material_transaction(db, trans)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))

# --- Books & BOM ---
@app.get("/api/books", response_model=List[schemas.BookOut])
def list_books(db: Session = Depends(get_db)):
    return crud.get_books(db)

@app.get("/api/books/{article_id}", response_model=schemas.BookOut)
def get_book(article_id: str, db: Session = Depends(get_db)):
    book = crud.get_book_by_id(db, article_id)
    if not book:
        raise HTTPException(status_code=404, detail="Book not found")
    return book

@app.post("/api/books", response_model=schemas.BookOut)
def create_book(book: schemas.BookCreate, db: Session = Depends(get_db)):
    return crud.create_book(db, book)

# --- Work Orders ---
@app.get("/api/work-orders", response_model=List[schemas.WorkOrderOut])
def list_work_orders(db: Session = Depends(get_db)):
    return crud.get_work_orders(db)

@app.get("/api/work-orders/{work_order_no}", response_model=schemas.WorkOrderOut)
def get_work_order(work_order_no: str, db: Session = Depends(get_db)):
    wo = crud.get_work_order_by_no(db, work_order_no)
    if not wo:
        raise HTTPException(status_code=404, detail="Work Order not found")
    return wo

@app.post("/api/work-orders", response_model=schemas.WorkOrderOut)
def create_work_order(wo: schemas.WorkOrderCreate, db: Session = Depends(get_db)):
    try:
        return crud.create_work_order(db, wo)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))

@app.post("/api/work-orders/{work_order_no}/progress", response_model=schemas.WorkOrderOut)
def update_progress(work_order_no: str, progress: schemas.WorkOrderUpdateProgress, db: Session = Depends(get_db)):
    try:
        return crud.update_work_order_progress(db, work_order_no, progress)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))

# --- Finished Goods ---
@app.get("/api/finished-goods", response_model=List[schemas.FinishedGoodsOut])
def list_finished_goods(db: Session = Depends(get_db)):
    return crud.get_finished_goods(db)

@app.post("/api/finished-goods/{fg_id}/relocate")
def relocate_fg(fg_id: int, rack: str, shelf: str, db: Session = Depends(get_db)):
    return crud.transfer_finished_goods_location(db, fg_id, rack, shelf)

# --- Damage Records ---
@app.get("/api/damage-records", response_model=List[schemas.DamageWastageOut])
def list_damage(db: Session = Depends(get_db)):
    return crud.get_damage_records(db)

# ==================== HR (HUMAN RESOURCES) ROUTES ====================

@app.get("/api/hr/employees", response_model=List[schemas.EmployeeOut])
def list_employees(db: Session = Depends(get_db)):
    return crud.get_employees(db)

@app.post("/api/hr/employees", response_model=schemas.EmployeeOut)
def create_employee(emp: schemas.EmployeeCreate, db: Session = Depends(get_db)):
    return crud.create_employee(db, emp)

@app.put("/api/hr/employees/{emp_id}", response_model=schemas.EmployeeOut)
def update_employee(emp_id: int, data: dict, db: Session = Depends(get_db)):
    updated = crud.update_employee(db, emp_id, data)
    if not updated:
        raise HTTPException(status_code=404, detail="Employee not found")
    return updated

@app.get("/api/hr/attendance", response_model=List[schemas.AttendanceOut])
def list_attendance(date: str = None, db: Session = Depends(get_db)):
    return crud.get_attendances(db, date)

@app.post("/api/hr/attendance", response_model=schemas.AttendanceOut)
def record_attendance(att: schemas.AttendanceCreate, db: Session = Depends(get_db)):
    return crud.record_attendance(db, att)

@app.get("/api/hr/payroll", response_model=List[schemas.PayrollOut])
def list_payroll(month_year: str = None, db: Session = Depends(get_db)):
    return crud.get_payrolls(db, month_year)

@app.post("/api/hr/payroll", response_model=schemas.PayrollOut)
def create_payroll(pr: schemas.PayrollCreate, db: Session = Depends(get_db)):
    return crud.create_payroll(db, pr)

@app.post("/api/hr/payroll/{payroll_id}/pay")
def pay_salary(payroll_id: int, status: str = "PAID", method: str = "CASH", db: Session = Depends(get_db)):
    return crud.update_payroll_payment(db, payroll_id, status, method)


# ==================== CHART OF ACCOUNTS & FINANCE ROUTES ====================

@app.get("/api/finance/accounts", response_model=List[schemas.AccountOut])
def list_accounts(db: Session = Depends(get_db)):
    return crud.get_accounts(db)

@app.post("/api/finance/accounts", response_model=schemas.AccountOut)
def create_account(acc: schemas.AccountCreate, db: Session = Depends(get_db)):
    return crud.create_account(db, acc)

@app.get("/api/finance/vouchers", response_model=List[schemas.JournalVoucherOut])
def list_vouchers(db: Session = Depends(get_db)):
    return crud.get_vouchers(db)

@app.post("/api/finance/vouchers", response_model=schemas.JournalVoucherOut)
def create_voucher(v_data: schemas.JournalVoucherCreate, db: Session = Depends(get_db)):
    return crud.create_journal_voucher(db, v_data)

@app.get("/api/finance/trial-balance")
def get_trial_balance(db: Session = Depends(get_db)):
    return crud.get_trial_balance(db)


# ==================== USERS & PERMISSIONS ROUTES ====================

@app.get("/api/users", response_model=List[schemas.UserOut])
def list_users(db: Session = Depends(get_db)):
    return crud.get_users(db)

@app.post("/api/users", response_model=schemas.UserOut)
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    return crud.create_user(db, user)

@app.put("/api/users/{user_id}", response_model=schemas.UserOut)
def update_user(user_id: int, udata: schemas.UserUpdate, db: Session = Depends(get_db)):
    res = crud.update_user(db, user_id, udata)
    if not res:
        raise HTTPException(status_code=404, detail="User not found")
    return res

@app.delete("/api/users/{user_id}")
def delete_user(user_id: int, db: Session = Depends(get_db)):
    ok = crud.delete_user(db, user_id)
    if not ok:
        raise HTTPException(status_code=404, detail="User not found")
    return {"deleted": True}

@app.post("/api/users/login")
def login(login_data: schemas.UserLogin, db: Session = Depends(get_db)):
    user = crud.authenticate_user(db, login_data)
    if not user:
        raise HTTPException(status_code=401, detail="غلط یوزر نام یا پاس ورڈ (Invalid credentials)")
    return user


# ==================== EXCEL & BULK IMPORT ROUTES ====================

@app.post("/api/import/packages-report")
def import_packages_report(path: str = None, db: Session = Depends(get_db)):
    try:
        return crud.import_packages_report_from_excel(db, path)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/import/raw-materials")
def import_raw_materials(payload: dict, db: Session = Depends(get_db)):
    items = payload.get("items", [])
    return crud.bulk_import_raw_materials(db, items)

@app.post("/api/import/books")
def import_books(payload: dict, db: Session = Depends(get_db)):
    books = payload.get("books", [])
    return crud.bulk_import_books(db, books)

@app.post("/api/import/accounts")
def import_accounts(payload: dict, db: Session = Depends(get_db)):
    accounts = payload.get("accounts", [])
    return crud.bulk_import_accounts(db, accounts)

@app.post("/api/import/employees")
def import_employees(payload: dict, db: Session = Depends(get_db)):
    employees = payload.get("employees", [])
    return crud.bulk_import_employees(db, employees)


# --- Auto Seeding Initial Data ---
@app.post("/api/seed")
def seed_database(db: Session = Depends(get_db)):
    from .seed_data import run_seed
    base_res = run_seed(db)
    crud.seed_default_modules_if_empty(db)
    return {"status": "seeded", "base": base_res}


# Static Frontend mounting
FRONTEND_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "..", "frontend")
if os.path.exists(FRONTEND_DIR):
    app.mount("/static", StaticFiles(directory=FRONTEND_DIR), name="static")

    @app.get("/")
    def serve_frontend():
        return FileResponse(os.path.join(FRONTEND_DIR, "index.html"))
