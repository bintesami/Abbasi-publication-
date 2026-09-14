// API Client with Offline / LocalStorage Fallback
// Abbasi Publication Network (APN)

const API_BASE = window.location.origin.includes('5173') || window.location.origin.includes('8000') 
    ? '/api' 
    : 'http://localhost:8000/api';

const APN_API = {
    async checkBackend() {
        try {
            const res = await fetch(`${API_BASE}/dashboard/metrics`, { signal: AbortSignal.timeout(2000) });
            if (res.ok) {
                window.apnStore.isOnline = true;
                return true;
            }
        } catch (e) {
            console.log("FastAPI backend not detected, operating in standalone local mode.");
        }
        window.apnStore.isOnline = false;
        return false;
    },

    async getDashboardMetrics() {
        if (window.apnStore.isOnline) {
            try {
                const res = await fetch(`${API_BASE}/dashboard/metrics`);
                if (res.ok) return await res.json();
            } catch (e) {}
        }
        return this.localDashboardMetrics();
    },

    async getRawMaterials() {
        if (window.apnStore.isOnline) {
            try {
                const res = await fetch(`${API_BASE}/raw-materials`);
                if (res.ok) return await res.json();
            } catch (e) {}
        }
        return JSON.parse(localStorage.getItem('apn_raw_materials') || '[]');
    },

    async addRawMaterial(material) {
        if (window.apnStore.isOnline) {
            try {
                const res = await fetch(`${API_BASE}/raw-materials`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(material)
                });
                if (res.ok) return await res.json();
            } catch (e) {}
        }
        // Local fallback
        const list = JSON.parse(localStorage.getItem('apn_raw_materials') || '[]');
        material.id = Date.now();
        material.created_at = new Date().toISOString();
        list.push(material);
        localStorage.setItem('apn_raw_materials', JSON.stringify(list));
        return material;
    },

    async addMaterialTransaction(trans) {
        if (window.apnStore.isOnline) {
            try {
                const res = await fetch(`${API_BASE}/raw-materials/transactions`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(trans)
                });
                if (res.ok) return await res.json();
            } catch (e) {}
        }
        // Local fallback stock update
        const list = JSON.parse(localStorage.getItem('apn_raw_materials') || '[]');
        const item = list.find(m => m.id === trans.material_id);
        if (item) {
            if (trans.transaction_type === 'PURCHASE_IN') item.current_stock += trans.quantity;
            else if (trans.transaction_type === 'WORK_ORDER_OUT' || trans.transaction_type === 'DAMAGE_LOSS') {
                item.current_stock = Math.max(0, item.current_stock - trans.quantity);
            }
            localStorage.setItem('apn_raw_materials', JSON.stringify(list));
        }
        return trans;
    },

    async getBooks() {
        if (window.apnStore.isOnline) {
            try {
                const res = await fetch(`${API_BASE}/books`);
                if (res.ok) return await res.json();
            } catch (e) {}
        }
        return JSON.parse(localStorage.getItem('apn_books') || '[]');
    },

    async addBook(book) {
        book.forms_count = parseFloat((book.page_count / 16).toFixed(2));
        if (window.apnStore.isOnline) {
            try {
                const res = await fetch(`${API_BASE}/books`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(book)
                });
                if (res.ok) return await res.json();
            } catch (e) {}
        }
        const list = JSON.parse(localStorage.getItem('apn_books') || '[]');
        book.created_at = new Date().toISOString();
        list.push(book);
        localStorage.setItem('apn_books', JSON.stringify(list));
        return book;
    },

    async getWorkOrders() {
        if (window.apnStore.isOnline) {
            try {
                const res = await fetch(`${API_BASE}/work-orders`);
                if (res.ok) return await res.json();
            } catch (e) {}
        }
        return JSON.parse(localStorage.getItem('apn_work_orders') || '[]');
    },

    async addWorkOrder(wo) {
        if (!wo.work_order_no) {
            const year = new Date().getFullYear();
            const count = (JSON.parse(localStorage.getItem('apn_work_orders') || '[]').length + 1).toString().padStart(4, '0');
            wo.work_order_no = `APN-WO-${year}-${count}`;
        }
        wo.status = 'MATERIAL_ISSUED';
        wo.inner_status = 'PENDING';
        wo.outer_status = 'PENDING';
        wo.binding_status = 'PENDING';
        wo.inner_printed_sheets = 0;
        wo.inner_damage_sheets = 0;
        wo.outer_printed_covers = 0;
        wo.outer_damage_covers = 0;
        wo.binding_assembled_qty = 0;
        wo.binding_damage_qty = 0;
        wo.actual_finished_quantity = 0;
        wo.total_damage_quantity = 0;
        wo.start_date = new Date().toISOString();

        if (window.apnStore.isOnline) {
            try {
                const res = await fetch(`${API_BASE}/work-orders`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(wo)
                });
                if (res.ok) return await res.json();
            } catch (e) {}
        }
        const list = JSON.parse(localStorage.getItem('apn_work_orders') || '[]');
        list.unshift(wo);
        localStorage.setItem('apn_work_orders', JSON.stringify(list));
        return wo;
    },

    async updateProgress(workOrderNo, progressData) {
        if (window.apnStore.isOnline) {
            try {
                const res = await fetch(`${API_BASE}/work-orders/${workOrderNo}/progress`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(progressData)
                });
                if (res.ok) return await res.json();
            } catch (e) {}
        }
        // Local logic
        const list = JSON.parse(localStorage.getItem('apn_work_orders') || '[]');
        const wo = list.find(o => o.work_order_no === workOrderNo);
        if (wo) {
            if (progressData.stage === 'INNER_PRINT') {
                wo.inner_printed_sheets += (progressData.inner_printed_sheets || 0);
                wo.inner_damage_sheets += (progressData.inner_damage_sheets || 0);
                wo.inner_status = wo.inner_printed_sheets >= wo.target_quantity ? 'COMPLETED' : 'IN_PROGRESS';
                wo.status = 'IN_PRINTING';
            } else if (progressData.stage === 'OUTER_PRINT') {
                wo.outer_printed_covers += (progressData.outer_printed_covers || 0);
                wo.outer_damage_covers += (progressData.outer_damage_covers || 0);
                wo.outer_status = wo.outer_printed_covers >= wo.target_quantity ? 'READY_FOR_BINDING' : 'IN_PROGRESS';
                wo.status = 'IN_PRINTING';
            } else if (progressData.stage === 'BINDING') {
                wo.binding_assembled_qty += (progressData.binding_assembled_qty || 0);
                wo.binding_damage_qty += (progressData.binding_damage_qty || 0);
                wo.binding_status = wo.binding_assembled_qty >= wo.target_quantity ? 'COMPLETED' : 'IN_PROGRESS';
                wo.status = 'IN_BINDING';
            } else if (progressData.stage === 'FINALIZE') {
                wo.status = 'COMPLETED';
                wo.actual_finished_quantity = wo.binding_assembled_qty;
                wo.total_damage_quantity = wo.inner_damage_sheets + wo.outer_damage_covers + wo.binding_damage_qty;
                wo.completed_date = new Date().toISOString();

                // Add to finished goods
                const fgList = JSON.parse(localStorage.getItem('apn_finished_goods') || '[]');
                fgList.unshift({
                    id: Date.now(),
                    book_article_id: wo.book_article_id,
                    book_title: wo.book_title,
                    work_order_no: wo.work_order_no,
                    batch_no: wo.work_order_no,
                    warehouse_name: 'مرکزی گودام عباسی پبلیکیشن (APN Warehouse)',
                    rack_location: 'Rack-A',
                    shelf_location: 'Shelf-01',
                    quantity_on_hand: wo.actual_finished_quantity,
                    received_date: new Date().toISOString()
                });
                localStorage.setItem('apn_finished_goods', JSON.stringify(fgList));
            }
            localStorage.setItem('apn_work_orders', JSON.stringify(list));
        }
        return wo;
    },

    async getFinishedGoods() {
        if (window.apnStore.isOnline) {
            try {
                const res = await fetch(`${API_BASE}/finished-goods`);
                if (res.ok) return await res.json();
            } catch (e) {}
        }
        return JSON.parse(localStorage.getItem('apn_finished_goods') || '[]');
    },

    async getDamageRecords() {
        if (window.apnStore.isOnline) {
            try {
                const res = await fetch(`${API_BASE}/damage-records`);
                if (res.ok) return await res.json();
            } catch (e) {}
        }
        return JSON.parse(localStorage.getItem('apn_damage_records') || '[]');
    },

    localDashboardMetrics() {
        const raw = JSON.parse(localStorage.getItem('apn_raw_materials') || '[]');
        const fg = JSON.parse(localStorage.getItem('apn_finished_goods') || '[]');
        const wos = JSON.parse(localStorage.getItem('apn_work_orders') || '[]');
        const dmgs = JSON.parse(localStorage.getItem('apn_damage_records') || '[]');

        const total_finished = fg.reduce((acc, curr) => acc + (curr.quantity_on_hand || 0), 0);
        const active_jobs = wos.filter(w => w.status !== 'COMPLETED').length;
        const low_stock = raw.filter(m => m.current_stock <= m.min_reorder_level);
        const total_damage = dmgs.reduce((acc, curr) => acc + (curr.damaged_quantity || 0), 0);
        const total_loss = dmgs.reduce((acc, curr) => acc + (curr.cost_loss || 0), 0);

        return {
            total_finished_books: total_finished,
            active_jobs_count: active_jobs,
            completed_jobs_count: wos.filter(w => w.status === 'COMPLETED').length,
            low_stock_count: low_stock.length,
            low_stock_items: low_stock,
            total_damage_items: total_damage,
            total_financial_loss: total_loss,
            recent_active_orders: wos.slice(0, 8)
        };
    },

    seedLocalMockData() {
        if (localStorage.getItem('apn_seeded_v1')) return;
        
        const rawMaterials = [
            { id: 1, name: "68 GSM Local Offset Paper (23x36)", category: "PAPER_INNER", size: "23x36", gsm: 68, unit: "REAMS", current_stock: 145.0, min_reorder_level: 20.0, unit_cost: 4200.0 },
            { id: 2, name: "70 GSM Imported Woodfree Paper (20x30)", category: "PAPER_INNER", size: "20x30", gsm: 70, unit: "REAMS", current_stock: 65.0, min_reorder_level: 15.0, unit_cost: 4800.0 },
            { id: 3, name: "80 GSM White Offset Paper (25x36)", category: "PAPER_INNER", size: "25x36", gsm: 80, unit: "REAMS", current_stock: 4.0, min_reorder_level: 10.0, unit_cost: 5300.0 },
            { id: 4, name: "260 GSM Art Card (25x36)", category: "CARD_OUTER", size: "25x36", gsm: 260, unit: "REAMS", current_stock: 42.0, min_reorder_level: 10.0, unit_cost: 8500.0 },
            { id: 5, name: "300 GSM Bleached Board (23x36)", category: "CARD_OUTER", size: "23x36", gsm: 300, unit: "REAMS", current_stock: 3.0, min_reorder_level: 8.0, unit_cost: 9800.0 },
            { id: 6, name: "Toyo Process Cyan Ink (سیان نیلی سیاہی)", category: "INK", size: "1 KG", gsm: null, unit: "KG", current_stock: 25.0, min_reorder_level: 5.0, unit_cost: 2100.0 },
            { id: 7, name: "Toyo Process Magenta Ink (میجنٹا گلابی سیاہی)", category: "INK", size: "1 KG", gsm: null, unit: "KG", current_stock: 18.0, min_reorder_level: 5.0, unit_cost: 2100.0 },
            { id: 8, name: "Toyo Process Yellow Ink (پیلی سیاہی)", category: "INK", size: "1 KG", gsm: null, unit: "KG", current_stock: 22.0, min_reorder_level: 5.0, unit_cost: 2100.0 },
            { id: 9, name: "Toyo Process Black Ink (کالی سیاہی)", category: "INK", size: "1 KG", gsm: null, unit: "KG", current_stock: 2.5, min_reorder_level: 6.0, unit_cost: 1950.0 },
            { id: 10, name: "Gloss Thermal Lamination Film 24\"", category: "LAMINATION", size: "24 inch", gsm: null, unit: "ROLLS", current_stock: 14.0, min_reorder_level: 4.0, unit_cost: 7200.0 },
            { id: 11, name: "Matt Thermal Lamination Film 26\"", category: "LAMINATION", size: "26 inch", gsm: null, unit: "ROLLS", current_stock: 1.0, min_reorder_level: 3.0, unit_cost: 7800.0 },
            { id: 12, name: "Hot Melt Spine Binding Glue (ہاٹ میلٹ گوند)", category: "GLUE_BINDING", size: "25 KG", gsm: null, unit: "KG", current_stock: 75.0, min_reorder_level: 20.0, unit_cost: 850.0 }
        ];

        const books = [
            { article_id: "APN-BK-0101", title: "اردو قواعد و انشا - جماعت پنجم", language: "Urdu", subject: "اردو لازمی", page_count: 128, forms_count: 8.0, inner_paper_spec: "68 GSM Local Offset (23x36)", outer_card_spec: "260 GSM Art Card (Gloss Lam)", colors: "4-Color", standard_cost_per_copy: 95.50 },
            { article_id: "APN-BK-0102", title: "Oxford Modern English - Grade 4", language: "English", subject: "English Literature", page_count: 144, forms_count: 9.0, inner_paper_spec: "70 GSM Imported Woodfree (20x30)", outer_card_spec: "260 GSM Art Card (Matt Lam)", colors: "4-Color", standard_cost_per_copy: 115.00 },
            { article_id: "APN-BK-0103", title: "اسلامیات لازمی - جماعت ہشتم", language: "Urdu", subject: "اسلامیات", page_count: 160, forms_count: 10.0, inner_paper_spec: "68 GSM Local Offset (23x36)", outer_card_spec: "260 GSM Art Card (Gloss Lam)", colors: "2-Color", standard_cost_per_copy: 88.00 },
            { article_id: "APN-BK-0104", title: "General Science & Technology - Grade 5", language: "English", subject: "General Science", page_count: 192, forms_count: 12.0, inner_paper_spec: "70 GSM Imported Woodfree (20x30)", outer_card_spec: "300 GSM Bleached Board (Gloss Lam)", colors: "4-Color", standard_cost_per_copy: 142.00 }
        ];

        const workOrders = [
            {
                work_order_no: "APN-WO-2026-0001",
                book_article_id: "APN-BK-0101",
                book_title: "اردو قواعد و انشا - جماعت پنجم",
                target_quantity: 5000,
                status: "COMPLETED",
                inner_printed_sheets: 5000,
                inner_damage_sheets: 45,
                inner_status: "COMPLETED",
                outer_printed_covers: 5000,
                outer_damage_covers: 25,
                outer_status: "READY_FOR_BINDING",
                binding_assembled_qty: 4920,
                binding_damage_qty: 10,
                binding_status: "COMPLETED",
                actual_finished_quantity: 4920,
                total_damage_quantity: 80,
                start_date: new Date(Date.now() - 7*86400000).toISOString(),
                completed_date: new Date(Date.now() - 1*86400000).toISOString(),
                notes: "سیشن 2026-2027 ایڈیشن - مکمل تیار و گودام منتقل"
            },
            {
                work_order_no: "APN-WO-2026-0002",
                book_article_id: "APN-BK-0102",
                book_title: "Oxford Modern English - Grade 4",
                target_quantity: 3000,
                status: "IN_BINDING",
                inner_printed_sheets: 3000,
                inner_damage_sheets: 30,
                inner_status: "COMPLETED",
                outer_printed_covers: 3000,
                outer_damage_covers: 15,
                outer_status: "READY_FOR_BINDING",
                binding_assembled_qty: 1650,
                binding_damage_qty: 8,
                binding_status: "IN_PROGRESS",
                actual_finished_quantity: 0,
                total_damage_quantity: 53,
                start_date: new Date(Date.now() - 3*86400000).toISOString(),
                notes: "انر اور آؤٹر پرنٹنگ مکمل ہو چکی ہے، بائنڈنگ فلور پر اسمبلی جاری ہے"
            },
            {
                work_order_no: "APN-WO-2026-0003",
                book_article_id: "APN-BK-0103",
                book_title: "اسلامیات لازمی - جماعت ہشتم",
                target_quantity: 4000,
                status: "IN_PRINTING",
                inner_printed_sheets: 2400,
                inner_damage_sheets: 22,
                inner_status: "IN_PROGRESS",
                outer_printed_covers: 4000,
                outer_damage_covers: 18,
                outer_status: "READY_FOR_BINDING",
                binding_assembled_qty: 0,
                binding_damage_qty: 0,
                binding_status: "PENDING",
                actual_finished_quantity: 0,
                total_damage_quantity: 40,
                start_date: new Date(Date.now() - 1*86400000).toISOString(),
                notes: "انر کے فارمے مشین نمبر 2 پر چھپ رہے ہیں"
            }
        ];

        const finishedGoods = [
            {
                id: 1,
                book_article_id: "APN-BK-0101",
                book_title: "اردو قواعد و انشا - جماعت پنجم",
                work_order_no: "APN-WO-2026-0001",
                batch_no: "APN-WO-2026-0001",
                warehouse_name: "مرکزی گودام عباسی پبلیکیشن (APN Warehouse)",
                rack_location: "Rack-A",
                shelf_location: "Shelf-02",
                quantity_on_hand: 4920,
                received_date: new Date(Date.now() - 1*86400000).toISOString()
            }
        ];

        const damageRecords = [
            { id: 1, work_order_no: "APN-WO-2026-0001", stage: "PRINTING_INNER", item_type: "انر فارمے (Inner Sheets)", damaged_quantity: 45, unit: "SHEETS", reason: "مشین پر فیڈر جیم اور مس پرنٹنگ", cost_loss: 202.50, recorded_at: new Date(Date.now() - 5*86400000).toISOString() },
            { id: 2, work_order_no: "APN-WO-2026-0001", stage: "PRINTING_OUTER", item_type: "ٹائٹل کارڈ (Outer Covers)", damaged_quantity: 25, unit: "SHEETS", reason: "لیمینیشن میں سلوٹ اور ببل آنا", cost_loss: 375.00, recorded_at: new Date(Date.now() - 4*86400000).toISOString() },
            { id: 3, work_order_no: "APN-WO-2026-0001", stage: "BINDING", item_type: "بائنڈنگ شدہ کتب (Bound Books)", damaged_quantity: 10, unit: "BOOKS", reason: "تھری نائف کٹر پر کٹائی میں خرابی", cost_loss: 955.00, recorded_at: new Date(Date.now() - 2*86400000).toISOString() }
        ];

        localStorage.setItem('apn_raw_materials', JSON.stringify(rawMaterials));
        localStorage.setItem('apn_books', JSON.stringify(books));
        localStorage.setItem('apn_work_orders', JSON.stringify(workOrders));
        localStorage.setItem('apn_finished_goods', JSON.stringify(finishedGoods));
        localStorage.setItem('apn_damage_records', JSON.stringify(damageRecords));
        localStorage.setItem('apn_seeded_v1', 'true');
    }
};

window.APN_API = APN_API;
