from sqlalchemy.orm import Session
import datetime
from . import models

def run_seed(db: Session):
    # Check if already seeded
    if db.query(models.RawMaterial).count() > 0:
        return {"status": "already_seeded", "message": "ڈیٹا پہلے سے موجود ہے"}

    # 1. Raw Materials
    materials_data = [
        # Paper Inner
        {"name": "68 GSM Local Offset Paper (23x36)", "category": "PAPER_INNER", "size": "23x36", "gsm": 68, "unit": "REAMS", "current_stock": 145.0, "min_reorder_level": 20.0, "unit_cost": 4200.0},
        {"name": "70 GSM Imported Woodfree Paper (20x30)", "category": "PAPER_INNER", "size": "20x30", "gsm": 70, "unit": "REAMS", "current_stock": 65.0, "min_reorder_level": 15.0, "unit_cost": 4800.0},
        {"name": "80 GSM White Offset Paper (25x36)", "category": "PAPER_INNER", "size": "25x36", "gsm": 80, "unit": "REAMS", "current_stock": 4.0, "min_reorder_level": 10.0, "unit_cost": 5300.0}, # Low stock
        
        # Paper Outer (Card)
        {"name": "260 GSM Art Card (25x36)", "category": "CARD_OUTER", "size": "25x36", "gsm": 260, "unit": "REAMS", "current_stock": 42.0, "min_reorder_level": 10.0, "unit_cost": 8500.0},
        {"name": "300 GSM Bleached Board (23x36)", "category": "CARD_OUTER", "size": "23x36", "gsm": 300, "unit": "REAMS", "current_stock": 3.0, "min_reorder_level": 8.0, "unit_cost": 9800.0}, # Low stock
        
        # Inks (CMYK)
        {"name": "Toyo Process Cyan Ink (سیان نیلی سیاہی)", "category": "INK", "size": "1 KG Can", "gsm": None, "unit": "KG", "current_stock": 25.0, "min_reorder_level": 5.0, "unit_cost": 2100.0},
        {"name": "Toyo Process Magenta Ink (میجنٹا گلابی سیاہی)", "category": "INK", "size": "1 KG Can", "gsm": None, "unit": "KG", "current_stock": 18.0, "min_reorder_level": 5.0, "unit_cost": 2100.0},
        {"name": "Toyo Process Yellow Ink (پیلی سیاہی)", "category": "INK", "size": "1 KG Can", "gsm": None, "unit": "KG", "current_stock": 22.0, "min_reorder_level": 5.0, "unit_cost": 2100.0},
        {"name": "Toyo Process Black Ink (کالی سیاہی)", "category": "INK", "size": "1 KG Can", "gsm": None, "unit": "KG", "current_stock": 2.5, "min_reorder_level": 6.0, "unit_cost": 1950.0}, # Low stock
        
        # Lamination & Glue
        {"name": "Gloss Thermal Lamination Film 24\"", "category": "LAMINATION", "size": "24 inch x 2000m", "gsm": None, "unit": "ROLLS", "current_stock": 14.0, "min_reorder_level": 4.0, "unit_cost": 7200.0},
        {"name": "Matt Thermal Lamination Film 26\"", "category": "LAMINATION", "size": "26 inch x 2000m", "gsm": None, "unit": "ROLLS", "current_stock": 1.0, "min_reorder_level": 3.0, "unit_cost": 7800.0}, # Low stock
        {"name": "Hot Melt Spine Binding Glue (ہاٹ میلٹ گوند)", "category": "GLUE_BINDING", "size": "25 KG Sack", "gsm": None, "unit": "KG", "current_stock": 75.0, "min_reorder_level": 20.0, "unit_cost": 850.0},
        {"name": "Side Glue & Stitching Wire (سائیڈ گلو و وائر)", "category": "GLUE_BINDING", "size": "Box", "gsm": None, "unit": "PACKS", "current_stock": 12.0, "min_reorder_level": 5.0, "unit_cost": 1200.0},
    ]

    mat_objs = {}
    for m in materials_data:
        obj = models.RawMaterial(**m)
        db.add(obj)
        db.flush()
        mat_objs[m["name"]] = obj

    # 2. Books Master
    books_data = [
        {
            "article_id": "APN-BK-0101",
            "title": "اردو قواعد و انشا - جماعت پنجم",
            "language": "Urdu",
            "subject": "اردو (Urdu Literature)",
            "page_count": 128,
            "forms_count": 8.0,
            "inner_paper_spec": "68 GSM Local Offset (23x36)",
            "outer_card_spec": "260 GSM Art Card (Gloss Laminated)",
            "colors": "4-Color",
            "standard_cost_per_copy": 95.50
        },
        {
            "article_id": "APN-BK-0102",
            "title": "Oxford Modern English - Grade 4",
            "language": "English",
            "subject": "English Language",
            "page_count": 144,
            "forms_count": 9.0,
            "inner_paper_spec": "70 GSM Imported Woodfree (20x30)",
            "outer_card_spec": "260 GSM Art Card (Matt Laminated)",
            "colors": "4-Color",
            "standard_cost_per_copy": 115.00
        },
        {
            "article_id": "APN-BK-0103",
            "title": "اسلامیات لازمی - جماعت ہشتم",
            "language": "Urdu",
            "subject": "اسلامیات (Islamic Studies)",
            "page_count": 160,
            "forms_count": 10.0,
            "inner_paper_spec": "68 GSM Local Offset (23x36)",
            "outer_card_spec": "260 GSM Art Card (Gloss Laminated)",
            "colors": "2-Color",
            "standard_cost_per_copy": 88.00
        },
        {
            "article_id": "APN-BK-0104",
            "title": "General Science & Technology - Grade 5",
            "language": "English",
            "subject": "Science",
            "page_count": 192,
            "forms_count": 12.0,
            "inner_paper_spec": "70 GSM Imported Woodfree (20x30)",
            "outer_card_spec": "300 GSM Bleached Board (Gloss Laminated)",
            "colors": "4-Color",
            "standard_cost_per_copy": 142.00
        }
    ]

    book_objs = {}
    for b in books_data:
        obj = models.Book(**b)
        db.add(obj)
        db.flush()
        book_objs[b["article_id"]] = obj

    # 3. BOM for APN-BK-0101
    bom_items = [
        models.BookBOM(book_article_id="APN-BK-0101", material_id=mat_objs["68 GSM Local Offset Paper (23x36)"].id, quantity_per_copy=0.016, unit="REAMS", wastage_allowance_pct=4.0),
        models.BookBOM(book_article_id="APN-BK-0101", material_id=mat_objs["260 GSM Art Card (25x36)"].id, quantity_per_copy=0.002, unit="REAMS", wastage_allowance_pct=3.0),
        models.BookBOM(book_article_id="APN-BK-0101", material_id=mat_objs["Toyo Process Black Ink (کالی سیاہی)"].id, quantity_per_copy=0.0015, unit="KG", wastage_allowance_pct=5.0),
        models.BookBOM(book_article_id="APN-BK-0101", material_id=mat_objs["Gloss Thermal Lamination Film 24\""].id, quantity_per_copy=0.0003, unit="ROLLS", wastage_allowance_pct=2.0),
        models.BookBOM(book_article_id="APN-BK-0101", material_id=mat_objs["Hot Melt Spine Binding Glue (ہاٹ میلٹ گوند)"].id, quantity_per_copy=0.012, unit="KG", wastage_allowance_pct=2.0),
    ]
    for b in bom_items:
        db.add(b)

    # 4. Work Orders
    # Completed Job
    wo1 = models.WorkOrder(
        work_order_no="APN-WO-2026-0001",
        book_article_id="APN-BK-0101",
        target_quantity=5000,
        status="COMPLETED",
        inner_printed_sheets=5000,
        inner_damage_sheets=45,
        inner_status="COMPLETED",
        outer_printed_covers=5000,
        outer_damage_covers=25,
        outer_status="READY_FOR_BINDING",
        binding_assembled_qty=4920,
        binding_damage_qty=10,
        binding_status="COMPLETED",
        actual_finished_quantity=4920,
        total_damage_quantity=80,
        start_date=datetime.datetime.utcnow() - datetime.timedelta(days=7),
        completed_date=datetime.datetime.utcnow() - datetime.timedelta(days=1),
        notes="سیشن 2026-2027 ایڈیشن - مکمل تیار و گودام منتقل"
    )
    db.add(wo1)

    # Active Job 1 - In Binding
    wo2 = models.WorkOrder(
        work_order_no="APN-WO-2026-0002",
        book_article_id="APN-BK-0102",
        target_quantity=3000,
        status="IN_BINDING",
        inner_printed_sheets=3000,
        inner_damage_sheets=30,
        inner_status="COMPLETED",
        outer_printed_covers=3000,
        outer_damage_covers=15,
        outer_status="READY_FOR_BINDING",
        binding_assembled_qty=1650,
        binding_damage_qty=8,
        binding_status="IN_PROGRESS",
        actual_finished_quantity=0,
        total_damage_quantity=53,
        start_date=datetime.datetime.utcnow() - datetime.timedelta(days=3),
        target_delivery_date=datetime.datetime.utcnow() + datetime.timedelta(days=2),
        notes="انر اور آؤٹر پرنٹنگ مکمل ہو چکی ہے، بائنڈنگ فلور پر اسمبلی جاری ہے"
    )
    db.add(wo2)

    # Active Job 2 - In Printing
    wo3 = models.WorkOrder(
        work_order_no="APN-WO-2026-0003",
        book_article_id="APN-BK-0103",
        target_quantity=4000,
        status="IN_PRINTING",
        inner_printed_sheets=2400,
        inner_damage_sheets=22,
        inner_status="IN_PROGRESS",
        outer_printed_covers=4000,
        outer_damage_covers=18,
        outer_status="READY_FOR_BINDING",
        binding_assembled_qty=0,
        binding_damage_qty=0,
        binding_status="PENDING",
        actual_finished_quantity=0,
        total_damage_quantity=40,
        start_date=datetime.datetime.utcnow() - datetime.timedelta(days=1),
        target_delivery_date=datetime.datetime.utcnow() + datetime.timedelta(days=4),
        notes="انر کے فارمے مشین نمبر 2 پر چھپ رہے ہیں"
    )
    db.add(wo3)

    # 5. Finished Goods Warehouse
    fg1 = models.FinishedGoods(
        book_article_id="APN-BK-0101",
        work_order_no="APN-WO-2026-0001",
        batch_no="APN-WO-2026-0001",
        warehouse_name="مرکزی گودام عباسی پبلیکیشن (APN Warehouse)",
        rack_location="Rack-A",
        shelf_location="Shelf-02",
        quantity_on_hand=4920
    )
    db.add(fg1)

    # 6. Damage Records
    dmg1 = models.DamageWastageRecord(
        work_order_no="APN-WO-2026-0001",
        stage="PRINTING_INNER",
        item_type="انر فارمے (Inner Sheets)",
        damaged_quantity=45,
        unit="SHEETS",
        reason="مشین پر فیڈر جیم اور مس پرنٹنگ",
        cost_loss=202.50
    )
    dmg2 = models.DamageWastageRecord(
        work_order_no="APN-WO-2026-0001",
        stage="PRINTING_OUTER",
        item_type="ٹائٹل کارڈ (Outer Covers)",
        damaged_quantity=25,
        unit="SHEETS",
        reason="لیمینیشن میں سلوٹ اور ببل آنا",
        cost_loss=375.00
    )
    dmg3 = models.DamageWastageRecord(
        work_order_no="APN-WO-2026-0001",
        stage="BINDING",
        item_type="بائنڈنگ شدہ کتب (Bound Books)",
        damaged_quantity=10,
        unit="BOOKS",
        reason="تھری نائف کٹر پر کٹائی میں خرابی",
        cost_loss=955.00
    )
    db.add(dmg1)
    db.add(dmg2)
    db.add(dmg3)

    db.commit()
    return {"status": "success", "message": "عباسی پبلیکیشن نیٹ ورک کا ابتدائی ڈیٹا کامیابی سے فیڈ کر دیا گیا ہے۔"}
