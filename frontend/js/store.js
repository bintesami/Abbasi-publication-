// Central Store and Bilingual Localization
// Abbasi Publication Network (APN)

const translations = {
    ur: {
        app_title: "دار النشر عباسی",
        app_subtitle: "عباسی پبلیکیشن نیٹ ورک - پروڈکشن، اسٹور و گودام ERP",
        nav_dashboard: "Dashboard",
        nav_raw_materials: "Raw Material Store",
        nav_books: "Book Master & BOM",
        nav_work_orders: "Work Orders",
        nav_printing: "Printing Floor",
        nav_binding: "Binding Unit",
        nav_warehouse: "Finished Warehouse",
        nav_damage: "Damage & Loss",
        nav_reports: "Reports & Ledger",
        nav_settings: "Settings",

        // Department Card Titles & Subtitles
        dept_raw_title: "خام مال اسٹور (Raw Materials)",
        dept_raw_sub: "کاغذ، کارڈ، سیاہی اور سامان",
        dept_book_title: "کتب ماسٹر و BOM (Books)",
        dept_book_sub: "صفحات، فارمے، لاگت اور فارمولا",
        dept_wo_title: "ورک آرڈرز (Work Orders)",
        dept_wo_sub: "جاب کارڈز، بارکوڈ اور اخراج",
        dept_inner_title: "انر پرنٹنگ (Inner Printing)",
        dept_inner_sub: "متن کے فارمے اور شیٹس",
        dept_outer_title: "کور و لیمینیشن (Cover & Lam)",
        dept_outer_sub: "ٹائٹل کارڈ اور تھرمل فلم",
        dept_binding_title: "بائنڈنگ فلور (Binding Unit)",
        dept_binding_sub: "فولڈنگ، گلو، کٹنگ اور اسمبلی",
        dept_warehouse_title: "فنش گڈز گودام (Warehouse)",
        dept_warehouse_sub: "ریک، شیلف اور تیار اسٹاک",
        dept_damage_title: "ڈیمیج و ویسٹیج (Damage & Loss)",
        dept_damage_sub: "نقصان لاگ اور مالی تخمینہ",
        dept_admin_title: "ایڈمن و رپورٹس (Admin)",
        dept_admin_sub: "لیجر، سمری اور کنٹرول",

        // KPI
        kpi_total_finished: "کل تیار کتب (اسٹاک)",
        kpi_active_jobs: "زیرِ تکمیل جابز",
        kpi_low_stock: "کم اسٹاک الرٹس",
        kpi_damage_loss: "کل ڈیمیج و نقصان",
        kpi_books_unit: "کتب",
        kpi_jobs_unit: "آرڈرز",
        kpi_alerts_unit: "آئٹمز",
        kpi_pkr: "روپے",

        // Actions
        btn_new_job: "+ نیا ورک آرڈر بنائیں",
        btn_add_material: "+ نیا خام مال درج کریں",
        btn_stock_inward: "اسٹاک انٹری / خریداری",
        btn_add_book: "+ نئی کتاب کا اندراج",
        btn_save: "محفوظ کریں",
        btn_cancel: "منسوخ کریں",
        btn_print_job: "جاب کارڈ پرنٹ کریں",
        btn_update_progress: "اسٹیٹس اپڈیٹ کریں",
        btn_relocate: "ریک/شیلف تبدیل کریں",

        // Pipeline Stages
        stage_store_out: "خام مال اخراج (BOM)",
        stage_inner_print: "انر پرنٹنگ (فارمے)",
        stage_outer_print: "ٹائٹل / کور پرنٹنگ",
        stage_binding: "بائنڈنگ اسمبلی (ملاپ)",
        stage_warehouse: "ویئر ہاؤس داخلہ",

        // Status
        status_PLANNED: "منصوبہ بندی شدہ",
        status_MATERIAL_ISSUED: "خام مال ایشو ہو گیا",
        status_IN_PRINTING: "پرنٹنگ جاری ہے",
        status_IN_BINDING: "بائنڈنگ جاری ہے",
        status_COMPLETED: "مکمل / تیار",
        status_PENDING: "زیرِ انتظار",
        status_IN_PROGRESS: "جاری ہے",
        status_READY_FOR_BINDING: "بائنڈنگ کے لیے تیار",

        low_stock_urgent_title: "کم اسٹاک انتباہ! فوری خریداری درکار ہے",
        low_stock_msg: "درج ذیل خام مال کی مقدار مقررہ حد سے کم ہو گئی ہے۔ پریس پروڈکشن متاثر ہونے سے بچانے کے لیے فوری خریداری کریں۔",
        backend_connected: "لائیو کنیکٹڈ (FastAPI)",
        backend_offline: "لوکل اسٹوریج موڈ"
    },
    en: {
        app_title: "Dar-un-Nashr Abbasi",
        app_subtitle: "Abbasi Publication Network - ERP System",
        nav_dashboard: "Dashboard",
        nav_raw_materials: "Raw Material Store",
        nav_books: "Book Master & BOM",
        nav_work_orders: "Work Orders",
        nav_printing: "Printing Floor",
        nav_binding: "Binding Unit",
        nav_warehouse: "Finished Warehouse",
        nav_damage: "Damage & Loss",
        nav_reports: "Reports & Ledger",
        nav_settings: "Settings",

        // Department Card Titles & Subtitles
        dept_raw_title: "Raw Material Store",
        dept_raw_sub: "Paper, Card, Inks & Supplies",
        dept_book_title: "Book Master & BOM",
        dept_book_sub: "Articles, Pages, Forms & Costing",
        dept_wo_title: "Work Orders",
        dept_wo_sub: "Job Cards, Barcode & Requisitions",
        dept_inner_title: "Inner Printing",
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

        // KPI
        kpi_total_finished: "Total Finished Stock",
        kpi_active_jobs: "Active Work Orders",
        kpi_low_stock: "Low Stock Alerts",
        kpi_damage_loss: "Total Wastage Loss",
        kpi_books_unit: "Books",
        kpi_jobs_unit: "Jobs",
        kpi_alerts_unit: "Alerts",
        kpi_pkr: "PKR",

        // Actions
        btn_new_job: "+ New Work Order",
        btn_add_material: "+ Add Raw Material",
        btn_stock_inward: "Stock Inward (GRN)",
        btn_add_book: "+ Add New Book",
        btn_save: "Save",
        btn_cancel: "Cancel",
        btn_print_job: "Print Job Card",
        btn_update_progress: "Update Progress",
        btn_relocate: "Relocate Shelf",

        // Pipeline Stages
        stage_store_out: "Material Issued (BOM)",
        stage_inner_print: "Inner Printing (Forms)",
        stage_outer_print: "Outer / Cover Printing",
        stage_binding: "Binding & Merging",
        stage_warehouse: "Warehouse Transfer",

        // Status
        status_PLANNED: "Planned",
        status_MATERIAL_ISSUED: "Material Issued",
        status_IN_PRINTING: "In Printing",
        status_IN_BINDING: "In Binding",
        status_COMPLETED: "Completed",
        status_PENDING: "Pending",
        status_IN_PROGRESS: "In Progress",
        status_READY_FOR_BINDING: "Ready for Binding",

        low_stock_urgent_title: "Low Stock Warning! Reorder Needed",
        low_stock_msg: "The following raw materials are below minimum threshold. Please order immediately to avoid line stoppage.",
        backend_connected: "Live Connected (FastAPI)",
        backend_offline: "Local Storage Mode"
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
        return translations[this.lang][key] || key;
    }

    setLanguage(newLang) {
        this.lang = newLang;
        localStorage.setItem('apn_lang', newLang);
        document.body.className = newLang === 'ur' ? 'lang-ur' : 'lang-en';
        window.renderApp();
    }
}

window.apnStore = new APNStore();
