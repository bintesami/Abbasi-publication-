// UI Renderer and Application Controller
// Abbasi Publication Network (APN) - Permanent Left Sidebar & Exact Theme

async function initApp() {
    APN_API.seedLocalMockData();
    await APN_API.checkBackend();
    
    document.body.className = window.apnStore.lang === 'ur' ? 'lang-ur' : 'lang-en';

    await refreshData();
    renderApp();
}

async function refreshData() {
    window.apnStore.rawMaterials = await APN_API.getRawMaterials();
    window.apnStore.books = await APN_API.getBooks();
    window.apnStore.workOrders = await APN_API.getWorkOrders();
    window.apnStore.finishedGoods = await APN_API.getFinishedGoods();
    window.apnStore.damageRecords = await APN_API.getDamageRecords();
    window.apnStore.dashboardMetrics = await APN_API.getDashboardMetrics();
}

function switchTab(tabId) {
    window.apnStore.activeTab = tabId;
    renderApp();
}

function toggleSidebar() {
    window.apnStore.sidebarCollapsed = !window.apnStore.sidebarCollapsed;
    renderApp();
}

function renderApp() {
    const s = window.apnStore;
    const root = document.getElementById('appRoot');
    if (!root) return;

    const isCollapsed = s.sidebarCollapsed;
    const isUrdu = s.lang === 'ur';

    root.innerHTML = `
        <!-- Top Header Bar (#4885a6 steel blue) -->
        <header class="bg-[#4885a6] text-white shadow-sm sticky top-0 z-50 h-[50px] flex items-center justify-between px-4 select-none">
            <!-- Left: Calligraphy Brand & Refresh Button -->
            <div class="flex items-center gap-3">
                <div class="flex items-center gap-2">
                    <span class="calligraphy-title text-xl font-bold tracking-wide text-white drop-shadow-xs">
                        عباسی پبلیکیشن نیٹ ورک
                    </span>
                    <span class="hidden md:inline text-[11px] font-semibold text-blue-100/90 pl-2 border-l border-white/25 ml-1">
                        Abbasi Publication Network
                    </span>
                </div>
                
                <!-- Square Refresh / Reload Button matching screenshot -->
                <button onclick="handleReload()" title="ریفریش ڈیٹا" class="w-8 h-8 rounded bg-[#5c9bbd] hover:bg-[#3d7a9c] flex items-center justify-center text-white transition text-sm shadow-xs">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                    </svg>
                </button>
            </div>

            <!-- Right: Status, Globe & User Avatar -->
            <div class="flex items-center gap-3">
                <!-- Status Badge -->
                <div class="hidden sm:flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${s.isOnline ? 'bg-emerald-600/30 text-emerald-100 border border-emerald-300/40' : 'bg-amber-600/30 text-amber-100 border border-amber-300/40'}">
                    <span class="w-2 h-2 rounded-full ${s.isOnline ? 'bg-emerald-300 animate-ping' : 'bg-amber-300'}"></span>
                    <span>${s.isOnline ? s.t('backend_connected') : s.t('backend_offline')}</span>
                </div>

                <!-- Globe / Language Switcher -->
                <button onclick="toggleLanguage()" title="زبان تبدیل کریں / Switch Language" class="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center text-white transition text-base">
                    🌐
                </button>

                <!-- User Profile Avatar with dropdown arrow -->
                <div class="flex items-center gap-1.5 cursor-pointer pl-1">
                    <div class="w-8 h-8 rounded-full bg-[#1b3240] border-2 border-white/40 flex items-center justify-center text-white text-xs font-bold shadow-inner">
                        <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <span class="text-white/80 text-[10px]">▼</span>
                </div>
            </div>
        </header>

        <!-- Main Shell Container: Sidebar ALWAYS on the LEFT -->
        <div class="flex min-h-[calc(100vh-50px)]">
            <!-- Left Sidebar (Permanent Left Position) -->
            <aside class="${isCollapsed ? 'w-16' : 'w-60'} bg-white border-r border-slate-200 flex flex-col justify-between transition-all duration-200 shrink-0 select-none shadow-xs">
                <div>
                    <!-- Top 4 Color Buttons row matching user screenshot -->
                    <div class="grid grid-cols-4 gap-0.5 p-1 bg-slate-100 border-b border-slate-200">
                        <button onclick="switchTab('raw_materials')" title="خام مال لیجر" class="h-8 top-btn-green text-white flex items-center justify-center rounded-xs transition text-sm">
                            📊
                        </button>
                        <button onclick="openAddBookModal()" title="نئی کتاب کا اندراج" class="h-8 top-btn-blue text-white flex items-center justify-center rounded-xs transition text-sm">
                            ✏️
                        </button>
                        <button onclick="switchTab('work_orders')" title="ورک آرڈرز" class="h-8 top-btn-orange text-white flex items-center justify-center rounded-xs transition text-sm">
                            👥
                        </button>
                        <button onclick="showLowStockModal()" title="کم اسٹاک الرٹس" class="h-8 top-btn-red text-white flex items-center justify-center rounded-xs transition text-sm">
                            ⚙️
                        </button>
                    </div>

                    <!-- Sidebar Navigation List -->
                    <nav class="p-2 space-y-1">
                        ${renderSidebarLink('dashboard', '🎛️', 'Dashboard', false)}
                        ${renderSidebarLink('raw_materials', '📦', 'Raw Material Store', true)}
                        ${renderSidebarLink('books', '📚', 'Book Master & BOM', true)}
                        ${renderSidebarLink('work_orders', '📝', 'Work Orders', true)}
                        ${renderSidebarLink('printing', '📄', 'Inner Printing', true)}
                        ${renderSidebarLink('outer', '🎨', 'Cover & Lamination', true)}
                        ${renderSidebarLink('binding', '✂️', 'Binding Unit', true)}
                        ${renderSidebarLink('warehouse', '🏭', 'Finished Warehouse', true)}
                        ${renderSidebarLink('damage', '⚠️', 'Damage & Loss', true)}
                        ${renderSidebarLink('admin', '⚙️', 'Admin & Reports', false)}
                    </nav>
                </div>

                <!-- Bottom Collapse Arrow Button matching screenshot -->
                <div class="p-2 border-t border-slate-200 text-center">
                    <button onclick="toggleSidebar()" class="w-8 h-8 mx-auto rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center text-xs font-bold transition">
                        ${isCollapsed ? '»' : '«'}
                    </button>
                </div>
            </aside>

            <!-- Main Content Area (on the Right) -->
            <main class="flex-1 bg-[#f4f7f9] p-4 sm:p-6 overflow-y-auto">
                <!-- Tab Header matching screenshot -->
                <div class="flex items-center gap-1 border-b border-slate-200 mb-6 pb-0 select-none">
                    <div class="dashboard-tab cursor-pointer" onclick="switchTab('dashboard')">
                        <span>Dashboard</span>
                    </div>
                    ${s.activeTab !== 'dashboard' ? `
                        <div class="dashboard-tab !border-t-[#0288d1] !text-blue-700 bg-blue-50/50">
                            <span>${getTabTitle(s.activeTab)}</span>
                            <button onclick="switchTab('dashboard')" class="text-slate-400 hover:text-slate-600 font-bold text-xs ml-1">✕</button>
                        </div>
                    ` : ''}
                </div>

                <!-- Active Content View -->
                <div class="${isUrdu ? 'text-right' : 'text-left'}">
                    ${s.activeTab === 'dashboard' ? renderDepartmentGrid() : renderDepartmentDetails(s.activeTab)}
                </div>
            </main>
        </div>

        <div id="modalContainer"></div>
    `;
}

function renderSidebarLink(tabId, icon, label, hasArrow) {
    const s = window.apnStore;
    const isActive = s.activeTab === tabId;
    const isCollapsed = s.sidebarCollapsed;

    return `
        <div onclick="switchTab('${tabId}')" class="sidebar-link ${isActive ? 'active' : ''}" title="${label}">
            <div class="flex items-center gap-2.5">
                <span class="text-base">${icon}</span>
                ${!isCollapsed ? `<span class="text-xs font-semibold">${label}</span>` : ''}
            </div>
            ${!isCollapsed && hasArrow ? `<span class="text-slate-400 text-xs font-bold">›</span>` : ''}
        </div>
    `;
}

function getTabTitle(tabId) {
    switch (tabId) {
        case 'raw_materials': return 'Raw Material Store';
        case 'books': return 'Book Master & BOM';
        case 'work_orders': return 'Work Orders & Job Cards';
        case 'printing': return 'Inner Printing Floor';
        case 'outer': return 'Cover & Lamination';
        case 'binding': return 'Binding & Assembly';
        case 'warehouse': return 'Finished Goods Warehouse';
        case 'damage': return 'Damage & Loss Ledger';
        case 'admin': return 'Admin & Reports';
        default: return 'Dashboard';
    }
}

// ==================== DASHBOARD DEPARTMENT CARDS GRID ====================

function renderDepartmentGrid() {
    const s = window.apnStore;
    const m = s.dashboardMetrics;

    const departments = [
        { id: 'raw_materials', icon: '📦', title: s.t('dept_raw_title'), sub: s.t('dept_raw_sub'), count: `${s.rawMaterials.length} آئٹمز` },
        { id: 'books', icon: '📚', title: s.t('dept_book_title'), sub: s.t('dept_book_sub'), count: `${s.books.length} کتب` },
        { id: 'work_orders', icon: '📝', title: s.t('dept_wo_title'), sub: s.t('dept_wo_sub'), count: `${m.active_jobs_count || 0} فعال` },
        { id: 'printing', icon: '📄', title: s.t('dept_inner_title'), sub: s.t('dept_inner_sub'), count: 'مشین روم 1' },
        { id: 'outer', icon: '🎨', title: s.t('dept_outer_title'), sub: s.t('dept_outer_sub'), count: 'مشین روم 2' },
        { id: 'binding', icon: '✂️', title: s.t('dept_binding_title'), sub: s.t('dept_binding_sub'), count: 'بائنڈنگ فلور' },
        { id: 'warehouse', icon: '🏭', title: s.t('dept_warehouse_title'), sub: s.t('dept_warehouse_sub'), count: `${(m.total_finished_books || 0).toLocaleString()} کتب` },
        { id: 'damage', icon: '⚠️', title: s.t('dept_damage_title'), sub: s.t('dept_damage_sub'), count: `${m.total_damage_items || 0} ویسٹیج` },
        { id: 'admin', icon: '⚙️', title: s.t('dept_admin_title'), sub: s.t('dept_admin_sub'), count: 'کنٹرول' }
    ];

    return `
        <!-- Top 4 KPI Metrics Cards -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            <div class="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between">
                <div>
                    <p class="text-[11px] font-bold text-slate-500 uppercase">${s.t('kpi_total_finished')}</p>
                    <h4 class="text-xl font-extrabold text-slate-900 mt-0.5">${(m.total_finished_books || 0).toLocaleString()} <span class="text-xs font-normal text-slate-500">${s.t('kpi_books_unit')}</span></h4>
                </div>
                <div class="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center text-xl font-bold">
                    📚
                </div>
            </div>

            <div class="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between">
                <div>
                    <p class="text-[11px] font-bold text-slate-500 uppercase">${s.t('kpi_active_jobs')}</p>
                    <h4 class="text-xl font-extrabold text-slate-900 mt-0.5">${m.active_jobs_count || 0} <span class="text-xs font-normal text-slate-500">${s.t('kpi_jobs_unit')}</span></h4>
                </div>
                <div class="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center text-xl font-bold">
                    ⚙️
                </div>
            </div>

            <div class="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between">
                <div>
                    <p class="text-[11px] font-bold text-slate-500 uppercase">${s.t('kpi_low_stock')}</p>
                    <h4 class="text-xl font-extrabold ${(m.low_stock_count || 0) > 0 ? 'text-red-600' : 'text-slate-900'} mt-0.5">${m.low_stock_count || 0} <span class="text-xs font-normal text-slate-500">${s.t('kpi_alerts_unit')}</span></h4>
                </div>
                <div class="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center text-xl font-bold ${(m.low_stock_count || 0) > 0 ? 'badge-pulse-red' : ''}">
                    🚨
                </div>
            </div>

            <div class="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between">
                <div>
                    <p class="text-[11px] font-bold text-slate-500 uppercase">${s.t('kpi_damage_loss')}</p>
                    <h4 class="text-xl font-extrabold text-slate-900 mt-0.5">${(m.total_financial_loss || 0).toLocaleString()} <span class="text-xs font-normal text-slate-500">PKR</span></h4>
                </div>
                <div class="w-10 h-10 rounded-lg bg-rose-50 text-rose-700 flex items-center justify-center text-xl font-bold">
                    📉
                </div>
            </div>
        </div>

        <!-- 9 Department Cards Grid (Clean 2-Row Layout, No Flipped Parentheses) -->
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            ${departments.map(d => `
                <div onclick="switchTab('${d.id}')" class="dept-card">
                    <div class="dept-card-icon">
                        <span>${d.icon}</span>
                    </div>
                    <div class="dept-card-title">${d.title}</div>
                    <div class="dept-card-subtitle">${d.sub}</div>
                    <div class="mt-3 pt-2 border-t border-slate-100 flex justify-between items-center text-[10px] text-slate-400">
                        <span>اسٹیٹس</span>
                        <span class="font-bold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded">${d.count}</span>
                    </div>
                </div>
            `).join('')}
        </div>

        <!-- Active Production Jobs Tracker -->
        <div class="bg-white rounded-xl border border-slate-200 p-5 shadow-xs mb-6">
            <div class="flex items-center justify-between pb-3 border-b border-slate-100">
                <div>
                    <h3 class="text-sm font-bold text-slate-900">لائیو پروڈکشن پائپ لائن (Active Jobs Tracker)</h3>
                    <p class="text-xs text-slate-500">خام مال کے اخراج سے لے کر انر و آؤٹر پرنٹنگ، بائنڈنگ، اور فنش گڈز گودام تک کی پیش رفت</p>
                </div>
                <button onclick="openNewWorkOrderModal()" class="px-3.5 py-1.5 bg-[#4885a6] hover:bg-[#3b7596] text-white text-xs font-bold rounded-lg shadow-xs transition">
                    ${s.t('btn_new_job')}
                </button>
            </div>

            <div class="divide-y divide-slate-100 mt-3">
                ${s.workOrders.slice(0, 5).map(wo => {
                    const innerPct = Math.min(100, Math.round((wo.inner_printed_sheets / (wo.target_quantity || 1)) * 100));
                    const outerPct = Math.min(100, Math.round((wo.outer_printed_covers / (wo.target_quantity || 1)) * 100));
                    const bindPct = Math.min(100, Math.round((wo.binding_assembled_qty / (wo.target_quantity || 1)) * 100));

                    return `
                        <div class="py-3 px-2 hover:bg-slate-50/70 rounded-lg transition">
                            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                                <div class="flex items-center gap-2">
                                    <span class="font-mono text-xs font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-300">${wo.work_order_no}</span>
                                    <h4 class="font-bold text-slate-800 text-xs">${wo.book_title || wo.book_article_id}</h4>
                                    <span class="text-[10px] px-2 py-0.5 rounded font-semibold ${getStatusBadge(wo.status)}">${s.t('status_' + wo.status)}</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <button onclick="openJobCardPrintModal('${wo.work_order_no}')" class="px-2.5 py-1 text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 rounded border border-slate-300">
                                        🖨️ جاب کارڈ
                                    </button>
                                    <button onclick="openProgressUpdateModal('${wo.work_order_no}')" class="px-2.5 py-1 text-xs font-bold bg-blue-50 text-blue-700 hover:bg-blue-100 rounded border border-blue-200">
                                        اسٹیٹس اپڈیٹ
                                    </button>
                                </div>
                            </div>

                            <!-- 4 Stages Progress Bar -->
                            <div class="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                                <div class="p-2 rounded bg-slate-50 border border-slate-200">
                                    <span class="text-[11px] font-bold text-slate-600 block">1. اسٹور اخراج</span>
                                    <span class="text-[11px] text-emerald-700 font-bold">✓ مٹیریل ایشو</span>
                                </div>
                                <div class="p-2 rounded bg-slate-50 border border-slate-200">
                                    <div class="flex justify-between text-[11px] font-bold">
                                        <span>2. انر پرنٹنگ</span>
                                        <span>${innerPct}%</span>
                                    </div>
                                    <div class="w-full bg-slate-200 h-1.5 rounded-full mt-1 overflow-hidden">
                                        <div class="bg-blue-600 h-full" style="width: ${innerPct}%"></div>
                                    </div>
                                </div>
                                <div class="p-2 rounded bg-slate-50 border border-slate-200">
                                    <div class="flex justify-between text-[11px] font-bold">
                                        <span>3. کور پرنٹنگ</span>
                                        <span>${outerPct}%</span>
                                    </div>
                                    <div class="w-full bg-slate-200 h-1.5 rounded-full mt-1 overflow-hidden">
                                        <div class="bg-purple-600 h-full" style="width: ${outerPct}%"></div>
                                    </div>
                                </div>
                                <div class="p-2 rounded bg-slate-50 border border-slate-200">
                                    <div class="flex justify-between text-[11px] font-bold">
                                        <span>4. بائنڈنگ اسمبلی</span>
                                        <span>${bindPct}%</span>
                                    </div>
                                    <div class="w-full bg-slate-200 h-1.5 rounded-full mt-1 overflow-hidden">
                                        <div class="bg-amber-500 h-full" style="width: ${bindPct}%"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
}

// ==================== DEPARTMENT DETAILED VIEWS ====================

function renderDepartmentDetails(tabId) {
    switch (tabId) {
        case 'raw_materials': return renderRawMaterials();
        case 'books': return renderBooks();
        case 'work_orders': return renderWorkOrders();
        case 'printing': return renderProductionFloor('printing');
        case 'outer': return renderProductionFloor('outer');
        case 'binding': return renderProductionFloor('binding');
        case 'warehouse': return renderWarehouse();
        case 'damage': return renderDamageReport();
        case 'admin': return renderAdminView();
        default: return renderDepartmentGrid();
    }
}

// 1. Raw Materials View
function renderRawMaterials() {
    const s = window.apnStore;
    const mats = s.rawMaterials;

    return `
        <div class="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div>
                    <h3 class="text-base font-bold text-slate-900">خام مال اسٹور (Raw Material Store)</h3>
                    <p class="text-xs text-slate-500">پیپر، کارڈ، پرنٹنگ سیاہی (CMYK)، لیمینیشن اور بائنڈنگ سامان کا لائیو اسٹاک لیجر</p>
                </div>
                <div class="flex items-center gap-2">
                    <button onclick="openStockInwardModal()" class="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg shadow-xs transition">
                        ${s.t('btn_stock_inward')}
                    </button>
                    <button onclick="openAddMaterialModal()" class="px-3 py-1.5 bg-[#4885a6] hover:bg-[#3b7596] text-white text-xs font-bold rounded-lg shadow-xs transition">
                        ${s.t('btn_add_material')}
                    </button>
                </div>
            </div>

            <div class="overflow-x-auto mt-4">
                <table class="w-full text-xs">
                    <thead>
                        <tr class="bg-slate-50 text-slate-600 border-b border-slate-200">
                            <th class="py-3 px-3">آئٹم کا نام</th>
                            <th class="py-3 px-3">شعبہ</th>
                            <th class="py-3 px-3">سائز و GSM</th>
                            <th class="py-3 px-3">موجودہ اسٹاک</th>
                            <th class="py-3 px-3">کم از کم حد</th>
                            <th class="py-3 px-3">فی یونٹ ریٹ</th>
                            <th class="py-3 px-3 text-center">اسٹیٹس</th>
                            <th class="py-3 px-3 text-center">ایکشن</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100">
                        ${mats.map(m => {
                            const isLow = m.current_stock <= m.min_reorder_level;
                            return `
                                <tr class="hover:bg-slate-50 transition ${isLow ? 'bg-red-50/40' : ''}">
                                    <td class="py-3 px-3 font-bold text-slate-800">${m.name}</td>
                                    <td class="py-3 px-3"><span class="px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">${m.category}</span></td>
                                    <td class="py-3 px-3 text-slate-600">${m.size || '-'} ${m.gsm ? `(${m.gsm} GSM)` : ''}</td>
                                    <td class="py-3 px-3 font-extrabold ${isLow ? 'text-red-600 text-sm' : 'text-slate-900'}">${m.current_stock} <span class="font-normal text-slate-500">${m.unit}</span></td>
                                    <td class="py-3 px-3 text-slate-500">${m.min_reorder_level} ${m.unit}</td>
                                    <td class="py-3 px-3 font-semibold text-slate-700">${m.unit_cost.toLocaleString()} PKR</td>
                                    <td class="py-3 px-3 text-center">
                                        ${isLow ? `
                                            <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-red-100 text-red-700 border border-red-300">
                                                <span>🚨</span> کم اسٹاک
                                            </span>
                                        ` : `
                                            <span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700">
                                                ✓ تسلی بخش
                                            </span>
                                        `}
                                    </td>
                                    <td class="py-3 px-3 text-center">
                                        <button onclick="quickStockAdd(${m.id})" class="px-2.5 py-1 text-xs font-bold text-blue-700 hover:bg-blue-50 rounded border border-blue-200">
                                            + خریداری درج کریں
                                        </button>
                                    </td>
                                </tr>
                            `;
                        }).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

// 2. Book Master & BOM View
function renderBooks() {
    const s = window.apnStore;
    const books = s.books;

    return `
        <div class="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div>
                    <h3 class="text-base font-bold text-slate-900">کتب ماسٹر و بل آف مٹیریل (Book Master & BOM)</h3>
                    <p class="text-xs text-slate-500">کتب کی کیٹلاگ، صفحات و فارمے (16 صفحات = 1 فارما) اور پری کاسٹنگ فارمولا</p>
                </div>
                <button onclick="openAddBookModal()" class="px-3.5 py-1.5 bg-[#4885a6] hover:bg-[#3b7596] text-white text-xs font-bold rounded-lg shadow-xs transition">
                    ${s.t('btn_add_book')}
                </button>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                ${books.map(b => `
                    <div class="border border-slate-200 rounded-xl p-4 hover:shadow-sm transition bg-white">
                        <div class="flex items-start justify-between">
                            <div>
                                <span class="font-mono text-xs font-bold bg-blue-50 text-blue-800 px-2 py-0.5 rounded border border-blue-200">${b.article_id}</span>
                                <h4 class="text-base font-bold text-slate-900 mt-2">${b.title}</h4>
                                <p class="text-xs text-slate-500 font-medium">${b.subject || ''} • زبان: ${b.language}</p>
                            </div>
                            <span class="text-2xl text-slate-400">📖</span>
                        </div>

                        <div class="grid grid-cols-3 gap-2 bg-slate-50 p-2.5 rounded-lg mt-3 text-xs text-center border border-slate-100">
                            <div>
                                <span class="text-slate-500 block text-[11px]">کل صفحات</span>
                                <b class="text-slate-800 text-sm">${b.page_count}</b>
                            </div>
                            <div>
                                <span class="text-slate-500 block text-[11px]">فارمے (Forms)</span>
                                <b class="text-blue-700 text-sm">${b.forms_count}</b>
                            </div>
                            <div>
                                <span class="text-slate-500 block text-[11px]">تخمینہ لاگت</span>
                                <b class="text-emerald-700 text-sm">${b.standard_cost_per_copy} PKR</b>
                            </div>
                        </div>

                        <div class="mt-3 text-xs text-slate-600 space-y-1">
                            <p><b>انر پیپر:</b> ${b.inner_paper_spec || 'معیاری ٹیکسٹ پیپر'}</p>
                            <p><b>کور کارڈ:</b> ${b.outer_card_spec || 'آرٹ کارڈ لیمینیشن'}</p>
                        </div>

                        <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                            <span class="text-[11px] text-slate-400">BOM فارمولا فعال</span>
                            <button onclick="openNewWorkOrderModal('${b.article_id}')" class="px-3 py-1 bg-[#4885a6] hover:bg-[#3b7596] text-white text-xs font-bold rounded-lg transition shadow-xs">
                                🚀 ورک آرڈر جاری کریں
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// 3. Work Orders View
function renderWorkOrders() {
    const s = window.apnStore;
    const orders = s.workOrders;

    return `
        <div class="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div>
                    <h3 class="text-base font-bold text-slate-900">ورک آرڈرز اور پروڈکشن جابز (Work Orders)</h3>
                    <p class="text-xs text-slate-500">پروڈکشن جاب کارڈز، تفویض شدہ یونیک نمبر، انر و آؤٹر اسٹیٹس اور پرنٹنگ ٹریکنگ</p>
                </div>
                <button onclick="openNewWorkOrderModal()" class="px-3.5 py-1.5 bg-[#4885a6] hover:bg-[#3b7596] text-white text-xs font-bold rounded-lg shadow-xs transition">
                    ${s.t('btn_new_job')}
                </button>
            </div>

            <div class="overflow-x-auto mt-4">
                <table class="w-full text-xs">
                    <thead>
                        <tr class="bg-slate-50 text-slate-600 border-b border-slate-200">
                            <th class="py-3 px-3">جاب ٹریکنگ کوڈ</th>
                            <th class="py-3 px-3">کتاب کا نام</th>
                            <th class="py-3 px-3">ہدف تعداد</th>
                            <th class="py-3 px-3 text-center">انر پرنٹنگ</th>
                            <th class="py-3 px-3 text-center">کور پرنٹنگ</th>
                            <th class="py-3 px-3 text-center">بائنڈنگ</th>
                            <th class="py-3 px-3 text-center">مجموعی اسٹیٹس</th>
                            <th class="py-3 px-3 text-center">ایکشن</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100">
                        ${orders.map(o => `
                            <tr class="hover:bg-slate-50 transition">
                                <td class="py-3 px-3 font-mono font-bold text-blue-700">${o.work_order_no}</td>
                                <td class="py-3 px-3 font-bold text-slate-800">${o.book_title || o.book_article_id}</td>
                                <td class="py-3 px-3 font-extrabold text-slate-900">${o.target_quantity.toLocaleString()} کتب</td>
                                <td class="py-3 px-3 text-center">
                                    <span class="px-2 py-0.5 rounded text-[11px] font-semibold ${o.inner_status === 'COMPLETED' ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-50 text-blue-700'}">
                                        ${o.inner_printed_sheets} / ${o.target_quantity}
                                    </span>
                                </td>
                                <td class="py-3 px-3 text-center">
                                    <span class="px-2 py-0.5 rounded text-[11px] font-semibold ${o.outer_status === 'READY_FOR_BINDING' ? 'bg-emerald-100 text-emerald-800' : 'bg-purple-50 text-purple-700'}">
                                        ${o.outer_printed_covers} / ${o.target_quantity}
                                    </span>
                                </td>
                                <td class="py-3 px-3 text-center">
                                    <span class="px-2 py-0.5 rounded text-[11px] font-semibold ${o.binding_status === 'COMPLETED' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-50 text-amber-700'}">
                                        ${o.binding_assembled_qty} / ${o.target_quantity}
                                    </span>
                                </td>
                                <td class="py-3 px-3 text-center">
                                    <span class="px-2.5 py-1 rounded-full text-[10px] font-bold ${getStatusBadge(o.status)}">
                                        ${s.t('status_' + o.status)}
                                    </span>
                                </td>
                                <td class="py-3 px-3 text-center">
                                    <div class="flex items-center justify-center gap-1.5">
                                        <button onclick="openJobCardPrintModal('${o.work_order_no}')" class="px-2 py-1 text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 rounded border border-slate-300">
                                            🖨️ جاب کارڈ
                                        </button>
                                        <button onclick="openProgressUpdateModal('${o.work_order_no}')" class="px-2 py-1 text-xs font-bold bg-[#4885a6] hover:bg-[#3b7596] text-white rounded">
                                            اسٹیٹس
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

// 4. Floor View
function renderProductionFloor(specificStage = null) {
    const s = window.apnStore;
    const activeOrders = s.workOrders.filter(o => o.status !== 'COMPLETED');

    return `
        <div class="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
            <div class="pb-4 border-b border-slate-100">
                <h3 class="text-base font-bold text-slate-900">پروڈکشن فلور مانیٹرنگ (Production Floor Monitoring)</h3>
                <p class="text-xs text-slate-500">انر فارمے چھپائی، ٹائٹل لیمینیشن، اور بائنڈنگ اسمبلی کی تفصیلی ورکنگ</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <!-- Inner Section -->
                <div class="bg-slate-50 rounded-xl p-4 border border-slate-200">
                    <div class="flex items-center justify-between pb-3 border-b border-slate-200">
                        <div class="flex items-center gap-2">
                            <span class="text-xl">📄</span>
                            <h4 class="font-bold text-slate-800 text-sm">انر پرنٹنگ (Inner Forms)</h4>
                        </div>
                        <span class="px-2 py-0.5 bg-blue-100 text-blue-800 text-xs font-bold rounded">مشین روم 1</span>
                    </div>

                    <div class="mt-3 space-y-3">
                        ${activeOrders.map(o => `
                            <div class="bg-white p-3 rounded-lg border border-slate-200 shadow-xs">
                                <div class="flex justify-between items-start">
                                    <span class="font-mono text-xs font-bold text-blue-700">${o.work_order_no}</span>
                                    <span class="text-[10px] font-bold px-1.5 py-0.5 rounded ${o.inner_status === 'COMPLETED' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}">
                                        ${o.inner_status}
                                    </span>
                                </div>
                                <h5 class="font-bold text-slate-800 text-xs mt-1">${o.book_title}</h5>
                                <div class="mt-2 text-xs flex justify-between text-slate-600">
                                    <span>پرنٹ شدہ: <b>${o.inner_printed_sheets}</b> / ${o.target_quantity}</span>
                                    <span class="text-rose-600">ڈیمیج: ${o.inner_damage_sheets || 0}</span>
                                </div>
                                <button onclick="openProgressUpdateModal('${o.work_order_no}', 'INNER_PRINT')" class="w-full mt-2 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded border border-slate-300">
                                    + انر پرنٹنگ لاگ کریں
                                </button>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Outer Section -->
                <div class="bg-slate-50 rounded-xl p-4 border border-slate-200">
                    <div class="flex items-center justify-between pb-3 border-b border-slate-200">
                        <div class="flex items-center gap-2">
                            <span class="text-xl">🎨</span>
                            <h4 class="font-bold text-slate-800 text-sm">کور و لیمینیشن (Cover & Lam)</h4>
                        </div>
                        <span class="px-2 py-0.5 bg-purple-100 text-purple-800 text-xs font-bold rounded">مشین روم 2</span>
                    </div>

                    <div class="mt-3 space-y-3">
                        ${activeOrders.map(o => `
                            <div class="bg-white p-3 rounded-lg border border-slate-200 shadow-xs">
                                <div class="flex justify-between items-start">
                                    <span class="font-mono text-xs font-bold text-purple-700">${o.work_order_no}</span>
                                    <span class="text-[10px] font-bold px-1.5 py-0.5 rounded ${o.outer_status === 'READY_FOR_BINDING' ? 'bg-emerald-100 text-emerald-800' : 'bg-purple-100 text-purple-800'}">
                                        ${o.outer_status}
                                    </span>
                                </div>
                                <h5 class="font-bold text-slate-800 text-xs mt-1">${o.book_title}</h5>
                                <div class="mt-2 text-xs flex justify-between text-slate-600">
                                    <span>پرنٹ شدہ: <b>${o.outer_printed_covers}</b> / ${o.target_quantity}</span>
                                    <span class="text-rose-600">ڈیمیج: ${o.outer_damage_covers || 0}</span>
                                </div>
                                <button onclick="openProgressUpdateModal('${o.work_order_no}', 'OUTER_PRINT')" class="w-full mt-2 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded border border-slate-300">
                                    + کور لاگ کریں
                                </button>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Binding Section -->
                <div class="bg-slate-50 rounded-xl p-4 border border-slate-200">
                    <div class="flex items-center justify-between pb-3 border-b border-slate-200">
                        <div class="flex items-center gap-2">
                            <span class="text-xl">✂️</span>
                            <h4 class="font-bold text-slate-800 text-sm">بائنڈنگ اسمبلی (Binding Unit)</h4>
                        </div>
                        <span class="px-2 py-0.5 bg-amber-100 text-amber-800 text-xs font-bold rounded">بائنڈنگ فلور</span>
                    </div>

                    <div class="mt-3 space-y-3">
                        ${activeOrders.map(o => {
                            const isReadyForBinding = o.inner_status === 'COMPLETED' && o.outer_status === 'READY_FOR_BINDING';
                            return `
                                <div class="bg-white p-3 rounded-lg border border-slate-200 shadow-xs">
                                    <div class="flex justify-between items-start">
                                        <span class="font-mono text-xs font-bold text-amber-700">${o.work_order_no}</span>
                                        <span class="text-[10px] font-bold px-1.5 py-0.5 rounded ${o.binding_status === 'COMPLETED' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}">
                                            ${o.binding_status}
                                        </span>
                                    </div>
                                    <h5 class="font-bold text-slate-800 text-xs mt-1">${o.book_title}</h5>
                                    
                                    <div class="mt-2 text-[11px] p-1.5 rounded ${isReadyForBinding ? 'bg-emerald-50 text-emerald-800 font-semibold' : 'bg-amber-50 text-amber-800'}">
                                        ${isReadyForBinding ? '✓ انر اور آؤٹر دونوں بائنڈنگ کے لیے تیار ہیں' : '⚠️ انر یا آؤٹر کی پرنٹنگ ابھی زیرِ تکمیل ہے'}
                                    </div>

                                    <div class="mt-2 text-xs flex justify-between text-slate-600">
                                        <span>اسمبل شدہ کتب: <b>${o.binding_assembled_qty}</b></span>
                                        <span class="text-rose-600">ڈیمیج: ${o.binding_damage_qty || 0}</span>
                                    </div>
                                    <div class="grid grid-cols-2 gap-1.5 mt-2">
                                        <button onclick="openProgressUpdateModal('${o.work_order_no}', 'BINDING')" class="py-1 bg-amber-50 hover:bg-amber-100 text-amber-800 font-bold text-xs rounded border border-amber-300">
                                            + بائنڈنگ لاگ
                                        </button>
                                        <button onclick="finalizeJobToWarehouse('${o.work_order_no}')" class="py-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded">
                                            گودام منتقل ✓
                                        </button>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 5. Warehouse View
function renderWarehouse() {
    const s = window.apnStore;
    const fg = s.finishedGoods;

    return `
        <div class="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div>
                    <h3 class="text-base font-bold text-slate-900">فنش گڈز ویئر ہاؤس (Finished Goods Warehouse)</h3>
                    <p class="text-xs text-slate-500">مرکزی گودام میں تیار شدہ کتب کا اسٹاک، ریک نمبر اور شیلف لوکیشن</p>
                </div>
                <div class="text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-300">
                    کل دستیاب کتب: <span class="text-blue-700 font-extrabold">${fg.reduce((a,c) => a + c.quantity_on_hand, 0).toLocaleString()}</span>
                </div>
            </div>

            <div class="overflow-x-auto mt-4">
                <table class="w-full text-xs">
                    <thead>
                        <tr class="bg-slate-50 text-slate-600 border-b border-slate-200">
                            <th class="py-3 px-3">کتاب کا کوڈ و نام</th>
                            <th class="py-3 px-3">جاب / بیچ کوڈ</th>
                            <th class="py-3 px-3">گودام کا نام</th>
                            <th class="py-3 px-3 text-center">ریک و شیلف</th>
                            <th class="py-3 px-3">موجودہ تعداد</th>
                            <th class="py-3 px-3">تاریخ وصولی</th>
                            <th class="py-3 px-3 text-center">ایکشن</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100">
                        ${fg.map(item => `
                            <tr class="hover:bg-slate-50 transition">
                                <td class="py-3 px-3">
                                    <span class="font-mono text-xs font-bold text-slate-500">${item.book_article_id}</span>
                                    <div class="font-bold text-slate-900 text-sm mt-0.5">${item.book_title || item.book_article_id}</div>
                                </td>
                                <td class="py-3 px-3 font-mono font-bold text-blue-700">${item.batch_no}</td>
                                <td class="py-3 px-3 text-slate-700">${item.warehouse_name}</td>
                                <td class="py-3 px-3 text-center">
                                    <span class="px-2.5 py-1 rounded bg-blue-50 text-blue-800 font-extrabold border border-blue-200">
                                        ${item.rack_location} / ${item.shelf_location}
                                    </span>
                                </td>
                                <td class="py-3 px-3 font-extrabold text-emerald-700 text-sm">
                                    ${item.quantity_on_hand.toLocaleString()} <span class="text-xs font-normal text-slate-500">کتب</span>
                                </td>
                                <td class="py-3 px-3 text-slate-500">${new Date(item.received_date).toLocaleDateString('ur-PK')}</td>
                                <td class="py-3 px-3 text-center">
                                    <button onclick="openRelocateModal(${item.id}, '${item.rack_location}', '${item.shelf_location}')" class="px-2.5 py-1 text-xs font-bold text-slate-700 hover:bg-slate-100 rounded border border-slate-300">
                                        📍 لوکیشن بدلیں
                                    </button>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

// 6. Damage View
function renderDamageReport() {
    const s = window.apnStore;
    const records = s.damageRecords;
    const totalLoss = records.reduce((a,c) => a + (c.cost_loss || 0), 0);

    return `
        <div class="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div>
                    <h3 class="text-base font-bold text-slate-900">ڈیمیج و ویسٹیج لاگ (Damage & Wastage Ledger)</h3>
                    <p class="text-xs text-slate-500">پرنٹنگ مس پرنٹ، لیمینیشن ببل، کٹائی نقص اور بائنڈنگ خرابیوں کا مکمل ریکارڈ</p>
                </div>
                <div class="bg-rose-50 border border-rose-200 px-3 py-1.5 rounded-lg text-xs">
                    <span class="text-slate-600 font-medium">مجموعی مالی نقصان:</span>
                    <b class="text-rose-700 text-sm font-extrabold mr-1">${totalLoss.toLocaleString()} PKR</b>
                </div>
            </div>

            <div class="overflow-x-auto mt-4">
                <table class="w-full text-xs">
                    <thead>
                        <tr class="bg-slate-50 text-slate-600 border-b border-slate-200">
                            <th class="py-3 px-3">ورک آرڈر نمبر</th>
                            <th class="py-3 px-3">شعبہ</th>
                            <th class="py-3 px-3">خراب شدہ آئٹم</th>
                            <th class="py-3 px-3">تعداد / وزن</th>
                            <th class="py-3 px-3">نقص کی وجہ</th>
                            <th class="py-3 px-3">مالی نقصان</th>
                            <th class="py-3 px-3">تاریخ</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100">
                        ${records.map(r => `
                            <tr class="hover:bg-rose-50/20 transition">
                                <td class="py-3 px-3 font-mono font-bold text-blue-700">${r.work_order_no || '-'}</td>
                                <td class="py-3 px-3"><span class="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold">${r.stage}</span></td>
                                <td class="py-3 px-3 font-bold text-slate-800">${r.item_type}</td>
                                <td class="py-3 px-3 font-extrabold text-rose-600">${r.damaged_quantity} ${r.unit}</td>
                                <td class="py-3 px-3 text-slate-600">${r.reason}</td>
                                <td class="py-3 px-3 font-bold text-slate-900">${(r.cost_loss || 0).toLocaleString()} PKR</td>
                                <td class="py-3 px-3 text-slate-500">${new Date(r.recorded_at).toLocaleDateString('ur-PK')}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

// 7. Admin & Reports View
function renderAdminView() {
    const s = window.apnStore;
    return `
        <div class="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
            <h3 class="text-base font-bold text-slate-900 pb-3 border-b border-slate-100">ایڈمن کنٹرول اور بیک اپ (Admin Controls)</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 text-xs">
                <div class="p-4 rounded-xl border border-slate-200 bg-slate-50">
                    <h4 class="font-bold text-slate-800 text-sm">ڈیٹا بیک اپ (Export Backup)</h4>
                    <p class="text-slate-500 mt-1">تمام خام مال، کتب، اور ورک آرڈرز کا مکمل ڈیٹا JSON میں ڈاؤن لوڈ کریں۔</p>
                    <button onclick="downloadBackup()" class="mt-3 px-3 py-1.5 bg-[#4885a6] text-white font-bold rounded shadow-xs">
                        ⬇️ ڈاؤن لوڈ بیک اپ
                    </button>
                </div>
                <div class="p-4 rounded-xl border border-slate-200 bg-slate-50">
                    <h4 class="font-bold text-slate-800 text-sm">ڈیمو ڈیٹا ری سیٹ</h4>
                    <p class="text-slate-500 mt-1">ابتدائی پریس اور پبلیکیشن ڈیمو ڈیٹا دوبارہ لوڈ کریں۔</p>
                    <button onclick="resetDemoData()" class="mt-3 px-3 py-1.5 bg-amber-600 text-white font-bold rounded shadow-xs">
                        🔄 ڈیمو ڈیٹا لوڈ کریں
                    </button>
                </div>
                <div class="p-4 rounded-xl border border-slate-200 bg-slate-50">
                    <h4 class="font-bold text-slate-800 text-sm">پرنٹ ایبل سمری</h4>
                    <p class="text-slate-500 mt-1">اسٹاک اور پروڈکشن کی مکمل پرنٹ رپورٹ نکالیں۔</p>
                    <button onclick="window.print()" class="mt-3 px-3 py-1.5 bg-slate-800 text-white font-bold rounded shadow-xs">
                        🖨️ پرنٹ سمری
                    </button>
                </div>
            </div>
        </div>
    `;
}

// ==================== MODALS & ACTIONS ====================

function handleReload() {
    refreshData().then(() => {
        renderApp();
    });
}

function toggleLanguage() {
    const current = window.apnStore.lang;
    window.apnStore.setLanguage(current === 'ur' ? 'en' : 'ur');
}

function showLowStockModal() {
    const s = window.apnStore;
    const low = s.rawMaterials.filter(m => m.current_stock <= m.min_reorder_level);
    alert(`کم اسٹاک الرٹس: ${low.length} آئٹمز کی خریداری فوری درکار ہے۔`);
}

function downloadBackup() {
    const backup = {
        rawMaterials: window.apnStore.rawMaterials,
        books: window.apnStore.books,
        workOrders: window.apnStore.workOrders,
        finishedGoods: window.apnStore.finishedGoods,
        damageRecords: window.apnStore.damageRecords,
        exportedAt: new Date().toISOString()
    };
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backup, null, 2));
    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", `apn_backup_${new Date().toISOString().slice(0,10)}.json`);
    dlAnchorElem.click();
}

function resetDemoData() {
    if (!confirm('کیا آپ واقعی تمام ریکارڈز کو ڈیمو ڈیٹا پر ری سیٹ کرنا چاہتے ہیں؟')) return;
    localStorage.removeItem('apn_seeded_v1');
    APN_API.seedLocalMockData();
    refreshData().then(() => renderApp());
}

function getStatusBadge(status) {
    switch (status) {
        case 'COMPLETED': return 'bg-emerald-100 text-emerald-800 border border-emerald-300';
        case 'IN_BINDING': return 'bg-amber-100 text-amber-800 border border-amber-300';
        case 'IN_PRINTING': return 'bg-blue-100 text-blue-800 border border-blue-300';
        case 'MATERIAL_ISSUED': return 'bg-purple-100 text-purple-800 border border-purple-300';
        default: return 'bg-slate-100 text-slate-700 border border-slate-300';
    }
}

// 1. New Work Order Modal
function openNewWorkOrderModal(preselectedArticle = '') {
    const s = window.apnStore;
    const books = s.books;

    const modal = document.getElementById('modalContainer');
    modal.innerHTML = `
        <div class="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
            <div class="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200">
                <div class="flex items-center justify-between pb-3 border-b border-slate-100">
                    <h3 class="text-base font-bold text-slate-900">نیا پروڈکشن ورک آرڈر جاری کریں</h3>
                    <button onclick="closeModal()" class="text-slate-400 hover:text-slate-600 text-lg font-bold">✕</button>
                </div>

                <form id="newWoForm" onsubmit="handleCreateWorkOrder(event)" class="space-y-4 mt-4 text-xs text-right">
                    <div>
                        <label class="block font-bold text-slate-700 mb-1">کتاب کا انتخاب کریں</label>
                        <select id="woBookSelect" required class="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 font-bold text-slate-800">
                            <option value="">-- کتاب منتخب کریں --</option>
                            ${books.map(b => `
                                <option value="${b.article_id}" ${b.article_id === preselectedArticle ? 'selected' : ''}>
                                    ${b.title} (${b.article_id} - ${b.forms_count} فارمے)
                                </option>
                            `).join('')}
                        </select>
                    </div>

                    <div class="grid grid-cols-2 gap-3">
                        <div>
                            <label class="block font-bold text-slate-700 mb-1">ہدف تعداد (Target Qty)</label>
                            <input type="number" id="woQuantity" required min="100" step="100" value="5000" class="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 font-bold text-slate-800">
                        </div>
                        <div>
                            <label class="block font-bold text-slate-700 mb-1">متوقع تاریخِ تکمیل</label>
                            <input type="date" id="woTargetDate" class="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 font-semibold text-slate-800">
                        </div>
                    </div>

                    <div class="p-3 bg-blue-50 rounded-xl border border-blue-200 text-[11px] text-blue-900 leading-relaxed">
                        💡 <b>بل آف مٹیریل (BOM) خودکار کٹوتی:</b> ورک آرڈر بنتے ہی درکار انر پیپر، کور کارڈ اور سیاہی اسٹور سے خودکار طور پر خارج ہو جائے گی۔
                    </div>

                    <div>
                        <label class="block font-bold text-slate-700 mb-1">خصوصی ہدایات / نوٹس</label>
                        <textarea id="woNotes" rows="2" placeholder="پریس اور بائنڈنگ ماسٹر کے لیے ضروری ہدایات..." class="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5"></textarea>
                    </div>

                    <div class="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
                        <button type="button" onclick="closeModal()" class="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-lg">${s.t('btn_cancel')}</button>
                        <button type="submit" class="px-5 py-2 bg-[#4885a6] hover:bg-[#3b7596] text-white font-bold rounded-lg shadow">${s.t('btn_save')}</button>
                    </div>
                </form>
            </div>
        </div>
    `;
}

async function handleCreateWorkOrder(e) {
    e.preventDefault();
    const bookId = document.getElementById('woBookSelect').value;
    const qty = parseInt(document.getElementById('woQuantity').value);
    const date = document.getElementById('woTargetDate').value;
    const notes = document.getElementById('woNotes').value;

    const book = window.apnStore.books.find(b => b.article_id === bookId);

    const newWo = {
        book_article_id: bookId,
        book_title: book ? book.title : bookId,
        target_quantity: qty,
        target_delivery_date: date ? new Date(date).toISOString() : null,
        notes: notes
    };

    await APN_API.addWorkOrder(newWo);
    closeModal();
    await refreshData();
    renderApp();
}

// 2. Printable Official Job Card Modal (with live barcode)
function openJobCardPrintModal(workOrderNo) {
    const s = window.apnStore;
    const wo = s.workOrders.find(o => o.work_order_no === workOrderNo);
    if (!wo) return;
    const book = s.books.find(b => b.article_id === wo.book_article_id);

    const barcodeSvg = window.generateBarcodeSVG(wo.work_order_no, 260, 60);

    const modal = document.getElementById('modalContainer');
    modal.innerHTML = `
        <div class="fixed inset-0 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 z-50 overflow-y-auto">
            <div class="bg-white rounded-2xl max-w-2xl w-full p-8 shadow-2xl border border-slate-200">
                <div class="flex items-center justify-between pb-3 border-b border-slate-200 no-print">
                    <span class="text-xs font-bold text-slate-500">جاب کارڈ پری ویو (Print Preview)</span>
                    <div class="flex items-center gap-2">
                        <button onclick="window.print()" class="px-4 py-1.5 bg-[#4885a6] hover:bg-[#3b7596] text-white font-bold text-xs rounded-lg shadow flex items-center gap-1.5">
                            <span>🖨️</span> <span>پرنٹ نکالیں</span>
                        </button>
                        <button onclick="closeModal()" class="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-lg">✕ بند کریں</button>
                    </div>
                </div>

                <!-- Printable Area -->
                <div id="printableJobCardArea" class="mt-4 border-2 border-slate-800 p-6 rounded-xl text-right">
                    <div class="flex justify-between items-start border-b-2 border-slate-800 pb-4">
                        <div class="text-left">
                            ${barcodeSvg}
                            <p class="font-mono text-[11px] text-slate-500 mt-1">APN PRODUCTION ROUTING TICKET</p>
                        </div>
                        <div class="text-right">
                            <h2 class="text-xl font-extrabold text-slate-900 calligraphy-title">عباسی پبلیکیشن نیٹ ورک (APN)</h2>
                            <p class="text-xs font-bold text-[#4885a6]">پروڈکشن جاب کارڈ و کوالٹی روٹنگ شیٹ</p>
                            <p class="font-mono text-sm font-extrabold text-slate-900 mt-1">${wo.work_order_no}</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-4 my-4 text-xs">
                        <div class="bg-slate-50 p-3 rounded-lg border border-slate-200">
                            <p class="text-slate-500">کتاب کا نام:</p>
                            <h4 class="text-sm font-extrabold text-slate-900 mt-0.5">${wo.book_title || (book && book.title)}</h4>
                            <p class="text-slate-500 mt-2">آرٹیکل کوڈ: <b class="text-slate-800 font-mono">${wo.book_article_id}</b></p>
                            <p class="text-slate-500">صفحات و فارمے: <b class="text-slate-800">${book ? book.page_count : '-'} صفحات (${book ? book.forms_count : '-'} فارمے)</b></p>
                        </div>

                        <div class="bg-slate-50 p-3 rounded-lg border border-slate-200">
                            <p class="text-slate-500">پروڈکشن ہدف:</p>
                            <h4 class="text-sm font-extrabold text-[#4885a6] mt-0.5">${wo.target_quantity.toLocaleString()} کتب</h4>
                            <p class="text-slate-500 mt-2">تاریخ اجرا: <b class="text-slate-800">${new Date(wo.start_date).toLocaleDateString('ur-PK')}</b></p>
                            <p class="text-slate-500">متوقع تکمیل: <b class="text-slate-800">${wo.target_delivery_date ? new Date(wo.target_delivery_date).toLocaleDateString('ur-PK') : 'فوری'}</b></p>
                        </div>
                    </div>

                    <!-- Routing Checklist Table -->
                    <h4 class="font-bold text-xs text-slate-800 mb-2">آپریشن روٹنگ اور کوالٹی دستخط:</h4>
                    <table class="w-full text-xs border border-slate-300 text-center">
                        <thead class="bg-slate-100 font-bold border-b border-slate-300">
                            <tr>
                                <th class="p-2 border-r">مرحلہ</th>
                                <th class="p-2 border-r">تفصیلات</th>
                                <th class="p-2 border-r">پرنٹ شدہ تعداد</th>
                                <th class="p-2 border-r">ڈیمیج</th>
                                <th class="p-2">آپریٹر دستخط</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            <tr>
                                <td class="p-2 font-bold border-r text-right">1. اسٹور اخراج</td>
                                <td class="p-2 border-r text-right">پیپر، کارڈ اور سیاہی BOM کے مطابق</td>
                                <td class="p-2 border-r">ایشو شدہ</td>
                                <td class="p-2 border-r">-</td>
                                <td class="p-2 text-slate-400">______________</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-bold border-r text-right">2. انر پرنٹنگ</td>
                                <td class="p-2 border-r text-right">${book ? book.inner_paper_spec : 'ٹیکسٹ پیپر'}</td>
                                <td class="p-2 border-r font-bold">${wo.inner_printed_sheets || '_______'}</td>
                                <td class="p-2 border-r text-rose-600">${wo.inner_damage_sheets || '___'}</td>
                                <td class="p-2 text-slate-400">______________</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-bold border-r text-right">3. کور پرنٹنگ و لیمینیشن</td>
                                <td class="p-2 border-r text-right">${book ? book.outer_card_spec : 'آرٹ کارڈ'}</td>
                                <td class="p-2 border-r font-bold">${wo.outer_printed_covers || '_______'}</td>
                                <td class="p-2 border-r text-rose-600">${wo.outer_damage_covers || '___'}</td>
                                <td class="p-2 text-slate-400">______________</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-bold border-r text-right">4. بائنڈنگ و کٹنگ</td>
                                <td class="p-2 border-r text-right">انر + آؤٹر اسمبلی و تھری نائف ٹرمنگ</td>
                                <td class="p-2 border-r font-bold">${wo.binding_assembled_qty || '_______'}</td>
                                <td class="p-2 border-r text-rose-600">${wo.binding_damage_qty || '___'}</td>
                                <td class="p-2 text-slate-400">______________</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-bold border-r text-right">5. گودام وصولی</td>
                                <td class="p-2 border-r text-right">فنش گڈز ریک و شیلف داخلہ</td>
                                <td class="p-2 border-r font-bold">${wo.actual_finished_quantity || '_______'}</td>
                                <td class="p-2 border-r text-rose-600">${wo.total_damage_quantity || '___'}</td>
                                <td class="p-2 text-slate-400">______________</td>
                            </tr>
                        </tbody>
                    </table>

                    <p class="text-[10px] text-slate-400 text-center mt-6">
                        یہ جاب کارڈ پیلٹ کے ساتھ منسلک رہے گا جب تک مال بائنڈنگ ہو کر گودام منتقل نہ ہو جائے۔ (Abbasi Publication Network)
                    </p>
                </div>
            </div>
        </div>
    `;
}

// 3. Progress Update Modal
function openProgressUpdateModal(workOrderNo, preselectedStage = 'INNER_PRINT') {
    const s = window.apnStore;
    const wo = s.workOrders.find(o => o.work_order_no === workOrderNo);
    if (!wo) return;

    const modal = document.getElementById('modalContainer');
    modal.innerHTML = `
        <div class="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
            <div class="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200">
                <div class="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div>
                        <h3 class="text-base font-bold text-slate-900">پروڈکشن لاگ اپڈیٹ</h3>
                        <p class="text-xs text-[#4885a6] font-mono font-bold">${wo.work_order_no} - ${wo.book_title}</p>
                    </div>
                    <button onclick="closeModal()" class="text-slate-400 hover:text-slate-600 text-lg font-bold">✕</button>
                </div>

                <form onsubmit="handleUpdateProgress(event, '${wo.work_order_no}')" class="space-y-4 mt-4 text-xs text-right">
                    <div>
                        <label class="block font-bold text-slate-700 mb-1">شعبہ (Stage)</label>
                        <select id="progStage" class="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 font-bold">
                            <option value="INNER_PRINT" ${preselectedStage === 'INNER_PRINT' ? 'selected' : ''}>انر پرنٹنگ (Inner Sheets)</option>
                            <option value="OUTER_PRINT" ${preselectedStage === 'OUTER_PRINT' ? 'selected' : ''}>کور و ٹائٹل کارڈ (Cover / Outer)</option>
                            <option value="BINDING" ${preselectedStage === 'BINDING' ? 'selected' : ''}>بائنڈنگ اسمبلی (Binding Assembly)</option>
                        </select>
                    </div>

                    <div class="grid grid-cols-2 gap-3">
                        <div>
                            <label class="block font-bold text-slate-700 mb-1">تیار شدہ مقدار</label>
                            <input type="number" id="progDoneQty" required min="1" value="500" class="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 font-bold">
                        </div>
                        <div>
                            <label class="block font-bold text-rose-700 mb-1">ڈیمیج / مس پرنٹ</label>
                            <input type="number" id="progDamageQty" min="0" value="0" class="w-full bg-rose-50 border border-rose-300 rounded-lg p-2.5 font-bold text-rose-700">
                        </div>
                    </div>

                    <div>
                        <label class="block font-bold text-slate-700 mb-1">آپریٹر / مشین نمبر</label>
                        <input type="text" id="progOperator" placeholder="مثلاً: احمد (مشین 2)" class="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5">
                    </div>

                    <div>
                        <label class="block font-bold text-slate-700 mb-1">ریمارکس یا خرابی کی وجہ</label>
                        <input type="text" id="progNotes" placeholder="اگر کوئی ڈیمیج ہوا ہے تو وجہ لکھیں..." class="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5">
                    </div>

                    <div class="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
                        <button type="button" onclick="closeModal()" class="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-lg">${s.t('btn_cancel')}</button>
                        <button type="submit" class="px-5 py-2 bg-[#4885a6] hover:bg-[#3b7596] text-white font-bold rounded-lg shadow">${s.t('btn_save')}</button>
                    </div>
                </form>
            </div>
        </div>
    `;
}

async function handleUpdateProgress(e, workOrderNo) {
    e.preventDefault();
    const stage = document.getElementById('progStage').value;
    const done = parseInt(document.getElementById('progDoneQty').value);
    const damage = parseInt(document.getElementById('progDamageQty').value) || 0;
    const op = document.getElementById('progOperator').value;
    const notes = document.getElementById('progNotes').value;

    const data = {
        stage: stage,
        operator: op,
        notes: notes
    };

    if (stage === 'INNER_PRINT') {
        data.inner_printed_sheets = done;
        data.inner_damage_sheets = damage;
    } else if (stage === 'OUTER_PRINT') {
        data.outer_printed_covers = done;
        data.outer_damage_covers = damage;
    } else if (stage === 'BINDING') {
        data.binding_assembled_qty = done;
        data.binding_damage_qty = damage;
    }

    await APN_API.updateProgress(workOrderNo, data);
    closeModal();
    await refreshData();
    renderApp();
}

async function finalizeJobToWarehouse(workOrderNo) {
    if (!confirm(`کیا آپ واقعی جاب ${workOrderNo} کو بائنڈنگ سے مکمل کر کے فنش گڈز گودام منتقل کرنا چاہتے ہیں؟`)) return;
    await APN_API.updateProgress(workOrderNo, { stage: 'FINALIZE' });
    await refreshData();
    renderApp();
    alert(`کامیابی! جاب ${workOrderNo} تیار شدہ کتب کے گودام میں منتقل ہو گئی ہے۔`);
}

// 4. Add Material Modal
function openAddMaterialModal() {
    const s = window.apnStore;
    const modal = document.getElementById('modalContainer');
    modal.innerHTML = `
        <div class="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
            <div class="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200">
                <div class="flex items-center justify-between pb-3 border-b border-slate-100">
                    <h3 class="text-base font-bold text-slate-900">${s.t('btn_add_material')}</h3>
                    <button onclick="closeModal()" class="text-slate-400 hover:text-slate-600 text-lg font-bold">✕</button>
                </div>

                <form onsubmit="handleAddMaterial(event)" class="space-y-4 mt-4 text-xs text-right">
                    <div>
                        <label class="block font-bold text-slate-700 mb-1">خام مال کا نام (Material Name)</label>
                        <input type="text" id="matName" required placeholder="مثلاً: 75 GSM Offset Paper" class="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 font-bold">
                    </div>

                    <div class="grid grid-cols-2 gap-3">
                        <div>
                            <label class="block font-bold text-slate-700 mb-1">شعبہ (Category)</label>
                            <select id="matCategory" class="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 font-semibold">
                                <option value="PAPER_INNER">انر پیپر (Paper Inner)</option>
                                <option value="CARD_OUTER">کور کارڈ (Card Outer)</option>
                                <option value="INK">پرنٹنگ سیاہی (Ink CMYK)</option>
                                <option value="LAMINATION">لیمینیشن رول (Lamination)</option>
                                <option value="GLUE_BINDING">بائنڈنگ گلو و مواد</option>
                            </select>
                        </div>
                        <div>
                            <label class="block font-bold text-slate-700 mb-1">یونٹ (Unit)</label>
                            <select id="matUnit" class="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 font-semibold">
                                <option value="REAMS">ریمز (Reams)</option>
                                <option value="KG">کلوگرام (KG)</option>
                                <option value="ROLLS">رولز (Rolls)</option>
                                <option value="PACKS">پیکس (Packs)</option>
                            </select>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-3">
                        <div>
                            <label class="block font-bold text-slate-700 mb-1">سائز (Size)</label>
                            <input type="text" id="matSize" placeholder="23x36 یا 25x36" class="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5">
                        </div>
                        <div>
                            <label class="block font-bold text-slate-700 mb-1">GSM</label>
                            <input type="number" id="matGsm" placeholder="68, 70, 260" class="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5">
                        </div>
                    </div>

                    <div class="grid grid-cols-3 gap-3">
                        <div>
                            <label class="block font-bold text-slate-700 mb-1">ابتدائی اسٹاک</label>
                            <input type="number" id="matStock" step="0.5" value="10" class="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 font-bold">
                        </div>
                        <div>
                            <label class="block font-bold text-slate-700 mb-1">کم اسٹاک حد</label>
                            <input type="number" id="matMin" step="0.5" value="5" class="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 font-bold">
                        </div>
                        <div>
                            <label class="block font-bold text-slate-700 mb-1">فی یونٹ ریٹ</label>
                            <input type="number" id="matCost" step="10" value="4500" class="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 font-bold">
                        </div>
                    </div>

                    <div class="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
                        <button type="button" onclick="closeModal()" class="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-lg">${s.t('btn_cancel')}</button>
                        <button type="submit" class="px-5 py-2 bg-[#4885a6] hover:bg-[#3b7596] text-white font-bold rounded-lg shadow">${s.t('btn_save')}</button>
                    </div>
                </form>
            </div>
        </div>
    `;
}

async function handleAddMaterial(e) {
    e.preventDefault();
    const item = {
        name: document.getElementById('matName').value,
        category: document.getElementById('matCategory').value,
        unit: document.getElementById('matUnit').value,
        size: document.getElementById('matSize').value,
        gsm: parseInt(document.getElementById('matGsm').value) || null,
        current_stock: parseFloat(document.getElementById('matStock').value) || 0,
        min_reorder_level: parseFloat(document.getElementById('matMin').value) || 5,
        unit_cost: parseFloat(document.getElementById('matCost').value) || 0
    };
    await APN_API.addRawMaterial(item);
    closeModal();
    await refreshData();
    renderApp();
}

function quickStockAdd(materialId) {
    openStockInwardModal(materialId);
}

function openStockInwardModal(materialId = null) {
    const s = window.apnStore;
    const mats = s.rawMaterials;
    const modal = document.getElementById('modalContainer');
    modal.innerHTML = `
        <div class="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
            <div class="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200">
                <div class="flex items-center justify-between pb-3 border-b border-slate-100">
                    <h3 class="text-base font-bold text-slate-900">${s.t('btn_stock_inward')}</h3>
                    <button onclick="closeModal()" class="text-slate-400 hover:text-slate-600 text-lg font-bold">✕</button>
                </div>

                <form onsubmit="handleStockInward(event)" class="space-y-4 mt-4 text-xs text-right">
                    <div>
                        <label class="block font-bold text-slate-700 mb-1">خام مال کا انتخاب</label>
                        <select id="inwardMatSelect" required class="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 font-bold">
                            ${mats.map(m => `
                                <option value="${m.id}" ${m.id === materialId ? 'selected' : ''}>
                                    ${m.name} (موجودہ: ${m.current_stock} ${m.unit})
                                </option>
                            `).join('')}
                        </select>
                    </div>

                    <div class="grid grid-cols-2 gap-3">
                        <div>
                            <label class="block font-bold text-slate-700 mb-1">خریداری تعداد (Quantity)</label>
                            <input type="number" id="inwardQty" required min="0.1" step="0.5" value="20" class="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 font-extrabold text-emerald-700">
                        </div>
                        <div>
                            <label class="block font-bold text-slate-700 mb-1">انوائس / PO نمبر</label>
                            <input type="text" id="inwardRef" placeholder="PO-2026-001" class="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 font-mono">
                        </div>
                    </div>

                    <div class="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
                        <button type="button" onclick="closeModal()" class="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-lg">${s.t('btn_cancel')}</button>
                        <button type="submit" class="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg shadow">اسٹاک میں شامل کریں ✓</button>
                    </div>
                </form>
            </div>
        </div>
    `;
}

async function handleStockInward(e) {
    e.preventDefault();
    const matId = parseInt(document.getElementById('inwardMatSelect').value);
    const qty = parseFloat(document.getElementById('inwardQty').value);
    const ref = document.getElementById('inwardRef').value;

    await APN_API.addMaterialTransaction({
        material_id: matId,
        transaction_type: 'PURCHASE_IN',
        quantity: qty,
        reference_no: ref,
        notes: 'پرچیز انورڈ خریداری واؤچر'
    });

    closeModal();
    await refreshData();
    renderApp();
}

// 5. Add Book Modal
function openAddBookModal() {
    const s = window.apnStore;
    const modal = document.getElementById('modalContainer');
    modal.innerHTML = `
        <div class="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
            <div class="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200">
                <div class="flex items-center justify-between pb-3 border-b border-slate-100">
                    <h3 class="text-base font-bold text-slate-900">${s.t('btn_add_book')}</h3>
                    <button onclick="closeModal()" class="text-slate-400 hover:text-slate-600 text-lg font-bold">✕</button>
                </div>

                <form onsubmit="handleAddBook(event)" class="space-y-4 mt-4 text-xs text-right">
                    <div class="grid grid-cols-2 gap-3">
                        <div>
                            <label class="block font-bold text-slate-700 mb-1">آرٹیکل کوڈ (Book SKU)</label>
                            <input type="text" id="bkCode" required placeholder="APN-BK-0105" class="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 font-mono font-bold">
                        </div>
                        <div>
                            <label class="block font-bold text-slate-700 mb-1">زبان</label>
                            <select id="bkLang" class="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 font-semibold">
                                <option value="Urdu">اردو (Urdu)</option>
                                <option value="English">English</option>
                                <option value="Arabic">عربی (Arabic)</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label class="block font-bold text-slate-700 mb-1">کتاب کا مکمل نام (Title)</label>
                        <input type="text" id="bkTitle" required placeholder="مثلاً: مطالعہ پاکستان - جماعت نہم" class="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 font-bold">
                    </div>

                    <div class="grid grid-cols-2 gap-3">
                        <div>
                            <label class="block font-bold text-slate-700 mb-1">صفحات کی تعداد</label>
                            <input type="number" id="bkPages" required min="16" step="16" value="128" oninput="updateFormsPreview(this.value)" class="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 font-bold">
                        </div>
                        <div>
                            <label class="block font-bold text-slate-700 mb-1">فارمے (خودکار حساب)</label>
                            <input type="text" id="bkFormsPreview" disabled value="8 فارمے" class="w-full bg-blue-50 border border-blue-300 text-blue-800 rounded-lg p-2.5 font-extrabold text-center">
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-3">
                        <div>
                            <label class="block font-bold text-slate-700 mb-1">انر پیپر تفصیل</label>
                            <input type="text" id="bkInner" placeholder="68 GSM Offset (23x36)" class="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5">
                        </div>
                        <div>
                            <label class="block font-bold text-slate-700 mb-1">کور کارڈ تفصیل</label>
                            <input type="text" id="bkOuter" placeholder="260 GSM Art Card Matt" class="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5">
                        </div>
                    </div>

                    <div>
                        <label class="block font-bold text-slate-700 mb-1">تخمینہ لاگت فی کاپی (PKR)</label>
                        <input type="number" id="bkCost" value="95" class="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 font-bold">
                    </div>

                    <div class="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
                        <button type="button" onclick="closeModal()" class="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-lg">${s.t('btn_cancel')}</button>
                        <button type="submit" class="px-5 py-2 bg-[#4885a6] hover:bg-[#3b7596] text-white font-bold rounded-lg shadow">${s.t('btn_save')}</button>
                    </div>
                </form>
            </div>
        </div>
    `;
}

function updateFormsPreview(pages) {
    const p = parseInt(pages) || 0;
    const forms = (p / 16).toFixed(1);
    const el = document.getElementById('bkFormsPreview');
    if (el) el.value = `${forms} فارمے`;
}

async function handleAddBook(e) {
    e.preventDefault();
    const book = {
        article_id: document.getElementById('bkCode').value.trim(),
        title: document.getElementById('bkTitle').value.trim(),
        language: document.getElementById('bkLang').value,
        page_count: parseInt(document.getElementById('bkPages').value),
        inner_paper_spec: document.getElementById('bkInner').value,
        outer_card_spec: document.getElementById('bkOuter').value,
        standard_cost_per_copy: parseFloat(document.getElementById('bkCost').value) || 0
    };

    await APN_API.addBook(book);
    closeModal();
    await refreshData();
    renderApp();
}

function openRelocateModal(fgId, currRack, currShelf) {
    const modal = document.getElementById('modalContainer');
    modal.innerHTML = `
        <div class="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
            <div class="bg-white rounded-2xl max-w-xs w-full p-6 shadow-2xl border border-slate-200 text-right">
                <h3 class="text-base font-bold text-slate-900 pb-2 border-b">ریک و شیلف تبدیل کریں</h3>
                <div class="space-y-3 mt-4 text-xs">
                    <div>
                        <label class="block font-bold text-slate-700 mb-1">نیا ریک نمبر (Rack)</label>
                        <input type="text" id="newRack" value="${currRack}" class="w-full bg-slate-50 border border-slate-300 rounded-lg p-2 font-bold">
                    </div>
                    <div>
                        <label class="block font-bold text-slate-700 mb-1">نیا شیلف نمبر (Shelf)</label>
                        <input type="text" id="newShelf" value="${currShelf}" class="w-full bg-slate-50 border border-slate-300 rounded-lg p-2 font-bold">
                    </div>
                </div>
                <div class="flex justify-end gap-2 mt-4 pt-3 border-t">
                    <button onclick="closeModal()" class="px-3 py-1.5 bg-slate-100 rounded text-xs font-bold">منسوخ</button>
                    <button onclick="handleRelocate(${fgId})" class="px-4 py-1.5 bg-[#4885a6] text-white rounded text-xs font-bold">محفوظ کریں</button>
                </div>
            </div>
        </div>
    `;
}

async function handleRelocate(fgId) {
    const rack = document.getElementById('newRack').value;
    const shelf = document.getElementById('newShelf').value;

    const list = JSON.parse(localStorage.getItem('apn_finished_goods') || '[]');
    const item = list.find(i => i.id === fgId);
    if (item) {
        item.rack_location = rack;
        item.shelf_location = shelf;
        localStorage.setItem('apn_finished_goods', JSON.stringify(list));
    }
    closeModal();
    await refreshData();
    renderApp();
}

function closeModal() {
    const modal = document.getElementById('modalContainer');
    if (modal) modal.innerHTML = '';
}

// Global Exports
window.switchTab = switchTab;
window.toggleSidebar = toggleSidebar;
window.handleReload = handleReload;
window.toggleLanguage = toggleLanguage;
window.showLowStockModal = showLowStockModal;
window.downloadBackup = downloadBackup;
window.resetDemoData = resetDemoData;
window.openNewWorkOrderModal = openNewWorkOrderModal;
window.handleCreateWorkOrder = handleCreateWorkOrder;
window.openJobCardPrintModal = openJobCardPrintModal;
window.openProgressUpdateModal = openProgressUpdateModal;
window.handleUpdateProgress = handleUpdateProgress;
window.finalizeJobToWarehouse = finalizeJobToWarehouse;
window.openAddMaterialModal = openAddMaterialModal;
window.handleAddMaterial = handleAddMaterial;
window.quickStockAdd = quickStockAdd;
window.openStockInwardModal = openStockInwardModal;
window.handleStockInward = handleStockInward;
window.openAddBookModal = openAddBookModal;
window.handleAddBook = handleAddBook;
window.updateFormsPreview = updateFormsPreview;
window.openRelocateModal = openRelocateModal;
window.handleRelocate = handleRelocate;
window.closeModal = closeModal;
window.renderApp = renderApp;

document.addEventListener('DOMContentLoaded', initApp);
