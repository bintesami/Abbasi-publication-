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

# --- Auto Seeding Initial Data ---
@app.post("/api/seed")
def seed_database(db: Session = Depends(get_db)):
    from .seed_data import run_seed
    return run_seed(db)

# Static Frontend mounting
FRONTEND_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "..", "frontend")
if os.path.exists(FRONTEND_DIR):
    app.mount("/static", StaticFiles(directory=FRONTEND_DIR), name="static")

    @app.get("/")
    def serve_frontend():
        return FileResponse(os.path.join(FRONTEND_DIR, "index.html"))
