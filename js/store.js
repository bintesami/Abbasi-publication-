// Central Store and Bilingual Localization
// Abbasi Publication Network (APN)

const translations = {
    ur: {
        app_title: "عباسی پبلیکیشن نیٹ ورک",
        app_subtitle: "اسٹاک، پروڈکشن اور گودام مینجمنٹ سسٹم",
        nav_dashboard: "ڈیش بورڈ",
        nav_raw_materials: "خام مال اسٹور",
        nav_books: "کتب ماسٹر و BOM",
        nav_work_orders: "ورک آرڈرز",
        nav_floor: "پروڈکشن فلور",
        nav_warehouse: "فنش گڈز ویئر ہاؤس",
        nav_damage: "ڈیمیج و ویسٹیج رپورٹ",

        // KPI Cards
        kpi_total_finished: "کل تیار کتب (اسٹاک)",
        kpi_active_jobs: "زیرِ تکمیل جابز",
        kpi_low_stock: "کم اسٹاک الرٹس",
        kpi_damage_loss: "کل ڈیمیج و نقصان",
        kpi_books_unit: "کتب",
        kpi_jobs_unit: "آرڈرز",
        kpi_alerts_unit: "آئٹمز",
        kpi_pkr: "روپے",

        // Actions & Buttons
        btn_new_job: "+ نیا ورک آرڈر بنائیں",
        btn_add_material: "+ نیا خام مال درج کریں",
        btn_stock_inward: "اسٹاک انٹری / خریداری",
        btn_add_book: "+ نئی کتاب کا اندراج",
        btn_save: "محفوظ کریں",
        btn_cancel: "منسوخ کریں",
        btn_print_job: "جاب کارڈ پرنٹ کریں",
        btn_update_progress: "اسٹیٹس اپڈیٹ کریں",
        btn_relocate: "ریک/شیلف تبدیل کریں",
        btn_filter: "فلٹر کریں",

        // Pipeline Stages
        stage_store_out: "خام مال اخراج (BOM)",
        stage_inner_print: "انر پرنٹنگ (فارمے)",
        stage_outer_print: "ٹائٹل / کور پرنٹنگ",
        stage_binding: "بائنڈنگ اسمبلی (دونوں کا ملاپ)",
        stage_warehouse: "ویئر ہاؤس داخلہ",

        // Table Headers
        th_wo_no: "ورک آرڈر / جاب نمبر",
        th_book: "کتاب کا نام",
        th_target: "ہدف تعداد",
        th_inner_status: "انر پرنٹنگ",
        th_outer_status: "کور پرنٹنگ",
        th_binding_status: "بائنڈنگ",
        th_overall_status: "مجموعی اسٹیٹس",
        th_actions: "ایکشن",

        // Status Labels
        status_PLANNED: "منصوبہ بندی شدہ",
        status_MATERIAL_ISSUED: "خام مال ایشو ہو گیا",
        status_IN_PRINTING: "پرنٹنگ جاری ہے",
        status_IN_BINDING: "بائنڈنگ جاری ہے",
        status_COMPLETED: "مکمل / تیار",
        status_PENDING: "زیرِ انتظار",
        status_IN_PROGRESS: "جاری ہے",
        status_READY_FOR_BINDING: "بائنڈنگ کے لیے تیار",

        // Alerts
        low_stock_urgent_title: "کم اسٹاک انتباہ! فوری خریداری درکار ہے",
        low_stock_msg: "درج ذیل خام مال کی مقدار مقررہ حد سے کم ہو گئی ہے۔ پریس پروڈکشن متاثر ہونے سے بچانے کے لیے فوری خریداری کریں۔",
        search_placeholder: "کتاب کا نام، جاب نمبر، یا آرٹیکل کوڈ لکھیں...",
        backend_connected: "آن لائن موڈ (FastAPI جڑا ہوا ہے)",
        backend_offline: "لوکل موڈ (آف لائن اسٹوریج)"
    },
    en: {
        app_title: "Abbasi Publication Network (APN)",
        app_subtitle: "Production, Inventory & Warehouse ERP",
        nav_dashboard: "Dashboard",
        nav_raw_materials: "Raw Material Store",
        nav_books: "Book Master & BOM",
        nav_work_orders: "Work Orders",
        nav_floor: "Production Floor",
        nav_warehouse: "Finished Warehouse",
        nav_damage: "Wastage & Damage",

        // KPI Cards
        kpi_total_finished: "Total Finished Stock",
        kpi_active_jobs: "Active Work Orders",
        kpi_low_stock: "Low Stock Alerts",
        kpi_damage_loss: "Total Wastage Loss",
        kpi_books_unit: "Books",
        kpi_jobs_unit: "Jobs",
        kpi_alerts_unit: "Alerts",
        kpi_pkr: "PKR",

        // Actions & Buttons
        btn_new_job: "+ New Work Order",
        btn_add_material: "+ Add Raw Material",
        btn_stock_inward: "Stock Inward (GRN)",
        btn_add_book: "+ Add New Book",
        btn_save: "Save",
        btn_cancel: "Cancel",
        btn_print_job: "Print Job Card",
        btn_update_progress: "Update Progress",
        btn_relocate: "Relocate Shelf",
        btn_filter: "Filter",

        // Pipeline Stages
        stage_store_out: "Material Issued (BOM)",
        stage_inner_print: "Inner Printing (Forms)",
        stage_outer_print: "Outer / Cover Printing",
        stage_binding: "Binding & Merging",
        stage_warehouse: "Warehouse Transfer",

        // Table Headers
        th_wo_no: "Job Tracking #",
        th_book: "Book Title",
        th_target: "Target Qty",
        th_inner_status: "Inner Printing",
        th_outer_status: "Outer Printing",
        th_binding_status: "Binding",
        th_overall_status: "Status",
        th_actions: "Actions",

        // Status Labels
        status_PLANNED: "Planned",
        status_MATERIAL_ISSUED: "Material Issued",
        status_IN_PRINTING: "In Printing",
        status_IN_BINDING: "In Binding",
        status_COMPLETED: "Completed",
        status_PENDING: "Pending",
        status_IN_PROGRESS: "In Progress",
        status_READY_FOR_BINDING: "Ready for Binding",

        // Alerts
        low_stock_urgent_title: "Low Stock Warning! Reorder Needed",
        low_stock_msg: "The following raw materials are below the minimum threshold. Please order immediately to prevent line stoppages.",
        search_placeholder: "Search book name, job #, or article code...",
        backend_connected: "Live Mode (FastAPI Connected)",
        backend_offline: "Offline Mode (Local Storage)"
    }
};

class APNStore {
    constructor() {
        this.lang = localStorage.getItem('apn_lang') || 'ur';
        this.activeTab = 'dashboard';
        this.isOnline = false;
        this.searchQuery = '';
        
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
        document.documentElement.setAttribute('dir', newLang === 'ur' ? 'rtl' : 'ltr');
        document.documentElement.setAttribute('lang', newLang);
        window.renderApp();
    }
}

window.apnStore = new APNStore();
