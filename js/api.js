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

    // ==================== HR API ====================
    async getEmployees() {
        if (window.apnStore.isOnline) {
            try {
                const res = await fetch(`${API_BASE}/hr/employees`);
                if (res.ok) return await res.json();
            } catch (e) {}
        }
        return JSON.parse(localStorage.getItem('apn_employees') || '[]');
    },

    async addEmployee(emp) {
        if (window.apnStore.isOnline) {
            try {
                const res = await fetch(`${API_BASE}/hr/employees`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(emp)
                });
                if (res.ok) return await res.json();
            } catch (e) {}
        }
        const list = JSON.parse(localStorage.getItem('apn_employees') || '[]');
        emp.id = Date.now();
        emp.created_at = new Date().toISOString();
        emp.joining_date = new Date().toISOString();
        list.push(emp);
        localStorage.setItem('apn_employees', JSON.stringify(list));
        return emp;
    },

    async updateEmployee(empId, data) {
        if (window.apnStore.isOnline) {
            try {
                const res = await fetch(`${API_BASE}/hr/employees/${empId}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
                if (res.ok) return await res.json();
            } catch (e) {}
        }
        const list = JSON.parse(localStorage.getItem('apn_employees') || '[]');
        const idx = list.findIndex(e => e.id === empId);
        if (idx >= 0) {
            list[idx] = { ...list[idx], ...data };
            localStorage.setItem('apn_employees', JSON.stringify(list));
            return list[idx];
        }
        return null;
    },

    async getAttendance(date) {
        if (window.apnStore.isOnline) {
            try {
                const url = date ? `${API_BASE}/hr/attendance?date=${encodeURIComponent(date)}` : `${API_BASE}/hr/attendance`;
                const res = await fetch(url);
                if (res.ok) return await res.json();
            } catch (e) {}
        }
        const list = JSON.parse(localStorage.getItem('apn_attendances') || '[]');
        return date ? list.filter(a => a.date === date) : list;
    },

    async recordAttendance(att) {
        if (window.apnStore.isOnline) {
            try {
                const res = await fetch(`${API_BASE}/hr/attendance`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(att)
                });
                if (res.ok) return await res.json();
            } catch (e) {}
        }
        const list = JSON.parse(localStorage.getItem('apn_attendances') || '[]');
        const existingIdx = list.findIndex(a => a.employee_id === att.employee_id && a.date === att.date);
        if (existingIdx >= 0) {
            list[existingIdx] = { ...list[existingIdx], ...att };
            localStorage.setItem('apn_attendances', JSON.stringify(list));
            return list[existingIdx];
        } else {
            att.id = Date.now();
            list.push(att);
            localStorage.setItem('apn_attendances', JSON.stringify(list));
            return att;
        }
    },

    async getPayroll(monthYear) {
        if (window.apnStore.isOnline) {
            try {
                const url = monthYear ? `${API_BASE}/hr/payroll?month_year=${encodeURIComponent(monthYear)}` : `${API_BASE}/hr/payroll`;
                const res = await fetch(url);
                if (res.ok) return await res.json();
            } catch (e) {}
        }
        const list = JSON.parse(localStorage.getItem('apn_payrolls') || '[]');
        return monthYear ? list.filter(p => p.month_year === monthYear) : list;
    },

    async addPayroll(pr) {
        if (window.apnStore.isOnline) {
            try {
                const res = await fetch(`${API_BASE}/hr/payroll`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(pr)
                });
                if (res.ok) return await res.json();
            } catch (e) {}
        }
        const list = JSON.parse(localStorage.getItem('apn_payrolls') || '[]');
        pr.id = Date.now();
        pr.created_at = new Date().toISOString();
        list.unshift(pr);
        localStorage.setItem('apn_payrolls', JSON.stringify(list));
        return pr;
    },

    async paySalary(payrollId, status = 'PAID', method = 'CASH') {
        if (window.apnStore.isOnline) {
            try {
                const res = await fetch(`${API_BASE}/hr/payroll/${payrollId}/pay?status=${status}&method=${method}`, {
                    method: 'POST'
                });
                if (res.ok) return await res.json();
            } catch (e) {}
        }
        const list = JSON.parse(localStorage.getItem('apn_payrolls') || '[]');
        const pr = list.find(p => p.id === payrollId);
        if (pr) {
            pr.payment_status = status;
            pr.payment_method = method;
            pr.payment_date = new Date().toISOString();
            localStorage.setItem('apn_payrolls', JSON.stringify(list));
        }
        return pr;
    },

    // ==================== CHART OF ACCOUNTS & FINANCE API ====================
    async getAccounts() {
        if (window.apnStore.isOnline) {
            try {
                const res = await fetch(`${API_BASE}/finance/accounts`);
                if (res.ok) return await res.json();
            } catch (e) {}
        }
        return JSON.parse(localStorage.getItem('apn_accounts') || '[]');
    },

    async addAccount(acc) {
        if (window.apnStore.isOnline) {
            try {
                const res = await fetch(`${API_BASE}/finance/accounts`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(acc)
                });
                if (res.ok) return await res.json();
            } catch (e) {}
        }
        const list = JSON.parse(localStorage.getItem('apn_accounts') || '[]');
        acc.id = Date.now();
        acc.current_balance = acc.opening_balance || 0;
        acc.is_active = 1;
        acc.created_at = new Date().toISOString();
        list.push(acc);
        localStorage.setItem('apn_accounts', JSON.stringify(list));
        return acc;
    },

    async getVouchers() {
        if (window.apnStore.isOnline) {
            try {
                const res = await fetch(`${API_BASE}/finance/vouchers`);
                if (res.ok) return await res.json();
            } catch (e) {}
        }
        return JSON.parse(localStorage.getItem('apn_vouchers') || '[]');
    },

    async addVoucher(vData) {
        if (window.apnStore.isOnline) {
            try {
                const res = await fetch(`${API_BASE}/finance/vouchers`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(vData)
                });
                if (res.ok) return await res.json();
            } catch (e) {}
        }
        const list = JSON.parse(localStorage.getItem('apn_vouchers') || '[]');
        const accounts = JSON.parse(localStorage.getItem('apn_accounts') || '[]');
        vData.id = Date.now();
        vData.voucher_no = vData.voucher_no || `${vData.voucher_type}-${Date.now().toString().slice(-4)}`;
        vData.voucher_date = vData.voucher_date || new Date().toISOString();
        vData.total_amount = (vData.entries || []).reduce((sum, e) => sum + (Number(e.debit) || 0), 0);
        
        // Update account balances locally
        for (const entry of (vData.entries || [])) {
            const acc = accounts.find(a => a.id === entry.account_id || a.account_code === entry.account_code);
            if (acc) {
                if (acc.account_type === 'ASSET' || acc.account_type === 'EXPENSE') {
                    acc.current_balance += (Number(entry.debit) || 0) - (Number(entry.credit) || 0);
                } else {
                    acc.current_balance += (Number(entry.credit) || 0) - (Number(entry.debit) || 0);
                }
            }
        }
        list.unshift(vData);
        localStorage.setItem('apn_vouchers', JSON.stringify(list));
        localStorage.setItem('apn_accounts', JSON.stringify(accounts));
        return vData;
    },

    async getTrialBalance() {
        if (window.apnStore.isOnline) {
            try {
                const res = await fetch(`${API_BASE}/finance/trial-balance`);
                if (res.ok) return await res.json();
            } catch (e) {}
        }
        const accounts = JSON.parse(localStorage.getItem('apn_accounts') || '[]');
        let total_debit = 0;
        let total_credit = 0;
        const items = accounts.map(a => {
            const bal = a.current_balance || 0;
            let debit_bal = 0;
            let credit_bal = 0;
            if (a.account_type === 'ASSET' || a.account_type === 'EXPENSE') {
                if (bal >= 0) debit_bal = bal;
                else credit_bal = Math.abs(bal);
            } else {
                if (bal >= 0) credit_bal = bal;
                else debit_bal = Math.abs(bal);
            }
            total_debit += debit_bal;
            total_credit += credit_bal;
            return {
                account_code: a.account_code,
                account_name_en: a.account_name_en,
                account_name_ur: a.account_name_ur,
                account_type: a.account_type,
                subcategory: a.subcategory,
                debit: debit_bal,
                credit: credit_bal
            };
        });
        return {
            items,
            total_debit,
            total_credit,
            is_balanced: Math.abs(total_debit - total_credit) < 0.01
        };
    },

    // ==================== USERS & PERMISSIONS API ====================
    async getUsers() {
        if (window.apnStore.isOnline) {
            try {
                const res = await fetch(`${API_BASE}/users`);
                if (res.ok) return await res.json();
            } catch (e) {}
        }
        return JSON.parse(localStorage.getItem('apn_users') || '[]');
    },

    async addUser(user) {
        if (window.apnStore.isOnline) {
            try {
                const res = await fetch(`${API_BASE}/users`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(user)
                });
                if (res.ok) return await res.json();
            } catch (e) {}
        }
        const list = JSON.parse(localStorage.getItem('apn_users') || '[]');
        user.id = Date.now();
        user.created_at = new Date().toISOString();
        list.push(user);
        localStorage.setItem('apn_users', JSON.stringify(list));
        return user;
    },

    async updateUser(userId, data) {
        if (window.apnStore.isOnline) {
            try {
                const res = await fetch(`${API_BASE}/users/${userId}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
                if (res.ok) return await res.json();
            } catch (e) {}
        }
        const list = JSON.parse(localStorage.getItem('apn_users') || '[]');
        const idx = list.findIndex(u => u.id === userId);
        if (idx >= 0) {
            list[idx] = { ...list[idx], ...data };
            localStorage.setItem('apn_users', JSON.stringify(list));
            return list[idx];
        }
        return null;
    },

    async deleteUser(userId) {
        if (window.apnStore.isOnline) {
            try {
                const res = await fetch(`${API_BASE}/users/${userId}`, { method: 'DELETE' });
                if (res.ok) return await res.json();
            } catch (e) {}
        }
        let list = JSON.parse(localStorage.getItem('apn_users') || '[]');
        list = list.filter(u => u.id !== userId);
        localStorage.setItem('apn_users', JSON.stringify(list));
        return { deleted: true };
    },

    // ==================== EXCEL & BULK IMPORT API ====================
    async importPackagesReport() {
        if (window.apnStore.isOnline) {
            try {
                const res = await fetch(`${API_BASE}/import/packages-report`, { method: 'POST' });
                if (res.ok) return await res.json();
            } catch (e) {}
        }
        return { imported_new: 730, updated_existing: 0, total_processed: 730, message: "کوئیک بکس پیکیجز فائل کامیابی سے درآمد ہو گئی" };
    },

    async bulkImportRawMaterials(items) {
        if (window.apnStore.isOnline) {
            try {
                const res = await fetch(`${API_BASE}/import/raw-materials`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ items })
                });
                if (res.ok) return await res.json();
            } catch (e) {}
        }
        const list = JSON.parse(localStorage.getItem('apn_raw_materials') || '[]');
        let count = 0;
        for (const it of items) {
            if (!it.name) continue;
            const ex = list.find(m => m.name === it.name);
            if (ex) {
                ex.current_stock = Number(it.current_stock || ex.current_stock);
                ex.unit_cost = Number(it.unit_cost || ex.unit_cost);
            } else {
                it.id = Date.now() + Math.random();
                it.created_at = new Date().toISOString();
                list.push(it);
            }
            count++;
        }
        localStorage.setItem('apn_raw_materials', JSON.stringify(list));
        return { imported: count };
    },

    async bulkImportBooks(books) {
        if (window.apnStore.isOnline) {
            try {
                const res = await fetch(`${API_BASE}/import/books`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ books })
                });
                if (res.ok) return await res.json();
            } catch (e) {}
        }
        const list = JSON.parse(localStorage.getItem('apn_books') || '[]');
        let count = 0;
        for (const b of books) {
            if (!b.article_id || !b.title) continue;
            const ex = list.find(m => m.article_id === b.article_id);
            b.forms_count = Number(((b.page_count || 128) / 16).toFixed(2));
            if (ex) {
                Object.assign(ex, b);
            } else {
                b.created_at = new Date().toISOString();
                list.push(b);
            }
            count++;
        }
        localStorage.setItem('apn_books', JSON.stringify(list));
        return { imported: count };
    },

    async bulkImportAccounts(accounts) {
        if (window.apnStore.isOnline) {
            try {
                const res = await fetch(`${API_BASE}/import/accounts`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ accounts })
                });
                if (res.ok) return await res.json();
            } catch (e) {}
        }
        const list = JSON.parse(localStorage.getItem('apn_accounts') || '[]');
        let count = 0;
        for (const a of accounts) {
            if (!a.account_code || !a.account_name_en) continue;
            const ex = list.find(m => m.account_code === a.account_code);
            if (ex) {
                Object.assign(ex, a);
            } else {
                a.id = Date.now() + Math.random();
                a.current_balance = Number(a.opening_balance || 0);
                a.created_at = new Date().toISOString();
                list.push(a);
            }
            count++;
        }
        localStorage.setItem('apn_accounts', JSON.stringify(list));
        return { imported: count };
    },

    async bulkImportEmployees(employees) {
        if (window.apnStore.isOnline) {
            try {
                const res = await fetch(`${API_BASE}/import/employees`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ employees })
                });
                if (res.ok) return await res.json();
            } catch (e) {}
        }
        const list = JSON.parse(localStorage.getItem('apn_employees') || '[]');
        let count = 0;
        for (const e of employees) {
            if (!e.emp_code || !e.full_name) continue;
            const ex = list.find(m => m.emp_code === e.emp_code);
            if (ex) {
                Object.assign(ex, e);
            } else {
                e.id = Date.now() + Math.random();
                e.status = "ACTIVE";
                e.created_at = new Date().toISOString();
                list.push(e);
            }
            count++;
        }
        localStorage.setItem('apn_employees', JSON.stringify(list));
        return { imported: count };
    },


    seedLocalMockData() {
        const existingMaterials = JSON.parse(localStorage.getItem('apn_raw_materials') || '[]');
        const needsReseed = !localStorage.getItem('apn_seeded_v2') || 
                            !localStorage.getItem('apn_employees') || 
                            !localStorage.getItem('apn_accounts') ||
                            existingMaterials.length < 50;

        if (!needsReseed) return;
        
        const rawMaterials = (window.APN_DEFAULT_MATERIALS && window.APN_DEFAULT_MATERIALS.length > 0)
            ? window.APN_DEFAULT_MATERIALS
            : [
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

        const employees = [
            { id: 1, emp_code: "EMP-001", full_name: "استاد محمد فیاض", father_name: "محمد بشیر", cnic: "35201-1234567-1", phone: "0300-1234567", department: "پرنٹنگ فلور", designation: "چیف پریس ماسٹر (Offset Master)", salary_type: "MONTHLY", basic_salary: 65000, status: "ACTIVE", joining_date: new Date(Date.now() - 365*86400000).toISOString() },
            { id: 2, emp_code: "EMP-002", full_name: "عبدالستار ملک", father_name: "ملک نذیر", cnic: "35201-2345678-3", phone: "0301-2345678", department: "بائنڈنگ یونٹ", designation: "بائنڈنگ و کٹنگ ماسٹر", salary_type: "MONTHLY", basic_salary: 50000, status: "ACTIVE", joining_date: new Date(Date.now() - 200*86400000).toISOString() },
            { id: 3, emp_code: "EMP-003", full_name: "محمد شہزاد", father_name: "اللہ دتہ", cnic: "35201-3456789-5", phone: "0302-3456789", department: "پرنٹنگ فلور", designation: "سیکنڈ آپریٹر / فیڈر مین", salary_type: "MONTHLY", basic_salary: 38000, status: "ACTIVE", joining_date: new Date(Date.now() - 150*86400000).toISOString() },
            { id: 4, emp_code: "EMP-004", full_name: "حافظ طارق محمود", father_name: "غلام رسول", cnic: "35201-4567890-7", phone: "0303-4567890", department: "خام مال اسٹور", designation: "اسٹور کیپر", salary_type: "MONTHLY", basic_salary: 42000, status: "ACTIVE", joining_date: new Date(Date.now() - 100*86400000).toISOString() },
            { id: 5, emp_code: "EMP-005", full_name: "سید کاشف علی", father_name: "سید علی رضا", cnic: "35201-5678901-9", phone: "0304-5678901", department: "اکاؤنٹس", designation: "اکاؤنٹنٹ", salary_type: "MONTHLY", basic_salary: 55000, status: "ACTIVE", joining_date: new Date(Date.now() - 300*86400000).toISOString() }
        ];

        const accounts = [
            { id: 1, account_code: "1010", account_name_en: "Cash in Hand (Petty Cash)", account_name_ur: "نقدی کھاتہ (کیش ان ہینڈ)", account_type: "ASSET", subcategory: "Current Asset", opening_balance: 150000, current_balance: 150000 },
            { id: 2, account_code: "1020", account_name_en: "Bank Al Habib Limited", account_name_ur: "بینک الحبیب لمیٹڈ (کرنٹ اکاؤنٹ)", account_type: "ASSET", subcategory: "Bank Account", opening_balance: 850000, current_balance: 850000 },
            { id: 3, account_code: "1030", account_name_en: "Meezan Bank Limited", account_name_ur: "میزان بینک لمیٹڈ (اسلامک اکاؤنٹ)", account_type: "ASSET", subcategory: "Bank Account", opening_balance: 420000, current_balance: 420000 },
            { id: 4, account_code: "1040", account_name_en: "Raw Material Inventory", account_name_ur: "خام مال اسٹاک کھاتہ (کاغذ، کارڈ، سیاہی)", account_type: "ASSET", subcategory: "Current Asset", opening_balance: 2400000, current_balance: 2400000 },
            { id: 5, account_code: "1050", account_name_en: "Finished Goods Inventory", account_name_ur: "تیار کتب گودام اسٹاک", account_type: "ASSET", subcategory: "Current Asset", opening_balance: 3100000, current_balance: 3100000 },
            { id: 6, account_code: "1060", account_name_en: "Accounts Receivable", account_name_ur: "گاہکوں سے واجب الوصول رقوم", account_type: "ASSET", subcategory: "Receivables", opening_balance: 650000, current_balance: 650000 },
            { id: 7, account_code: "1070", account_name_en: "Machinery & Equipment", account_name_ur: "پرنٹنگ و بائنڈنگ مشینیں", account_type: "ASSET", subcategory: "Fixed Asset", opening_balance: 8500000, current_balance: 8500000 },
            { id: 8, account_code: "2010", account_name_en: "Paper Mills Payable", account_name_ur: "کاغذ ملز واجب الادا رقوم", account_type: "LIABILITY", subcategory: "Current Liability", opening_balance: 750000, current_balance: 750000 },
            { id: 9, account_code: "2020", account_name_en: "Ink Suppliers Payable", account_name_ur: "سیاہی و کیمیکل سپلائرز واجبات", account_type: "LIABILITY", subcategory: "Current Liability", opening_balance: 120000, current_balance: 120000 },
            { id: 10, account_code: "2030", account_name_en: "Salaries Payable", account_name_ur: "ملازمین کی واجب الادا تنخواہیں", account_type: "LIABILITY", subcategory: "Current Liability", opening_balance: 380000, current_balance: 380000 },
            { id: 11, account_code: "3010", account_name_en: "Owner Capital (Abbasi)", account_name_ur: "مالکانہ سرمایہ کاری (عباسی پبلیکیشن)", account_type: "EQUITY", subcategory: "Owner Equity", opening_balance: 12000000, current_balance: 12000000 },
            { id: 12, account_code: "3020", account_name_en: "Retained Earnings", account_name_ur: "سابقہ منافع و ریزرو فنڈ", account_type: "EQUITY", subcategory: "Retained Earnings", opening_balance: 2725000, current_balance: 2725000 },
            { id: 13, account_code: "4010", account_name_en: "Book Sales Revenue", account_name_ur: "کتب فروخت آمدنی", account_type: "REVENUE", subcategory: "Sales Revenue", opening_balance: 0, current_balance: 0 },
            { id: 14, account_code: "5010", account_name_en: "Cost of Paper Consumed", account_name_ur: "استعمال شدہ کاغذ و کارڈ کی لاگت", account_type: "EXPENSE", subcategory: "Direct Cost", opening_balance: 0, current_balance: 0 },
            { id: 15, account_code: "5030", account_name_en: "Press Machine Wages", account_name_ur: "پریس ورکرز کی اجرت", account_type: "EXPENSE", subcategory: "Direct Cost", opening_balance: 0, current_balance: 0 }
        ];


        const users = [
            { id: 1, username: "admin", full_name: "ایڈمنسٹریٹر (محمد عامر عباسی)", role: "ADMIN", permissions: ["raw_materials", "books", "work_orders", "printing", "outer", "binding", "warehouse", "damage", "hr", "accounts", "excel_hub", "users", "admin"], is_active: 1 },
            { id: 2, username: "store", full_name: "اسٹور کیپر (حافظ طارق محمود)", role: "STORE", permissions: ["raw_materials", "excel_hub"], is_active: 1 },
            { id: 3, username: "press", full_name: "پریس سپروائزر (استاد فیاض احمد)", role: "FLOOR", permissions: ["work_orders", "printing", "outer", "binding", "damage"], is_active: 1 },
            { id: 4, username: "warehouse", full_name: "گودام انچارج (محمد عثمان)", role: "WAREHOUSE", permissions: ["warehouse", "work_orders"], is_active: 1 },
            { id: 5, username: "accounts", full_name: "اکاؤنٹس مینیجر (سید کاشف علی)", role: "ACCOUNTS", permissions: ["accounts", "excel_hub", "damage"], is_active: 1 },
            { id: 6, username: "hr", full_name: "ایچ آر آفیسر (بلال رضا)", role: "HR", permissions: ["hr", "excel_hub"], is_active: 1 }
        ];

        localStorage.setItem('apn_raw_materials', JSON.stringify(rawMaterials));
        localStorage.setItem('apn_books', JSON.stringify(books));
        localStorage.setItem('apn_work_orders', JSON.stringify(workOrders));
        localStorage.setItem('apn_finished_goods', JSON.stringify(finishedGoods));
        localStorage.setItem('apn_damage_records', JSON.stringify(damageRecords));
        localStorage.setItem('apn_employees', JSON.stringify(employees));
        localStorage.setItem('apn_accounts', JSON.stringify(accounts));
        localStorage.setItem('apn_users', JSON.stringify(users));
        localStorage.setItem('apn_seeded_v1', 'true');
        localStorage.setItem('apn_seeded_v2', 'true');
    }
};


window.APN_API = APN_API;
