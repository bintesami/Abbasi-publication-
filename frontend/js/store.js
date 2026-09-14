// Central Store and Bilingual Localization
// Abbasi Publication Network (APN)

const translations = {
    ur: {
        app_title: "عباسی پبلیکیشن نیٹ ورک",
        app_subtitle: "پروڈکشن، اسٹور و گودام ERP",
        
        // Navigation
        nav_dashboard: "Dashboard",
        nav_raw_materials: "Raw Material Store",
        nav_books: "Book Master & BOM",
        nav_work_orders: "Work Orders",
        nav_printing: "Inner Printing",
        nav_outer: "Cover & Lamination",
        nav_binding: "Binding Unit",
        nav_warehouse: "Finished Warehouse",
        nav_damage: "Damage & Loss",
        nav_reports: "Reports & Ledger",
        nav_settings: "Settings",

        // Top 4 Buttons Tooltips
        btn_tt_stats: "خام مال لیجر",
        btn_tt_new_book: "نئی کتاب کا اندراج",
        btn_tt_jobs: "ورک آرڈرز",
        btn_tt_alerts: "کم اسٹاک الرٹس",

        // Department Card Titles & Subtitles
        dept_raw_title: "خام مال اسٹور",
        dept_raw_sub: "کاغذ، کارڈ، سیاہی اور سامان",
        dept_book_title: "کتب ماسٹر و BOM",
        dept_book_sub: "صفحات، فارمے، لاگت اور فارمولا",
        dept_wo_title: "ورک آرڈرز و جابز",
        dept_wo_sub: "جاب کارڈز، بارکوڈ اور اخراج",
        dept_inner_title: "انر پرنٹنگ فلور",
        dept_inner_sub: "متن کے فارمے اور شیٹس",
        dept_outer_title: "کور و لیمینیشن",
        dept_outer_sub: "ٹائٹل کارڈ اور تھرمل فلم",
        dept_binding_title: "بائنڈنگ و اسمبلی",
        dept_binding_sub: "فولڈنگ، گلو، کٹنگ اور ملاپ",
        dept_warehouse_title: "فنش گڈز گودام",
        dept_warehouse_sub: "ریک، شیلف اور تیار کتب",
        dept_damage_title: "ڈیمیج و ویسٹیج لاگ",
        dept_damage_sub: "نقصان لاگ اور مالی تخمینہ",
        dept_admin_title: "ایڈمن و کنٹرول",
        dept_admin_sub: "لیجر، سمری اور کنٹرول",

        // KPI Cards
        kpi_total_finished: "کل تیار کتب (اسٹاک)",
        kpi_active_jobs: "زیرِ تکمیل جابز",
        kpi_low_stock: "کم اسٹاک الرٹس",
        kpi_damage_loss: "کل ڈیمیج و نقصان",
        kpi_books_unit: "کتب",
        kpi_jobs_unit: "آرڈرز",
        kpi_alerts_unit: "الرٹس",
        kpi_pkr: "PKR",

        // Pipeline Stages
        pipeline_title: "لائیو پروڈکشن پائپ لائن (Active Jobs Tracker)",
        pipeline_desc: "خام مال کے اخراج سے لے کر انر و آؤٹر پرنٹنگ، بائنڈنگ، اور فنش گڈز گودام تک کی پیش رفت",
        stage_store_out: "1. اسٹور اخراج",
        stage_inner_print: "2. انر پرنٹنگ",
        stage_outer_print: "3. کور پرنٹنگ",
        stage_binding: "4. بائنڈنگ اسمبلی",
        stage_warehouse: "ویئر ہاؤس داخلہ",
        stage_material_done: "✓ مٹیریل ایشو",

        // Actions & Buttons
        btn_new_job: "+ نیا ورک آرڈر بنائیں",
        btn_add_material: "+ نیا خام مال درج کریں",
        btn_stock_inward: "اسٹاک انٹری / خریداری",
        btn_add_book: "+ نئی کتاب کا اندراج",
        btn_save: "محفوظ کریں",
        btn_cancel: "منسوخ کریں",
        btn_print_job: "🖨️ جاب کارڈ",
        btn_update_progress: "اسٹیٹس اپڈیٹ",
        btn_relocate: "📍 لوکیشن بدلیں",
        btn_add_purchase: "+ خریداری درج کریں",
        btn_issue_wo: "🚀 ورک آرڈر جاری کریں",
        btn_log_inner: "+ انر پرنٹنگ لاگ کریں",
        btn_log_outer: "+ کور لاگ کریں",
        btn_log_binding: "+ بائنڈنگ لاگ",
        btn_send_wh: "گودام منتقل ✓",

        // Status
        status_PLANNED: "منصوبہ بندی شدہ",
        status_MATERIAL_ISSUED: "خام مال ایشو ہو گیا",
        status_IN_PRINTING: "پرنٹنگ جاری ہے",
        status_IN_BINDING: "بائنڈنگ جاری ہے",
        status_COMPLETED: "مکمل / تیار",
        status_PENDING: "زیرِ انتظار",
        status_IN_PROGRESS: "جاری ہے",
        status_READY_FOR_BINDING: "بائنڈنگ کے لیے تیار",

        // Table Headers
        th_item_name: "آئٹم کا نام",
        th_category: "شعبہ (Category)",
        th_size_gsm: "سائز و GSM",
        th_current_stock: "موجودہ اسٹاک",
        th_min_level: "کم از کم حد",
        th_unit_rate: "فی یونٹ ریٹ",
        th_status: "اسٹیٹس",
        th_action: "ایکشن",

        th_wo_code: "جاب ٹریکنگ کوڈ",
        th_book_name: "کتاب کا نام",
        th_target_qty: "ہدف تعداد",
        th_inner_col: "انر پرنٹنگ",
        th_outer_col: "کور پرنٹنگ",
        th_binding_col: "بائنڈنگ",
        th_overall_status: "مجموعی اسٹیٹس",

        th_wh_book: "کتاب کا کوڈ و نام",
        th_wh_batch: "جاب / بیچ کوڈ",
        th_wh_name: "گودام کا نام",
        th_wh_shelf: "ریک و شیلف",
        th_wh_qty: "موجودہ تعداد",
        th_wh_date: "تاریخ وصولی",

        th_dmg_wo: "ورک آرڈر نمبر",
        th_dmg_stage: "شعبہ (Stage)",
        th_dmg_item: "خراب شدہ آئٹم",
        th_dmg_qty: "تعداد / وزن",
        th_dmg_reason: "نقص کی وجہ",
        th_dmg_loss: "مالی نقصان",
        th_dmg_date: "تاریخ",

        // Modals
        modal_new_wo_title: "نیا پروڈکشن ورک آرڈر جاری کریں",
        modal_select_book: "کتاب کا انتخاب کریں",
        modal_target_qty: "ہدف تعداد (Target Qty)",
        modal_target_date: "متوقع تاریخِ تکمیل",
        modal_wo_notes: "خصوصی ہدایات / نوٹس",
        modal_wo_bom_hint: "💡 بل آف مٹیریل (BOM) خودکار کٹوتی: ورک آرڈر بنتے ہی درکار انر پیپر، کور کارڈ اور سیاہی اسٹور سے خودکار طور پر خارج ہو جائے گی۔",

        modal_log_title: "پروڈکشن لاگ اپڈیٹ",
        modal_done_qty: "تیار شدہ مقدار (Done Qty)",
        modal_damage_qty: "ڈیمیج / مس پرنٹ (Damage)",
        modal_operator: "آپریٹر / مشین نمبر",
        modal_log_reason: "ریمارکس یا خرابی کی وجہ",

        modal_add_mat_title: "نیا خام مال درج کریں",
        modal_mat_name: "خام مال کا نام (Material Name)",
        modal_unit: "یونٹ (Unit)",
        modal_size: "سائز (Size)",
        modal_gsm: "GSM",
        modal_init_stock: "ابتدائی اسٹاک",
        modal_min_limit: "کم اسٹاک حد",
        modal_rate: "فی یونٹ ریٹ",

        modal_inward_title: "خام مال خریداری واؤچر (Stock Inward)",
        modal_inward_qty: "خریداری تعداد (Quantity)",
        modal_inward_po: "انوائس / PO نمبر",

        modal_add_book_title: "نئی کتاب کا اندراج (Book Master)",
        modal_book_code: "آرٹیکل کوڈ (Book SKU)",
        modal_book_lang: "زبان (Language)",
        modal_book_title_field: "کتاب کا مکمل نام (Title)",
        modal_book_pages: "صفحات کی تعداد (Pages)",
        modal_book_forms_calc: "فارمے (خودکار حساب)",
        modal_book_inner_spec: "انر پیپر تفصیل (Inner Spec)",
        modal_book_outer_spec: "کور کارڈ تفصیل (Outer Spec)",
        modal_book_cost: "تخمینہ لاگت فی کاپی (PKR)",

        modal_relocate_title: "ریک و شیلف تبدیل کریں",
        modal_new_rack: "نیا ریک نمبر (Rack)",
        modal_new_shelf: "نیا شیلف نمبر (Shelf)",

        // Job Card Print
        jc_preview_title: "جاب کارڈ پری ویو (Print Preview)",
        jc_btn_print: "پرنٹ نکالیں",
        jc_btn_close: "✕ بند کریں",
        jc_header_title: "عباسی پبلیکیشن نیٹ ورک (APN)",
        jc_header_sub: "پروڈکشن جاب کارڈ و کوالٹی روٹنگ شیٹ",
        jc_book_label: "کتاب کا نام:",
        jc_code_label: "آرٹیکل کوڈ:",
        jc_pages_label: "صفحات و فارمے:",
        jc_target_label: "پروڈکشن ہدف:",
        jc_start_label: "تاریخ اجرا:",
        jc_due_label: "متوقع تکمیل:",
        jc_table_stage: "مرحلہ",
        jc_table_desc: "تفصیلات",
        jc_table_printed: "پرنٹ شدہ تعداد",
        jc_table_dmg: "ڈیمیج",
        jc_table_sign: "آپریٹر دستخط",
        jc_stage1: "1. اسٹور اخراج",
        jc_stage1_desc: "پیپر، کارڈ اور سیاہی BOM کے مطابق",
        jc_stage2: "2. انر پرنٹنگ",
        jc_stage3: "3. کور پرنٹنگ و لیمینیشن",
        jc_stage4: "4. بائنڈنگ و کٹنگ",
        jc_stage4_desc: "انر + آؤٹر اسمبلی و تھری نائف ٹرمنگ",
        jc_stage5: "5. گودام وصولی",
        jc_stage5_desc: "فنش گڈز ریک و شیلف داخلہ",
        jc_footer_note: "یہ جاب کارڈ پیلٹ کے ساتھ منسلک رہے گا جب تک مال بائنڈنگ ہو کر گودام منتقل نہ ہو جائے۔ (Abbasi Publication Network)",

        // Alerts & Backend
        low_stock_urgent_title: "کم اسٹاک انتباہ! فوری خریداری درکار ہے",
        low_stock_msg: "درج ذیل خام مال کی مقدار مقررہ حد سے کم ہو گئی ہے۔ پریس پروڈکشن متاثر ہونے سے بچانے کے لیے فوری خریداری کریں۔",
        backend_connected: "لائیو کنیکٹڈ",
        backend_offline: "لوکل موڈ"
    },
    en: {
        app_title: "ABBASI PUBLICATION NETWORK",
        app_subtitle: "Production, Inventory & Warehouse ERP",

        // Navigation
        nav_dashboard: "Dashboard",
        nav_raw_materials: "Raw Material Store",
        nav_books: "Book Master & BOM",
        nav_work_orders: "Work Orders",
        nav_printing: "Inner Printing",
        nav_outer: "Cover & Lamination",
        nav_binding: "Binding Unit",
        nav_warehouse: "Finished Warehouse",
        nav_damage: "Damage & Loss",
        nav_reports: "Reports & Ledger",
        nav_settings: "Settings",

        // Top 4 Buttons Tooltips
        btn_tt_stats: "Raw Materials Ledger",
        btn_tt_new_book: "Add New Book Master",
        btn_tt_jobs: "Active Work Orders",
        btn_tt_alerts: "Low Stock Alerts",

        // Department Card Titles & Subtitles
        dept_raw_title: "Raw Material Store",
        dept_raw_sub: "Paper, Card, Inks & Supplies",
        dept_book_title: "Book Master & BOM",
        dept_book_sub: "Articles, Pages, Forms & Costing",
        dept_wo_title: "Work Orders & Jobs",
        dept_wo_sub: "Job Cards, Barcodes & Requisitions",
        dept_inner_title: "Inner Printing Floor",
        dept_inner_sub: "Text Forms & Sheet Monitoring",
        dept_outer_title: "Cover & Lamination",
        dept_outer_sub: "Title Cards & Thermal Film",
        dept_binding_title: "Binding Unit",
        dept_binding_sub: "Folding, Gluing, Trimming & Merging",
        dept_warehouse_title: "Finished Warehouse",
        dept_warehouse_sub: "Rack, Shelf & Delivery Inventory",
        dept_damage_title: "Damage & Wastage",
        dept_damage_sub: "Wastage Log & Financial Impact",
        dept_admin_title: "Admin & Reports",
        dept_admin_sub: "Ledger, Analytics & Controls",

        // KPI Cards
        kpi_total_finished: "Total Finished Stock",
        kpi_active_jobs: "Active Work Orders",
        kpi_low_stock: "Low Stock Alerts",
        kpi_damage_loss: "Total Wastage Loss",
        kpi_books_unit: "Books",
        kpi_jobs_unit: "Jobs",
        kpi_alerts_unit: "Alerts",
        kpi_pkr: "PKR",

        // Pipeline Stages
        pipeline_title: "Live Production Pipeline (Active Jobs Tracker)",
        pipeline_desc: "Real-time workflow progress from store material issue to inner/outer printing, binding, and finished goods warehouse",
        stage_store_out: "1. Store Out",
        stage_inner_print: "2. Inner Printing",
        stage_outer_print: "3. Cover Printing",
        stage_binding: "4. Binding Assembly",
        stage_warehouse: "Warehouse Transfer",
        stage_material_done: "✓ Material Issued",

        // Actions & Buttons
        btn_new_job: "+ New Work Order",
        btn_add_material: "+ Add Raw Material",
        btn_stock_inward: "Stock Inward (GRN)",
        btn_add_book: "+ Add New Book",
        btn_save: "Save",
        btn_cancel: "Cancel",
        btn_print_job: "🖨️ Print Job Card",
        btn_update_progress: "Update Status",
        btn_relocate: "📍 Relocate Shelf",
        btn_add_purchase: "+ Record Purchase",
        btn_issue_wo: "🚀 Issue Work Order",
        btn_log_inner: "+ Log Inner Printing",
        btn_log_outer: "+ Log Cover Printing",
        btn_log_binding: "+ Log Binding",
        btn_send_wh: "Transfer to Warehouse ✓",

        // Status
        status_PLANNED: "Planned",
        status_MATERIAL_ISSUED: "Material Issued",
        status_IN_PRINTING: "In Printing",
        status_IN_BINDING: "In Binding",
        status_COMPLETED: "Completed",
        status_PENDING: "Pending",
        status_IN_PROGRESS: "In Progress",
        status_READY_FOR_BINDING: "Ready for Binding",

        // Table Headers
        th_item_name: "Material Name",
        th_category: "Category",
        th_size_gsm: "Size & GSM",
        th_current_stock: "Current Stock",
        th_min_level: "Min Reorder Level",
        th_unit_rate: "Unit Rate",
        th_status: "Status",
        th_action: "Action",

        th_wo_code: "Job Tracking #",
        th_book_name: "Book Title",
        th_target_qty: "Target Quantity",
        th_inner_col: "Inner Printing",
        th_outer_col: "Cover Printing",
        th_binding_col: "Binding",
        th_overall_status: "Status",

        th_wh_book: "Book Code & Title",
        th_wh_batch: "Job / Batch Code",
        th_wh_name: "Warehouse Name",
        th_wh_shelf: "Rack & Shelf",
        th_wh_qty: "Quantity On Hand",
        th_wh_date: "Received Date",

        th_dmg_wo: "Work Order #",
        th_dmg_stage: "Stage",
        th_dmg_item: "Damaged Item",
        th_dmg_qty: "Qty / Weight",
        th_dmg_reason: "Defect Reason",
        th_dmg_loss: "Financial Loss",
        th_dmg_date: "Date",

        // Modals
        modal_new_wo_title: "Issue New Production Work Order",
        modal_select_book: "Select Book",
        modal_target_qty: "Target Quantity",
        modal_target_date: "Expected Delivery Date",
        modal_wo_notes: "Special Instructions / Notes",
        modal_wo_bom_hint: "💡 Bill of Materials (BOM) Auto-Deduction: Required paper sheets, cover card and inks will be automatically deducted from store inventory upon creation.",

        modal_log_title: "Production Log Update",
        modal_done_qty: "Completed Quantity (Done)",
        modal_damage_qty: "Damage / Misprint (Waste)",
        modal_operator: "Operator / Machine #",
        modal_log_reason: "Remarks or Cause of Damage",

        modal_add_mat_title: "Add New Raw Material",
        modal_mat_name: "Material Name",
        modal_unit: "Unit",
        modal_size: "Size",
        modal_gsm: "GSM",
        modal_init_stock: "Initial Stock",
        modal_min_limit: "Min Reorder Limit",
        modal_rate: "Unit Rate (PKR)",

        modal_inward_title: "Raw Material Purchase Voucher (Stock Inward)",
        modal_inward_qty: "Purchase Quantity",
        modal_inward_po: "Invoice / PO Number",

        modal_add_book_title: "Add New Book (Book Master)",
        modal_book_code: "Article Code (Book SKU)",
        modal_book_lang: "Language",
        modal_book_title_field: "Full Book Title",
        modal_book_pages: "Number of Pages",
        modal_book_forms_calc: "Forms (Auto Calculated)",
        modal_book_inner_spec: "Inner Paper Spec",
        modal_book_outer_spec: "Cover Card Spec",
        modal_book_cost: "Standard Cost per Copy (PKR)",

        modal_relocate_title: "Relocate Rack & Shelf",
        modal_new_rack: "New Rack Number",
        modal_new_shelf: "New Shelf Number",

        // Job Card Print
        jc_preview_title: "Job Card Print Preview",
        jc_btn_print: "Print Card",
        jc_btn_close: "✕ Close",
        jc_header_title: "ABBASI PUBLICATION NETWORK",
        jc_header_sub: "Production Job Card & Quality Routing Sheet",
        jc_book_label: "Book Title:",
        jc_code_label: "Article Code:",
        jc_pages_label: "Pages & Forms:",
        jc_target_label: "Target Qty:",
        jc_start_label: "Start Date:",
        jc_due_label: "Due Date:",
        jc_table_stage: "Stage",
        jc_table_desc: "Specifications",
        jc_table_printed: "Printed Qty",
        jc_table_dmg: "Damage",
        jc_table_sign: "Operator Sign",
        jc_stage1: "1. Store Out",
        jc_stage1_desc: "Paper, Card & Inks issued as per BOM",
        jc_stage2: "2. Inner Printing",
        jc_stage3: "3. Cover & Lamination",
        jc_stage4: "4. Binding & Trimming",
        jc_stage4_desc: "Inner + Outer Assembly & 3-Knife Trimming",
        jc_stage5: "5. Warehouse Receipt",
        jc_stage5_desc: "Finished stock inward by rack/shelf",
        jc_footer_note: "This job card must travel with the production pallet until final delivery to warehouse. (Abbasi Publication Network)",

        // Alerts & Backend
        low_stock_urgent_title: "Low Stock Warning! Reorder Needed",
        low_stock_msg: "The following raw materials are below minimum threshold. Please order immediately to avoid production stoppage.",
        backend_connected: "Live Connected",
        backend_offline: "Local Mode"
    }
};

class APNStore {
    constructor() {
        this.lang = localStorage.getItem('apn_lang') || 'ur';
        this.activeTab = 'dashboard';
        this.isOnline = false;
        this.searchQuery = '';
        this.sidebarCollapsed = false;
        
        this.rawMaterials = [];
        this.books = [];
        this.workOrders = [];
        this.finishedGoods = [];
        this.damageRecords = [];
        this.dashboardMetrics = {};
    }

    t(key) {
        return (translations[this.lang] && translations[this.lang][key]) || key;
    }

    setLanguage(newLang) {
        this.lang = newLang;
        localStorage.setItem('apn_lang', newLang);
        window.renderApp();
    }
}

window.apnStore = new APNStore();
