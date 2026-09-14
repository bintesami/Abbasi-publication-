// UI Renderer and Application Controller
// Abbasi Publication Network (APN) - Permanent Left Sidebar & Full Bilingual Urdu/English

// ==================== ENTERPRISE SVG VECTOR ICONS REGISTRY ====================
const APN_ICONS = {
    // 1. Raw Materials: 3D Box & Paper Pallet Stacks
    raw_materials: `<svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/><path d="m7.5 4.5 9 5"/></svg>`,
    
    // 2. Book Master & BOM: Open Book with Ribbon & Spine
    books: `<svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 2v20"/><path d="M10 6h6"/><path d="M10 10h6"/><path d="M10 14h4"/></svg>`,
    
    // 3. Work Orders: Clipboard with Checklist & Barcode
    work_orders: `<svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 2v4h6V2"/><path d="m9 11 2 2 4-4"/><path d="M8 17h8"/><path d="M8 14h2"/></svg>`,
    
    // 4. Inner Printing: Modern Offset Press / Sheet Feeder
    printing: `<svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"/><rect x="6" y="14" width="12" height="8" rx="1"/><circle cx="18" cy="12" r="1" fill="currentColor"/></svg>`,
    
    // 5. Outer Cover & Lamination: Finish Swatches & Gloss Layer
    outer: `<svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M3 5h4"/><path d="M19 17v4"/><path d="M17 19h4"/></svg>`,
    
    // 6. Binding & Assembly: Precision Cutter Shears & Book Spine
    binding: `<svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12"/><path d="M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/></svg>`,
    
    // 7. Finished Goods Warehouse: Facility Building & Storage Bays
    warehouse: `<svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21V9.5a1.5 1.5 0 0 1 .65-1.24l7.5-5a1.5 1.5 0 0 1 1.7 0l7.5 5A1.5 1.5 0 0 1 21 9.5V21"/><path d="M3 21h18"/><path d="M7 10h2v4H7z"/><path d="M15 10h2v4h-2z"/><path d="M10 21v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"/></svg>`,
    
    // 8. Damage & Wastage: Safety Shield with Warning
    damage: `<svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>`,
    
    // 9. Admin & Reports: Analytical Trends & Control Hub
    admin: `<svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/><circle cx="19" cy="9" r="2" fill="currentColor"/></svg>`,

    // Sidebar Small Icons (w-4 h-4)
    nav_dashboard: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>`,
    nav_raw_materials: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>`,
    nav_books: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 2v20"/></svg>`,
    nav_work_orders: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 2v4h6V2"/><path d="m9 11 2 2 4-4"/></svg>`,
    nav_printing: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"/><rect x="6" y="14" width="12" height="8" rx="1"/></svg>`,
    nav_outer: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>`,
    nav_binding: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12"/><path d="M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/></svg>`,
    nav_warehouse: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21V9.5a1.5 1.5 0 0 1 .65-1.24l7.5-5a1.5 1.5 0 0 1 1.7 0l7.5 5A1.5 1.5 0 0 1 21 9.5V21"/><path d="M3 21h18"/></svg>`,
    nav_damage: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>`,
    nav_admin: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>`,

    // Top 4 Color Action Buttons
    top_chart: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>`,
    top_plus: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14m-7-7h14"/></svg>`,
    top_jobs: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 2v4h6V2"/><path d="M8 12h8"/><path d="M8 16h5"/></svg>`,
    top_bell: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>`,

    // KPI Cards Icons
    kpi_books: `<svg class="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 2v20"/><path d="M10 6h6"/><path d="M10 10h6"/></svg>`,
    kpi_jobs: `<svg class="w-5 h-5 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
    kpi_alerts: `<svg class="w-5 h-5 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
    kpi_loss: `<svg class="w-5 h-5 text-rose-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></svg>`
};

async function initApp() {
    APN_API.seedLocalMockData();
    await APN_API.checkBackend();
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

function setLang(langCode) {
    window.apnStore.setLanguage(langCode);
}

function renderApp() {
    const s = window.apnStore;
    const root = document.getElementById('appRoot');
    if (!root) return;

    // Apply language classes dynamically
    document.body.className = s.lang === 'ur' ? 'min-h-screen bg-[#f4f7f9] antialiased lang-ur' : 'min-h-screen bg-[#f4f7f9] antialiased lang-en';
    document.documentElement.lang = s.lang;

    const isCollapsed = s.sidebarCollapsed;
    const isUrdu = s.lang === 'ur';

    root.innerHTML = `
        <!-- Top Header Bar (#4885a6 steel blue) -->
        <header class="bg-[#4885a6] text-white shadow-sm sticky top-0 z-50 h-[52px] flex items-center justify-between px-4 select-none">
            <!-- Left: Brand Title & Language Toggle Switch -->
            <div class="flex items-center gap-3">
                <div class="flex items-center gap-2">
                    ${isUrdu ? `
                        <span class="calligraphy-title text-xl font-bold tracking-wide text-white drop-shadow-xs">
                            عباسی پبلیکیشن نیٹ ورک
                        </span>
                    ` : `
                        <span class="font-extrabold tracking-wider text-base uppercase text-white font-sans drop-shadow-xs">
                            ABBASI PUBLICATION NETWORK
                        </span>
                    `}
                </div>

                <!-- Direct English / Urdu Switcher right next to title -->
                <div class="flex items-center bg-[#366883] p-0.5 rounded-lg border border-white/20 text-xs font-bold shadow-inner">
                    <button onclick="setLang('ur')" class="px-2.5 py-0.5 rounded-md transition ${isUrdu ? 'bg-white text-[#1b3240] shadow-xs' : 'text-blue-100 hover:text-white'}">
                        اردو
                    </button>
                    <button onclick="setLang('en')" class="px-2.5 py-0.5 rounded-md transition ${!isUrdu ? 'bg-white text-[#1b3240] shadow-xs' : 'text-blue-100 hover:text-white'}">
                        English
                    </button>
                </div>
                
                <!-- Square Refresh Button -->
                <button onclick="handleReload()" title="${isUrdu ? 'ریفریش ڈیٹا' : 'Reload Data'}" class="w-8 h-8 rounded bg-[#5c9bbd] hover:bg-[#3d7a9c] flex items-center justify-center text-white transition text-sm shadow-xs">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                    </svg>
                </button>
            </div>

            <!-- Right: Status & User Avatar -->
            <div class="flex items-center gap-3">
                <!-- Status Badge -->
                <div class="hidden sm:flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${s.isOnline ? 'bg-emerald-600/30 text-emerald-100 border border-emerald-300/40' : 'bg-amber-600/30 text-amber-100 border border-amber-300/40'}">
                    <span class="w-2 h-2 rounded-full ${s.isOnline ? 'bg-emerald-300 animate-ping' : 'bg-amber-300'}"></span>
                    <span>${s.isOnline ? s.t('backend_connected') : s.t('backend_offline')}</span>
                </div>

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
        <div class="flex min-h-[calc(100vh-52px)]">
            <!-- Left Sidebar (Permanent Left Position) -->
            <aside class="${isCollapsed ? 'w-16' : 'w-60'} bg-white border-r border-slate-200 flex flex-col justify-between transition-all duration-200 shrink-0 select-none shadow-xs">
                <div>
                    <!-- Top 4 Color Buttons row matching user screenshot -->
                    <div class="grid grid-cols-4 gap-0.5 p-1 bg-slate-100 border-b border-slate-200">
                        <button onclick="switchTab('raw_materials')" title="${s.t('btn_tt_stats')}" class="h-8 top-btn-green text-white flex items-center justify-center rounded-xs transition shadow-xs">
                            ${APN_ICONS.top_chart}
                        </button>
                        <button onclick="openAddBookModal()" title="${s.t('btn_tt_new_book')}" class="h-8 top-btn-blue text-white flex items-center justify-center rounded-xs transition shadow-xs">
                            ${APN_ICONS.top_plus}
                        </button>
                        <button onclick="switchTab('work_orders')" title="${s.t('btn_tt_jobs')}" class="h-8 top-btn-orange text-white flex items-center justify-center rounded-xs transition shadow-xs">
                            ${APN_ICONS.top_jobs}
                        </button>
                        <button onclick="showLowStockModal()" title="${s.t('btn_tt_alerts')}" class="h-8 top-btn-red text-white flex items-center justify-center rounded-xs transition shadow-xs">
                            ${APN_ICONS.top_bell}
                        </button>
                    </div>

                    <!-- Sidebar Navigation List -->
                    <nav class="p-2 space-y-1">
                        ${renderSidebarLink('dashboard', 'nav_dashboard', s.t('nav_dashboard'), false)}
                        ${renderSidebarLink('raw_materials', 'nav_raw_materials', s.t('nav_raw_materials'), true)}
                        ${renderSidebarLink('books', 'nav_books', s.t('nav_books'), true)}
                        ${renderSidebarLink('work_orders', 'nav_work_orders', s.t('nav_work_orders'), true)}
                        ${renderSidebarLink('printing', 'nav_printing', s.t('nav_printing'), true)}
                        ${renderSidebarLink('outer', 'nav_outer', s.t('nav_outer'), true)}
                        ${renderSidebarLink('binding', 'nav_binding', s.t('nav_binding'), true)}
                        ${renderSidebarLink('warehouse', 'nav_warehouse', s.t('nav_warehouse'), true)}
                        ${renderSidebarLink('damage', 'nav_damage', s.t('nav_damage'), true)}
                        ${renderSidebarLink('admin', 'nav_admin', s.t('nav_reports'), false)}
                    </nav>
                </div>

                <!-- Bottom Collapse Arrow Button -->
                <div class="p-2 border-t border-slate-200 text-center">
                    <button onclick="toggleSidebar()" class="w-8 h-8 mx-auto rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center text-xs font-bold transition">
                        ${isCollapsed ? '»' : '«'}
                    </button>
                </div>
            </aside>

            <!-- Main Content Area (on the Right) -->
            <main class="flex-1 bg-[#f4f7f9] p-4 sm:p-6 overflow-y-auto">
                <!-- Tab Header -->
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

function renderSidebarLink(tabId, iconKey, label, hasArrow) {
    const s = window.apnStore;
    const isActive = s.activeTab === tabId;
    const isCollapsed = s.sidebarCollapsed;
    const iconSvg = APN_ICONS[iconKey] || iconKey;

    return `
        <div onclick="switchTab('${tabId}')" class="sidebar-link ${isActive ? 'active' : ''}" title="${label}">
            <div class="flex items-center gap-2.5">
                <span class="w-4 h-4 shrink-0 flex items-center justify-center ${isActive ? 'text-[#0288d1]' : 'text-slate-500'}">${iconSvg}</span>
                ${!isCollapsed ? `<span class="text-xs font-semibold">${label}</span>` : ''}
            </div>
            ${!isCollapsed && hasArrow ? `<span class="text-slate-400 text-xs font-bold">›</span>` : ''}
        </div>
    `;
}

function getTabTitle(tabId) {
    const s = window.apnStore;
    switch (tabId) {
        case 'raw_materials': return s.t('nav_raw_materials');
        case 'books': return s.t('nav_books');
        case 'work_orders': return s.t('nav_work_orders');
        case 'printing': return s.t('nav_printing');
        case 'outer': return s.t('nav_outer');
        case 'binding': return s.t('nav_binding');
        case 'warehouse': return s.t('nav_warehouse');
        case 'damage': return s.t('nav_damage');
        case 'admin': return s.t('nav_reports');
        default: return s.t('nav_dashboard');
    }
}

// ==================== DASHBOARD DEPARTMENT CARDS GRID ====================

function renderDepartmentGrid() {
    const s = window.apnStore;
    const m = s.dashboardMetrics;
    const isUrdu = s.lang === 'ur';

    const departments = [
        { 
            id: 'raw_materials', 
            icon: APN_ICONS.raw_materials, 
            accent: '#0284c7',
            wrapperClass: 'bg-gradient-to-b from-sky-50 to-sky-100/70 text-sky-600 border border-sky-200/80',
            badgeClass: 'bg-sky-50 text-sky-700 border border-sky-200/70',
            title: s.t('dept_raw_title'), 
            sub: s.t('dept_raw_sub'), 
            count: `${s.rawMaterials.length} ${isUrdu ? 'آئٹمز' : 'Items'}` 
        },
        { 
            id: 'books', 
            icon: APN_ICONS.books, 
            accent: '#7c3aed',
            wrapperClass: 'bg-gradient-to-b from-violet-50 to-violet-100/70 text-violet-600 border border-violet-200/80',
            badgeClass: 'bg-violet-50 text-violet-700 border border-violet-200/70',
            title: s.t('dept_book_title'), 
            sub: s.t('dept_book_sub'), 
            count: `${s.books.length} ${s.t('kpi_books_unit')}` 
        },
        { 
            id: 'work_orders', 
            icon: APN_ICONS.work_orders, 
            accent: '#d97706',
            wrapperClass: 'bg-gradient-to-b from-amber-50 to-amber-100/70 text-amber-600 border border-amber-200/80',
            badgeClass: 'bg-amber-50 text-amber-700 border border-amber-200/70',
            title: s.t('dept_wo_title'), 
            sub: s.t('dept_wo_sub'), 
            count: `${m.active_jobs_count || 0} ${isUrdu ? 'فعال' : 'Active'}` 
        },
        { 
            id: 'printing', 
            icon: APN_ICONS.printing, 
            accent: '#2563eb',
            wrapperClass: 'bg-gradient-to-b from-blue-50 to-blue-100/70 text-blue-600 border border-blue-200/80',
            badgeClass: 'bg-blue-50 text-blue-700 border border-blue-200/70',
            title: s.t('dept_inner_title'), 
            sub: s.t('dept_inner_sub'), 
            count: isUrdu ? 'مشین روم 1' : 'Room 1' 
        },
        { 
            id: 'outer', 
            icon: APN_ICONS.outer, 
            accent: '#db2777',
            wrapperClass: 'bg-gradient-to-b from-pink-50 to-pink-100/70 text-pink-600 border border-pink-200/80',
            badgeClass: 'bg-pink-50 text-pink-700 border border-pink-200/70',
            title: s.t('dept_outer_title'), 
            sub: s.t('dept_outer_sub'), 
            count: isUrdu ? 'مشین روم 2' : 'Room 2' 
        },
        { 
            id: 'binding', 
            icon: APN_ICONS.binding, 
            accent: '#0d9488',
            wrapperClass: 'bg-gradient-to-b from-teal-50 to-teal-100/70 text-teal-600 border border-teal-200/80',
            badgeClass: 'bg-teal-50 text-teal-700 border border-teal-200/70',
            title: s.t('dept_binding_title'), 
            sub: s.t('dept_binding_sub'), 
            count: isUrdu ? 'بائنڈنگ فلور' : 'Floor 1' 
        },
        { 
            id: 'warehouse', 
            icon: APN_ICONS.warehouse, 
            accent: '#16a34a',
            wrapperClass: 'bg-gradient-to-b from-emerald-50 to-emerald-100/70 text-emerald-600 border border-emerald-200/80',
            badgeClass: 'bg-emerald-50 text-emerald-700 border border-emerald-200/70',
            title: s.t('dept_warehouse_title'), 
            sub: s.t('dept_warehouse_sub'), 
            count: `${(m.total_finished_books || 0).toLocaleString()} ${s.t('kpi_books_unit')}` 
        },
        { 
            id: 'damage', 
            icon: APN_ICONS.damage, 
            accent: '#e11d48',
            wrapperClass: 'bg-gradient-to-b from-rose-50 to-rose-100/70 text-rose-600 border border-rose-200/80',
            badgeClass: 'bg-rose-50 text-rose-700 border border-rose-200/70',
            title: s.t('dept_damage_title'), 
            sub: s.t('dept_damage_sub'), 
            count: `${m.total_damage_items || 0} ${isUrdu ? 'ویسٹیج' : 'Loss'}` 
        },
        { 
            id: 'admin', 
            icon: APN_ICONS.admin, 
            accent: '#475569',
            wrapperClass: 'bg-gradient-to-b from-slate-100 to-slate-200/70 text-slate-700 border border-slate-300/80',
            badgeClass: 'bg-slate-100 text-slate-700 border border-slate-300/70',
            title: s.t('dept_admin_title'), 
            sub: s.t('dept_admin_sub'), 
            count: isUrdu ? 'کنٹرول' : 'Controls' 
        }
    ];

    return `
        <!-- Top 4 KPI Metrics Cards -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            <div class="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between">
                <div>
                    <p class="text-[11px] font-bold text-slate-500 uppercase">${s.t('kpi_total_finished')}</p>
                    <h4 class="text-xl font-extrabold text-slate-900 mt-0.5">${(m.total_finished_books || 0).toLocaleString()} <span class="text-xs font-normal text-slate-500">${s.t('kpi_books_unit')}</span></h4>
                </div>
                <div class="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-200/80 flex items-center justify-center shadow-xs">
                    ${APN_ICONS.kpi_books}
                </div>
            </div>

            <div class="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between">
                <div>
                    <p class="text-[11px] font-bold text-slate-500 uppercase">${s.t('kpi_active_jobs')}</p>
                    <h4 class="text-xl font-extrabold text-slate-900 mt-0.5">${m.active_jobs_count || 0} <span class="text-xs font-normal text-slate-500">${s.t('kpi_jobs_unit')}</span></h4>
                </div>
                <div class="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 border border-amber-200/80 flex items-center justify-center shadow-xs">
                    ${APN_ICONS.kpi_jobs}
                </div>
            </div>

            <div class="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between">
                <div>
                    <p class="text-[11px] font-bold text-slate-500 uppercase">${s.t('kpi_low_stock')}</p>
                    <h4 class="text-xl font-extrabold ${(m.low_stock_count || 0) > 0 ? 'text-red-600' : 'text-slate-900'} mt-0.5">${m.low_stock_count || 0} <span class="text-xs font-normal text-slate-500">${s.t('kpi_alerts_unit')}</span></h4>
                </div>
                <div class="w-10 h-10 rounded-xl bg-red-50 text-red-600 border border-red-200/80 flex items-center justify-center shadow-xs ${(m.low_stock_count || 0) > 0 ? 'badge-pulse-red' : ''}">
                    ${APN_ICONS.kpi_alerts}
                </div>
            </div>

            <div class="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between">
                <div>
                    <p class="text-[11px] font-bold text-slate-500 uppercase">${s.t('kpi_damage_loss')}</p>
                    <h4 class="text-xl font-extrabold text-slate-900 mt-0.5">${(m.total_financial_loss || 0).toLocaleString()} <span class="text-xs font-normal text-slate-500">${s.t('kpi_pkr')}</span></h4>
                </div>
                <div class="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 border border-rose-200/80 flex items-center justify-center shadow-xs">
                    ${APN_ICONS.kpi_loss}
                </div>
            </div>
        </div>

        <!-- 9 Department Cards Grid (Clean Responsive Layout) -->
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            ${departments.map(d => `
                <div onclick="switchTab('${d.id}')" class="dept-card group text-center" style="--card-accent: ${d.accent};">
                    <div class="dept-card-icon-wrapper ${d.wrapperClass}">
                        ${d.icon}
                    </div>
                    <div class="dept-card-title">${d.title}</div>
                    <div class="dept-card-subtitle">${d.sub}</div>
                    <div class="mt-3 pt-2 border-t border-slate-100 flex justify-between items-center text-[10px] text-slate-400">
                        <span class="font-medium">${s.t('th_status')}</span>
                        <span class="font-bold px-2 py-0.5 rounded-md text-[11px] ${d.badgeClass}">${d.count}</span>
                    </div>
                </div>
            `).join('')}
        </div>

        <!-- Active Production Jobs Tracker -->
        <div class="bg-white rounded-xl border border-slate-200 p-5 shadow-xs mb-6">
            <div class="flex items-center justify-between pb-3 border-b border-slate-100">
                <div>
                    <h3 class="text-sm font-bold text-slate-900">${s.t('pipeline_title')}</h3>
                    <p class="text-xs text-slate-500">${s.t('pipeline_desc')}</p>
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
                                        ${s.t('btn_print_job')}
                                    </button>
                                    <button onclick="openProgressUpdateModal('${wo.work_order_no}')" class="px-2.5 py-1 text-xs font-bold bg-blue-50 text-blue-700 hover:bg-blue-100 rounded border border-blue-200">
                                        ${s.t('btn_update_progress')}
                                    </button>
                                </div>
                            </div>

                            <!-- 4 Stages Progress Bar -->
                            <div class="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                                <div class="p-2 rounded bg-slate-50 border border-slate-200">
                                    <span class="text-[11px] font-bold text-slate-600 block">${s.t('stage_store_out')}</span>
                                    <span class="text-[11px] text-emerald-700 font-bold">${s.t('stage_material_done')}</span>
                                </div>
                                <div class="p-2 rounded bg-slate-50 border border-slate-200">
                                    <div class="flex justify-between text-[11px] font-bold">
                                        <span>${s.t('stage_inner_print')}</span>
                                        <span>${innerPct}%</span>
                                    </div>
                                    <div class="w-full bg-slate-200 h-1.5 rounded-full mt-1 overflow-hidden">
                                        <div class="bg-blue-600 h-full" style="width: ${innerPct}%"></div>
                                    </div>
                                </div>
                                <div class="p-2 rounded bg-slate-50 border border-slate-200">
                                    <div class="flex justify-between text-[11px] font-bold">
                                        <span>${s.t('stage_outer_print')}</span>
                                        <span>${outerPct}%</span>
                                    </div>
                                    <div class="w-full bg-slate-200 h-1.5 rounded-full mt-1 overflow-hidden">
                                        <div class="bg-purple-600 h-full" style="width: ${outerPct}%"></div>
                                    </div>
                                </div>
                                <div class="p-2 rounded bg-slate-50 border border-slate-200">
                                    <div class="flex justify-between text-[11px] font-bold">
                                        <span>${s.t('stage_binding')}</span>
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
    const isUrdu = s.lang === 'ur';

    return `
        <div class="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 border border-sky-200/80 flex items-center justify-center shrink-0 shadow-xs">
                        ${APN_ICONS.raw_materials}
                    </div>
                    <div>
                        <h3 class="text-base font-bold text-slate-900">${s.t('dept_raw_title')}</h3>
                        <p class="text-xs text-slate-500">${s.t('dept_raw_sub')}</p>
                    </div>
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
                        <tr class="bg-slate-50 text-slate-600 border-b border-slate-200 ${isUrdu ? 'text-right' : 'text-left'}">
                            <th class="py-3 px-3">${s.t('th_item_name')}</th>
                            <th class="py-3 px-3">${s.t('th_category')}</th>
                            <th class="py-3 px-3">${s.t('th_size_gsm')}</th>
                            <th class="py-3 px-3">${s.t('th_current_stock')}</th>
                            <th class="py-3 px-3">${s.t('th_min_level')}</th>
                            <th class="py-3 px-3">${s.t('th_unit_rate')}</th>
                            <th class="py-3 px-3 text-center">${s.t('th_status')}</th>
                            <th class="py-3 px-3 text-center">${s.t('th_action')}</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100">
                        ${mats.map(m => {
                            const isLow = m.current_stock <= m.min_reorder_level;
                            return `
                                <tr class="hover:bg-slate-50 transition ${isLow ? 'bg-red-50/40' : ''} ${isUrdu ? 'text-right' : 'text-left'}">
                                    <td class="py-3 px-3 font-bold text-slate-800">${m.name}</td>
                                    <td class="py-3 px-3"><span class="px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">${m.category}</span></td>
                                    <td class="py-3 px-3 text-slate-600">${m.size || '-'} ${m.gsm ? `(${m.gsm} GSM)` : ''}</td>
                                    <td class="py-3 px-3 font-extrabold ${isLow ? 'text-red-600 text-sm' : 'text-slate-900'}">${m.current_stock} <span class="font-normal text-slate-500">${m.unit}</span></td>
                                    <td class="py-3 px-3 text-slate-500">${m.min_reorder_level} ${m.unit}</td>
                                    <td class="py-3 px-3 font-semibold text-slate-700">${m.unit_cost.toLocaleString()} PKR</td>
                                    <td class="py-3 px-3 text-center">
                                        ${isLow ? `
                                            <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-red-100 text-red-700 border border-red-300">
                                                <span>🚨</span> ${isUrdu ? 'کم اسٹاک' : 'Low Stock'}
                                            </span>
                                        ` : `
                                            <span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700">
                                                ${isUrdu ? '✓ تسلی بخش' : '✓ Normal'}
                                            </span>
                                        `}
                                    </td>
                                    <td class="py-3 px-3 text-center">
                                        <button onclick="quickStockAdd(${m.id})" class="px-2.5 py-1 text-xs font-bold text-blue-700 hover:bg-blue-50 rounded border border-blue-200">
                                            ${s.t('btn_add_purchase')}
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
    const isUrdu = s.lang === 'ur';

    return `
        <div class="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 border border-violet-200/80 flex items-center justify-center shrink-0 shadow-xs">
                        ${APN_ICONS.books}
                    </div>
                    <div>
                        <h3 class="text-base font-bold text-slate-900">${s.t('dept_book_title')}</h3>
                        <p class="text-xs text-slate-500">${s.t('dept_book_sub')}</p>
                    </div>
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
                                <p class="text-xs text-slate-500 font-medium">${b.subject || ''} • ${isUrdu ? 'زبان' : 'Language'}: ${b.language}</p>
                            </div>
                            <div class="w-9 h-9 rounded-lg bg-violet-50 text-violet-600 border border-violet-200/80 flex items-center justify-center shrink-0">
                                ${APN_ICONS.books}
                            </div>
                        </div>

                        <div class="grid grid-cols-3 gap-2 bg-slate-50 p-2.5 rounded-lg mt-3 text-xs text-center border border-slate-100">
                            <div>
                                <span class="text-slate-500 block text-[11px]">${isUrdu ? 'کل صفحات' : 'Pages'}</span>
                                <b class="text-slate-800 text-sm">${b.page_count}</b>
                            </div>
                            <div>
                                <span class="text-slate-500 block text-[11px]">${isUrdu ? 'فارمے' : 'Forms'}</span>
                                <b class="text-blue-700 text-sm">${b.forms_count}</b>
                            </div>
                            <div>
                                <span class="text-slate-500 block text-[11px]">${isUrdu ? 'تخمینہ لاگت' : 'Est. Cost'}</span>
                                <b class="text-emerald-700 text-sm">${b.standard_cost_per_copy} PKR</b>
                            </div>
                        </div>

                        <div class="mt-3 text-xs text-slate-600 space-y-1">
                            <p><b>${isUrdu ? 'انر پیپر:' : 'Inner Paper:'}</b> ${b.inner_paper_spec || 'Offset Paper'}</p>
                            <p><b>${isUrdu ? 'کور کارڈ:' : 'Outer Card:'}</b> ${b.outer_card_spec || 'Art Card'}</p>
                        </div>

                        <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                            <span class="text-[11px] text-slate-400">BOM Active</span>
                            <button onclick="openNewWorkOrderModal('${b.article_id}')" class="px-3 py-1 bg-[#4885a6] hover:bg-[#3b7596] text-white text-xs font-bold rounded-lg transition shadow-xs">
                                ${s.t('btn_issue_wo')}
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
    const isUrdu = s.lang === 'ur';

    return `
        <div class="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 border border-amber-200/80 flex items-center justify-center shrink-0 shadow-xs">
                        ${APN_ICONS.work_orders}
                    </div>
                    <div>
                        <h3 class="text-base font-bold text-slate-900">${s.t('dept_wo_title')}</h3>
                        <p class="text-xs text-slate-500">${s.t('dept_wo_sub')}</p>
                    </div>
                </div>
                <button onclick="openNewWorkOrderModal()" class="px-3.5 py-1.5 bg-[#4885a6] hover:bg-[#3b7596] text-white text-xs font-bold rounded-lg shadow-xs transition">
                    ${s.t('btn_new_job')}
                </button>
            </div>

            <div class="overflow-x-auto mt-4">
                <table class="w-full text-xs">
                    <thead>
                        <tr class="bg-slate-50 text-slate-600 border-b border-slate-200 ${isUrdu ? 'text-right' : 'text-left'}">
                            <th class="py-3 px-3">${s.t('th_wo_code')}</th>
                            <th class="py-3 px-3">${s.t('th_book_name')}</th>
                            <th class="py-3 px-3">${s.t('th_target_qty')}</th>
                            <th class="py-3 px-3 text-center">${s.t('th_inner_col')}</th>
                            <th class="py-3 px-3 text-center">${s.t('th_outer_col')}</th>
                            <th class="py-3 px-3 text-center">${s.t('th_binding_col')}</th>
                            <th class="py-3 px-3 text-center">${s.t('th_overall_status')}</th>
                            <th class="py-3 px-3 text-center">${s.t('th_action')}</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100">
                        ${orders.map(o => `
                            <tr class="hover:bg-slate-50 transition ${isUrdu ? 'text-right' : 'text-left'}">
                                <td class="py-3 px-3 font-mono font-bold text-blue-700">${o.work_order_no}</td>
                                <td class="py-3 px-3 font-bold text-slate-800">${o.book_title || o.book_article_id}</td>
                                <td class="py-3 px-3 font-extrabold text-slate-900">${o.target_quantity.toLocaleString()} ${s.t('kpi_books_unit')}</td>
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
                                            ${s.t('btn_print_job')}
                                        </button>
                                        <button onclick="openProgressUpdateModal('${o.work_order_no}')" class="px-2 py-1 text-xs font-bold bg-[#4885a6] hover:bg-[#3b7596] text-white rounded">
                                            ${s.t('btn_update_progress')}
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
    const isUrdu = s.lang === 'ur';

    return `
        <div class="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
            <div class="pb-4 border-b border-slate-100 flex items-center justify-between">
                <div>
                    <h3 class="text-base font-bold text-slate-900">${isUrdu ? 'پروڈکشن فلور مانیٹرنگ' : 'Production Floor Monitoring'}</h3>
                    <p class="text-xs text-slate-500">${isUrdu ? 'انر فارمے چھپائی، ٹائٹل لیمینیشن، اور بائنڈنگ اسمبلی کی تفصیلی ورکنگ' : 'Inner text printing, cover thermal lamination, and binding assembly tracking'}</p>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <!-- Inner Section -->
                <div class="bg-slate-50 rounded-xl p-4 border border-slate-200">
                    <div class="flex items-center justify-between pb-3 border-b border-slate-200">
                        <div class="flex items-center gap-2">
                            <span class="w-6 h-6 text-blue-600 flex items-center justify-center">${APN_ICONS.printing}</span>
                            <h4 class="font-bold text-slate-800 text-sm">${s.t('dept_inner_title')}</h4>
                        </div>
                        <span class="px-2 py-0.5 bg-blue-100 text-blue-800 text-xs font-bold rounded">${isUrdu ? 'مشین روم 1' : 'Machine 1'}</span>
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
                                    <span>${isUrdu ? 'پرنٹ شدہ:' : 'Printed:'} <b>${o.inner_printed_sheets}</b> / ${o.target_quantity}</span>
                                    <span class="text-rose-600">${isUrdu ? 'ڈیمیج:' : 'Damage:'} ${o.inner_damage_sheets || 0}</span>
                                </div>
                                <button onclick="openProgressUpdateModal('${o.work_order_no}', 'INNER_PRINT')" class="w-full mt-2 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded border border-slate-300">
                                    ${s.t('btn_log_inner')}
                                </button>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Outer Section -->
                <div class="bg-slate-50 rounded-xl p-4 border border-slate-200">
                    <div class="flex items-center justify-between pb-3 border-b border-slate-200">
                        <div class="flex items-center gap-2">
                            <span class="w-6 h-6 text-pink-600 flex items-center justify-center">${APN_ICONS.outer}</span>
                            <h4 class="font-bold text-slate-800 text-sm">${s.t('dept_outer_title')}</h4>
                        </div>
                        <span class="px-2 py-0.5 bg-purple-100 text-purple-800 text-xs font-bold rounded">${isUrdu ? 'مشین روم 2' : 'Machine 2'}</span>
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
                                    <span>${isUrdu ? 'پرنٹ شدہ:' : 'Printed:'} <b>${o.outer_printed_covers}</b> / ${o.target_quantity}</span>
                                    <span class="text-rose-600">${isUrdu ? 'ڈیمیج:' : 'Damage:'} ${o.outer_damage_covers || 0}</span>
                                </div>
                                <button onclick="openProgressUpdateModal('${o.work_order_no}', 'OUTER_PRINT')" class="w-full mt-2 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded border border-slate-300">
                                    ${s.t('btn_log_outer')}
                                </button>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Binding Section -->
                <div class="bg-slate-50 rounded-xl p-4 border border-slate-200">
                    <div class="flex items-center justify-between pb-3 border-b border-slate-200">
                        <div class="flex items-center gap-2">
                            <span class="w-6 h-6 text-teal-600 flex items-center justify-center">${APN_ICONS.binding}</span>
                            <h4 class="font-bold text-slate-800 text-sm">${s.t('dept_binding_title')}</h4>
                        </div>
                        <span class="px-2 py-0.5 bg-amber-100 text-amber-800 text-xs font-bold rounded">${isUrdu ? 'بائنڈنگ فلور' : 'Floor 1'}</span>
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
                                        ${isReadyForBinding ? (isUrdu ? '✓ انر اور آؤٹر دونوں بائنڈنگ کے لیے تیار ہیں' : '✓ Inner and outer covers ready for binding') : (isUrdu ? '⚠️ انر یا آؤٹر کی پرنٹنگ ابھی زیرِ تکمیل ہے' : '⚠️ Inner or cover printing still in progress')}
                                    </div>

                                    <div class="mt-2 text-xs flex justify-between text-slate-600">
                                        <span>${isUrdu ? 'اسمبل شدہ کتب:' : 'Bound Copies:'} <b>${o.binding_assembled_qty}</b></span>
                                        <span class="text-rose-600">${isUrdu ? 'ڈیمیج:' : 'Damage:'} ${o.binding_damage_qty || 0}</span>
                                    </div>
                                    <div class="grid grid-cols-2 gap-1.5 mt-2">
                                        <button onclick="openProgressUpdateModal('${o.work_order_no}', 'BINDING')" class="py-1 bg-amber-50 hover:bg-amber-100 text-amber-800 font-bold text-xs rounded border border-amber-300">
                                            ${s.t('btn_log_binding')}
                                        </button>
                                        <button onclick="finalizeJobToWarehouse('${o.work_order_no}')" class="py-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded">
                                            ${s.t('btn_send_wh')}
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
    const isUrdu = s.lang === 'ur';

    return `
        <div class="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200/80 flex items-center justify-center shrink-0 shadow-xs">
                        ${APN_ICONS.warehouse}
                    </div>
                    <div>
                        <h3 class="text-base font-bold text-slate-900">${s.t('dept_warehouse_title')}</h3>
                        <p class="text-xs text-slate-500">${s.t('dept_warehouse_sub')}</p>
                    </div>
                </div>
                <div class="text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-300">
                    ${isUrdu ? 'کل دستیاب کتب:' : 'Total Finished Stock:'} <span class="text-blue-700 font-extrabold">${fg.reduce((a,c) => a + c.quantity_on_hand, 0).toLocaleString()}</span> ${s.t('kpi_books_unit')}
                </div>
            </div>

            <div class="overflow-x-auto mt-4">
                <table class="w-full text-xs">
                    <thead>
                        <tr class="bg-slate-50 text-slate-600 border-b border-slate-200 ${isUrdu ? 'text-right' : 'text-left'}">
                            <th class="py-3 px-3">${s.t('th_wh_book')}</th>
                            <th class="py-3 px-3">${s.t('th_wh_batch')}</th>
                            <th class="py-3 px-3">${s.t('th_wh_name')}</th>
                            <th class="py-3 px-3 text-center">${s.t('th_wh_shelf')}</th>
                            <th class="py-3 px-3">${s.t('th_wh_qty')}</th>
                            <th class="py-3 px-3">${s.t('th_wh_date')}</th>
                            <th class="py-3 px-3 text-center">${s.t('th_action')}</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100">
                        ${fg.map(item => `
                            <tr class="hover:bg-slate-50 transition ${isUrdu ? 'text-right' : 'text-left'}">
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
                                    ${item.quantity_on_hand.toLocaleString()} <span class="text-xs font-normal text-slate-500">${s.t('kpi_books_unit')}</span>
                                </td>
                                <td class="py-3 px-3 text-slate-500">${new Date(item.received_date).toLocaleDateString(isUrdu ? 'ur-PK' : 'en-US')}</td>
                                <td class="py-3 px-3 text-center">
                                    <button onclick="openRelocateModal(${item.id}, '${item.rack_location}', '${item.shelf_location}')" class="px-2.5 py-1 text-xs font-bold text-slate-700 hover:bg-slate-100 rounded border border-slate-300">
                                        ${s.t('btn_relocate')}
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
    const isUrdu = s.lang === 'ur';

    return `
        <div class="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 border border-rose-200/80 flex items-center justify-center shrink-0 shadow-xs">
                        ${APN_ICONS.damage}
                    </div>
                    <div>
                        <h3 class="text-base font-bold text-slate-900">${s.t('dept_damage_title')}</h3>
                        <p class="text-xs text-slate-500">${s.t('dept_damage_sub')}</p>
                    </div>
                </div>
                <div class="bg-rose-50 border border-rose-200 px-3 py-1.5 rounded-lg text-xs">
                    <span class="text-slate-600 font-medium">${isUrdu ? 'مجموعی مالی نقصان:' : 'Total Financial Loss:'}</span>
                    <b class="text-rose-700 text-sm font-extrabold mr-1">${totalLoss.toLocaleString()} PKR</b>
                </div>
            </div>

            <div class="overflow-x-auto mt-4">
                <table class="w-full text-xs">
                    <thead>
                        <tr class="bg-slate-50 text-slate-600 border-b border-slate-200 ${isUrdu ? 'text-right' : 'text-left'}">
                            <th class="py-3 px-3">${s.t('th_dmg_wo')}</th>
                            <th class="py-3 px-3">${s.t('th_dmg_stage')}</th>
                            <th class="py-3 px-3">${s.t('th_dmg_item')}</th>
                            <th class="py-3 px-3">${s.t('th_dmg_qty')}</th>
                            <th class="py-3 px-3">${s.t('th_dmg_reason')}</th>
                            <th class="py-3 px-3">${s.t('th_dmg_loss')}</th>
                            <th class="py-3 px-3">${s.t('th_dmg_date')}</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100">
                        ${records.map(r => `
                            <tr class="hover:bg-rose-50/20 transition ${isUrdu ? 'text-right' : 'text-left'}">
                                <td class="py-3 px-3 font-mono font-bold text-blue-700">${r.work_order_no || '-'}</td>
                                <td class="py-3 px-3"><span class="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold">${r.stage}</span></td>
                                <td class="py-3 px-3 font-bold text-slate-800">${r.item_type}</td>
                                <td class="py-3 px-3 font-extrabold text-rose-600">${r.damaged_quantity} ${r.unit}</td>
                                <td class="py-3 px-3 text-slate-600">${r.reason}</td>
                                <td class="py-3 px-3 font-bold text-slate-900">${(r.cost_loss || 0).toLocaleString()} PKR</td>
                                <td class="py-3 px-3 text-slate-500">${new Date(r.recorded_at).toLocaleDateString(isUrdu ? 'ur-PK' : 'en-US')}</td>
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
    const isUrdu = s.lang === 'ur';

    return `
        <div class="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
            <div class="flex items-center gap-3 pb-4 border-b border-slate-100">
                <div class="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 border border-slate-300/80 flex items-center justify-center shrink-0 shadow-xs">
                    ${APN_ICONS.admin}
                </div>
                <div>
                    <h3 class="text-base font-bold text-slate-900">${s.t('dept_admin_title')}</h3>
                    <p class="text-xs text-slate-500">${s.t('dept_admin_sub')}</p>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 text-xs">
                <div class="p-4 rounded-xl border border-slate-200 bg-slate-50">
                    <h4 class="font-bold text-slate-800 text-sm">${isUrdu ? 'ڈیٹا بیک اپ (Export Backup)' : 'Data Backup (Export)'}</h4>
                    <p class="text-slate-500 mt-1">${isUrdu ? 'تمام خام مال، کتب، اور ورک آرڈرز کا مکمل ڈیٹا JSON میں ڈاؤن لوڈ کریں۔' : 'Download complete database backup in JSON format.'}</p>
                    <button onclick="downloadBackup()" class="mt-3 px-3 py-1.5 bg-[#4885a6] text-white font-bold rounded shadow-xs">
                        ⬇️ ${isUrdu ? 'ڈاؤن لوڈ بیک اپ' : 'Download Backup'}
                    </button>
                </div>
                <div class="p-4 rounded-xl border border-slate-200 bg-slate-50">
                    <h4 class="font-bold text-slate-800 text-sm">${isUrdu ? 'ڈیمو ڈیٹا ری سیٹ' : 'Reset Demo Data'}</h4>
                    <p class="text-slate-500 mt-1">${isUrdu ? 'ابتدائی پریس اور پبلیکیشن ڈیمو ڈیٹا دوبارہ لوڈ کریں۔' : 'Reload initial sample publication dataset.'}</p>
                    <button onclick="resetDemoData()" class="mt-3 px-3 py-1.5 bg-amber-600 text-white font-bold rounded shadow-xs">
                        🔄 ${isUrdu ? 'ڈیمو ڈیٹا لوڈ کریں' : 'Reload Demo Data'}
                    </button>
                </div>
                <div class="p-4 rounded-xl border border-slate-200 bg-slate-50">
                    <h4 class="font-bold text-slate-800 text-sm">${isUrdu ? 'پرنٹ ایبل سمری' : 'Printable Summary'}</h4>
                    <p class="text-slate-500 mt-1">${isUrdu ? 'اسٹاک اور پروڈکشن کی مکمل پرنٹ رپورٹ نکالیں۔' : 'Print complete inventory and production executive report.'}</p>
                    <button onclick="window.print()" class="mt-3 px-3 py-1.5 bg-slate-800 text-white font-bold rounded shadow-xs">
                        🖨️ ${isUrdu ? 'پرنٹ سمری' : 'Print Summary'}
                    </button>
                </div>
            </div>
        </div>
    `;
}

// ==================== MODALS & ACTIONS (FULLY BILINGUAL) ====================

function handleReload() {
    refreshData().then(() => renderApp());
}

function showLowStockModal() {
    const s = window.apnStore;
    const isUrdu = s.lang === 'ur';
    const low = s.rawMaterials.filter(m => m.current_stock <= m.min_reorder_level);
    alert(isUrdu 
        ? `کم اسٹاک الرٹس: ${low.length} آئٹمز کی خریداری فوری درکار ہے۔`
        : `Low Stock Alert: ${low.length} item(s) are below the minimum threshold.`
    );
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
    const isUrdu = window.apnStore.lang === 'ur';
    if (!confirm(isUrdu ? 'کیا آپ واقعی تمام ریکارڈز کو ڈیمو ڈیٹا پر ری سیٹ کرنا چاہتے ہیں؟' : 'Are you sure you want to reset all data to default demo records?')) return;
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
    const isUrdu = s.lang === 'ur';

    const modal = document.getElementById('modalContainer');
    modal.innerHTML = `
        <div class="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
            <div class="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200">
                <div class="flex items-center justify-between pb-3 border-b border-slate-100">
                    <h3 class="text-base font-bold text-slate-900">${s.t('modal_new_wo_title')}</h3>
                    <button onclick="closeModal()" class="text-slate-400 hover:text-slate-600 text-lg font-bold">✕</button>
                </div>

                <form id="newWoForm" onsubmit="handleCreateWorkOrder(event)" class="space-y-4 mt-4 text-xs ${isUrdu ? 'text-right' : 'text-left'}">
                    <div>
                        <label class="block font-bold text-slate-700 mb-1">${s.t('modal_select_book')}</label>
                        <select id="woBookSelect" required class="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 font-bold text-slate-800">
                            <option value="">-- ${s.t('modal_select_book')} --</option>
                            ${books.map(b => `
                                <option value="${b.article_id}" ${b.article_id === preselectedArticle ? 'selected' : ''}>
                                    ${b.title} (${b.article_id} - ${b.forms_count} ${isUrdu ? 'فارمے' : 'Forms'})
                                </option>
                            `).join('')}
                        </select>
                    </div>

                    <div class="grid grid-cols-2 gap-3">
                        <div>
                            <label class="block font-bold text-slate-700 mb-1">${s.t('modal_target_qty')}</label>
                            <input type="number" id="woQuantity" required min="100" step="100" value="5000" class="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 font-bold text-slate-800">
                        </div>
                        <div>
                            <label class="block font-bold text-slate-700 mb-1">${s.t('modal_target_date')}</label>
                            <input type="date" id="woTargetDate" class="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 font-semibold text-slate-800">
                        </div>
                    </div>

                    <div class="p-3 bg-blue-50 rounded-xl border border-blue-200 text-[11px] text-blue-900 leading-relaxed">
                        ${s.t('modal_wo_bom_hint')}
                    </div>

                    <div>
                        <label class="block font-bold text-slate-700 mb-1">${s.t('modal_wo_notes')}</label>
                        <textarea id="woNotes" rows="2" placeholder="..." class="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5"></textarea>
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

// 2. Printable Job Card Modal
function openJobCardPrintModal(workOrderNo) {
    const s = window.apnStore;
    const wo = s.workOrders.find(o => o.work_order_no === workOrderNo);
    if (!wo) return;
    const book = s.books.find(b => b.article_id === wo.book_article_id);
    const isUrdu = s.lang === 'ur';

    const barcodeSvg = window.generateBarcodeSVG(wo.work_order_no, 260, 60);

    const modal = document.getElementById('modalContainer');
    modal.innerHTML = `
        <div class="fixed inset-0 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 z-50 overflow-y-auto">
            <div class="bg-white rounded-2xl max-w-2xl w-full p-8 shadow-2xl border border-slate-200">
                <div class="flex items-center justify-between pb-3 border-b border-slate-200 no-print">
                    <span class="text-xs font-bold text-slate-500">${s.t('jc_preview_title')}</span>
                    <div class="flex items-center gap-2">
                        <button onclick="window.print()" class="px-4 py-1.5 bg-[#4885a6] hover:bg-[#3b7596] text-white font-bold text-xs rounded-lg shadow flex items-center gap-1.5">
                            <span>🖨️</span> <span>${s.t('jc_btn_print')}</span>
                        </button>
                        <button onclick="closeModal()" class="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-lg">${s.t('jc_btn_close')}</button>
                    </div>
                </div>

                <!-- Printable Area -->
                <div id="printableJobCardArea" class="mt-4 border-2 border-slate-800 p-6 rounded-xl ${isUrdu ? 'text-right' : 'text-left'}">
                    <div class="flex justify-between items-start border-b-2 border-slate-800 pb-4">
                        <div class="text-left">
                            ${barcodeSvg}
                            <p class="font-mono text-[11px] text-slate-500 mt-1">APN PRODUCTION ROUTING TICKET</p>
                        </div>
                        <div class="${isUrdu ? 'text-right' : 'text-left'}">
                            <h2 class="text-xl font-extrabold text-slate-900 ${isUrdu ? 'calligraphy-title' : 'font-sans'}">${s.t('jc_header_title')}</h2>
                            <p class="text-xs font-bold text-[#4885a6]">${s.t('jc_header_sub')}</p>
                            <p class="font-mono text-sm font-extrabold text-slate-900 mt-1">${wo.work_order_no}</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-4 my-4 text-xs">
                        <div class="bg-slate-50 p-3 rounded-lg border border-slate-200">
                            <p class="text-slate-500">${s.t('jc_book_label')}</p>
                            <h4 class="text-sm font-extrabold text-slate-900 mt-0.5">${wo.book_title || (book && book.title)}</h4>
                            <p class="text-slate-500 mt-2">${s.t('jc_code_label')} <b class="text-slate-800 font-mono">${wo.book_article_id}</b></p>
                            <p class="text-slate-500">${s.t('jc_pages_label')} <b class="text-slate-800">${book ? book.page_count : '-'} (${book ? book.forms_count : '-'} ${isUrdu ? 'فارمے' : 'Forms'})</b></p>
                        </div>

                        <div class="bg-slate-50 p-3 rounded-lg border border-slate-200">
                            <p class="text-slate-500">${s.t('jc_target_label')}</p>
                            <h4 class="text-sm font-extrabold text-[#4885a6] mt-0.5">${wo.target_quantity.toLocaleString()} ${s.t('kpi_books_unit')}</h4>
                            <p class="text-slate-500 mt-2">${s.t('jc_start_label')} <b class="text-slate-800">${new Date(wo.start_date).toLocaleDateString(isUrdu ? 'ur-PK' : 'en-US')}</b></p>
                            <p class="text-slate-500">${s.t('jc_due_label')} <b class="text-slate-800">${wo.target_delivery_date ? new Date(wo.target_delivery_date).toLocaleDateString(isUrdu ? 'ur-PK' : 'en-US') : '-'}</b></p>
                        </div>
                    </div>

                    <!-- Routing Checklist Table -->
                    <table class="w-full text-xs border border-slate-300 text-center">
                        <thead class="bg-slate-100 font-bold border-b border-slate-300">
                            <tr>
                                <th class="p-2 border-r">${s.t('jc_table_stage')}</th>
                                <th class="p-2 border-r">${s.t('jc_table_desc')}</th>
                                <th class="p-2 border-r">${s.t('jc_table_printed')}</th>
                                <th class="p-2 border-r">${s.t('jc_table_dmg')}</th>
                                <th class="p-2">${s.t('jc_table_sign')}</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            <tr>
                                <td class="p-2 font-bold border-r ${isUrdu ? 'text-right' : 'text-left'}">${s.t('jc_stage1')}</td>
                                <td class="p-2 border-r ${isUrdu ? 'text-right' : 'text-left'}">${s.t('jc_stage1_desc')}</td>
                                <td class="p-2 border-r">${isUrdu ? 'ایشو شدہ' : 'Issued'}</td>
                                <td class="p-2 border-r">-</td>
                                <td class="p-2 text-slate-400">______________</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-bold border-r ${isUrdu ? 'text-right' : 'text-left'}">${s.t('jc_stage2')}</td>
                                <td class="p-2 border-r ${isUrdu ? 'text-right' : 'text-left'}">${book ? book.inner_paper_spec : 'Paper'}</td>
                                <td class="p-2 border-r font-bold">${wo.inner_printed_sheets || '_______'}</td>
                                <td class="p-2 border-r text-rose-600">${wo.inner_damage_sheets || '___'}</td>
                                <td class="p-2 text-slate-400">______________</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-bold border-r ${isUrdu ? 'text-right' : 'text-left'}">${s.t('jc_stage3')}</td>
                                <td class="p-2 border-r ${isUrdu ? 'text-right' : 'text-left'}">${book ? book.outer_card_spec : 'Art Card'}</td>
                                <td class="p-2 border-r font-bold">${wo.outer_printed_covers || '_______'}</td>
                                <td class="p-2 border-r text-rose-600">${wo.outer_damage_covers || '___'}</td>
                                <td class="p-2 text-slate-400">______________</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-bold border-r ${isUrdu ? 'text-right' : 'text-left'}">${s.t('jc_stage4')}</td>
                                <td class="p-2 border-r ${isUrdu ? 'text-right' : 'text-left'}">${s.t('jc_stage4_desc')}</td>
                                <td class="p-2 border-r font-bold">${wo.binding_assembled_qty || '_______'}</td>
                                <td class="p-2 border-r text-rose-600">${wo.binding_damage_qty || '___'}</td>
                                <td class="p-2 text-slate-400">______________</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-bold border-r ${isUrdu ? 'text-right' : 'text-left'}">${s.t('jc_stage5')}</td>
                                <td class="p-2 border-r ${isUrdu ? 'text-right' : 'text-left'}">${s.t('jc_stage5_desc')}</td>
                                <td class="p-2 border-r font-bold">${wo.actual_finished_quantity || '_______'}</td>
                                <td class="p-2 border-r text-rose-600">${wo.total_damage_quantity || '___'}</td>
                                <td class="p-2 text-slate-400">______________</td>
                            </tr>
                        </tbody>
                    </table>

                    <p class="text-[10px] text-slate-400 text-center mt-6">
                        ${s.t('jc_footer_note')}
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
    const isUrdu = s.lang === 'ur';

    const modal = document.getElementById('modalContainer');
    modal.innerHTML = `
        <div class="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
            <div class="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200">
                <div class="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div>
                        <h3 class="text-base font-bold text-slate-900">${s.t('modal_log_title')}</h3>
                        <p class="text-xs text-[#4885a6] font-mono font-bold">${wo.work_order_no} - ${wo.book_title}</p>
                    </div>
                    <button onclick="closeModal()" class="text-slate-400 hover:text-slate-600 text-lg font-bold">✕</button>
                </div>

                <form onsubmit="handleUpdateProgress(event, '${wo.work_order_no}')" class="space-y-4 mt-4 text-xs ${isUrdu ? 'text-right' : 'text-left'}">
                    <div>
                        <label class="block font-bold text-slate-700 mb-1">${s.t('th_dmg_stage')}</label>
                        <select id="progStage" class="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 font-bold">
                            <option value="INNER_PRINT" ${preselectedStage === 'INNER_PRINT' ? 'selected' : ''}>${s.t('dept_inner_title')}</option>
                            <option value="OUTER_PRINT" ${preselectedStage === 'OUTER_PRINT' ? 'selected' : ''}>${s.t('dept_outer_title')}</option>
                            <option value="BINDING" ${preselectedStage === 'BINDING' ? 'selected' : ''}>${s.t('dept_binding_title')}</option>
                        </select>
                    </div>

                    <div class="grid grid-cols-2 gap-3">
                        <div>
                            <label class="block font-bold text-slate-700 mb-1">${s.t('modal_done_qty')}</label>
                            <input type="number" id="progDoneQty" required min="1" value="500" class="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 font-bold">
                        </div>
                        <div>
                            <label class="block font-bold text-rose-700 mb-1">${s.t('modal_damage_qty')}</label>
                            <input type="number" id="progDamageQty" min="0" value="0" class="w-full bg-rose-50 border border-rose-300 rounded-lg p-2.5 font-bold text-rose-700">
                        </div>
                    </div>

                    <div>
                        <label class="block font-bold text-slate-700 mb-1">${s.t('modal_operator')}</label>
                        <input type="text" id="progOperator" placeholder="e.g. Ali (Machine 2)" class="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5">
                    </div>

                    <div>
                        <label class="block font-bold text-slate-700 mb-1">${s.t('modal_log_reason')}</label>
                        <input type="text" id="progNotes" placeholder="..." class="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5">
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
    const isUrdu = window.apnStore.lang === 'ur';
    if (!confirm(isUrdu 
        ? `کیا آپ واقعی جاب ${workOrderNo} کو بائنڈنگ سے مکمل کر کے فنش گڈز گودام منتقل کرنا چاہتے ہیں؟`
        : `Transfer completed work order ${workOrderNo} directly to Finished Goods Warehouse?`
    )) return;
    await APN_API.updateProgress(workOrderNo, { stage: 'FINALIZE' });
    await refreshData();
    renderApp();
    alert(isUrdu ? `کامیابی! جاب ${workOrderNo} تیار شدہ کتب کے گودام میں منتقل ہو گئی ہے۔` : `Success! Job ${workOrderNo} transferred to Finished Goods Warehouse.`);
}

// 4. Add Material Modal
function openAddMaterialModal() {
    const s = window.apnStore;
    const isUrdu = s.lang === 'ur';

    const modal = document.getElementById('modalContainer');
    modal.innerHTML = `
        <div class="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
            <div class="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200">
                <div class="flex items-center justify-between pb-3 border-b border-slate-100">
                    <h3 class="text-base font-bold text-slate-900">${s.t('modal_add_mat_title')}</h3>
                    <button onclick="closeModal()" class="text-slate-400 hover:text-slate-600 text-lg font-bold">✕</button>
                </div>

                <form onsubmit="handleAddMaterial(event)" class="space-y-4 mt-4 text-xs ${isUrdu ? 'text-right' : 'text-left'}">
                    <div>
                        <label class="block font-bold text-slate-700 mb-1">${s.t('modal_mat_name')}</label>
                        <input type="text" id="matName" required placeholder="e.g. 75 GSM Offset Paper" class="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 font-bold">
                    </div>

                    <div class="grid grid-cols-2 gap-3">
                        <div>
                            <label class="block font-bold text-slate-700 mb-1">${s.t('th_category')}</label>
                            <select id="matCategory" class="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 font-semibold">
                                <option value="PAPER_INNER">${isUrdu ? 'انر پیپر' : 'Inner Paper'}</option>
                                <option value="CARD_OUTER">${isUrdu ? 'کور کارڈ' : 'Outer Card'}</option>
                                <option value="INK">${isUrdu ? 'پرنٹنگ سیاہی (CMYK)' : 'Printing Inks'}</option>
                                <option value="LAMINATION">${isUrdu ? 'لیمینیشن رول' : 'Lamination Film'}</option>
                                <option value="GLUE_BINDING">${isUrdu ? 'بائنڈنگ گلو و مواد' : 'Binding Glue & Supplies'}</option>
                            </select>
                        </div>
                        <div>
                            <label class="block font-bold text-slate-700 mb-1">${s.t('modal_unit')}</label>
                            <select id="matUnit" class="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 font-semibold">
                                <option value="REAMS">REAMS</option>
                                <option value="KG">KG</option>
                                <option value="ROLLS">ROLLS</option>
                                <option value="PACKS">PACKS</option>
                            </select>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-3">
                        <div>
                            <label class="block font-bold text-slate-700 mb-1">${s.t('modal_size')}</label>
                            <input type="text" id="matSize" placeholder="23x36 / 25x36" class="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5">
                        </div>
                        <div>
                            <label class="block font-bold text-slate-700 mb-1">${s.t('modal_gsm')}</label>
                            <input type="number" id="matGsm" placeholder="68, 70, 260" class="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5">
                        </div>
                    </div>

                    <div class="grid grid-cols-3 gap-3">
                        <div>
                            <label class="block font-bold text-slate-700 mb-1">${s.t('modal_init_stock')}</label>
                            <input type="number" id="matStock" step="0.5" value="10" class="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 font-bold">
                        </div>
                        <div>
                            <label class="block font-bold text-slate-700 mb-1">${s.t('modal_min_limit')}</label>
                            <input type="number" id="matMin" step="0.5" value="5" class="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 font-bold">
                        </div>
                        <div>
                            <label class="block font-bold text-slate-700 mb-1">${s.t('modal_rate')}</label>
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
    const isUrdu = s.lang === 'ur';

    const modal = document.getElementById('modalContainer');
    modal.innerHTML = `
        <div class="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
            <div class="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200">
                <div class="flex items-center justify-between pb-3 border-b border-slate-100">
                    <h3 class="text-base font-bold text-slate-900">${s.t('modal_inward_title')}</h3>
                    <button onclick="closeModal()" class="text-slate-400 hover:text-slate-600 text-lg font-bold">✕</button>
                </div>

                <form onsubmit="handleStockInward(event)" class="space-y-4 mt-4 text-xs ${isUrdu ? 'text-right' : 'text-left'}">
                    <div>
                        <label class="block font-bold text-slate-700 mb-1">${s.t('th_item_name')}</label>
                        <select id="inwardMatSelect" required class="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 font-bold">
                            ${mats.map(m => `
                                <option value="${m.id}" ${m.id === materialId ? 'selected' : ''}>
                                    ${m.name} (${s.t('th_current_stock')}: ${m.current_stock} ${m.unit})
                                </option>
                            `).join('')}
                        </select>
                    </div>

                    <div class="grid grid-cols-2 gap-3">
                        <div>
                            <label class="block font-bold text-slate-700 mb-1">${s.t('modal_inward_qty')}</label>
                            <input type="number" id="inwardQty" required min="0.1" step="0.5" value="20" class="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 font-extrabold text-emerald-700">
                        </div>
                        <div>
                            <label class="block font-bold text-slate-700 mb-1">${s.t('modal_inward_po')}</label>
                            <input type="text" id="inwardRef" placeholder="PO-2026-001" class="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 font-mono">
                        </div>
                    </div>

                    <div class="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
                        <button type="button" onclick="closeModal()" class="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-lg">${s.t('btn_cancel')}</button>
                        <button type="submit" class="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg shadow">${s.t('btn_save')}</button>
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
        notes: 'Stock Inward Purchase Voucher'
    });

    closeModal();
    await refreshData();
    renderApp();
}

// 5. Add Book Modal
function openAddBookModal() {
    const s = window.apnStore;
    const isUrdu = s.lang === 'ur';

    const modal = document.getElementById('modalContainer');
    modal.innerHTML = `
        <div class="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
            <div class="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200">
                <div class="flex items-center justify-between pb-3 border-b border-slate-100">
                    <h3 class="text-base font-bold text-slate-900">${s.t('modal_add_book_title')}</h3>
                    <button onclick="closeModal()" class="text-slate-400 hover:text-slate-600 text-lg font-bold">✕</button>
                </div>

                <form onsubmit="handleAddBook(event)" class="space-y-4 mt-4 text-xs ${isUrdu ? 'text-right' : 'text-left'}">
                    <div class="grid grid-cols-2 gap-3">
                        <div>
                            <label class="block font-bold text-slate-700 mb-1">${s.t('modal_book_code')}</label>
                            <input type="text" id="bkCode" required placeholder="APN-BK-0105" class="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 font-mono font-bold">
                        </div>
                        <div>
                            <label class="block font-bold text-slate-700 mb-1">${s.t('modal_book_lang')}</label>
                            <select id="bkLang" class="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 font-semibold">
                                <option value="Urdu">Urdu (اردو)</option>
                                <option value="English">English</option>
                                <option value="Arabic">Arabic</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label class="block font-bold text-slate-700 mb-1">${s.t('modal_book_title_field')}</label>
                        <input type="text" id="bkTitle" required placeholder="e.g. Oxford Modern English / مطالعہ پاکستان" class="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 font-bold">
                    </div>

                    <div class="grid grid-cols-2 gap-3">
                        <div>
                            <label class="block font-bold text-slate-700 mb-1">${s.t('modal_book_pages')}</label>
                            <input type="number" id="bkPages" required min="16" step="16" value="128" oninput="updateFormsPreview(this.value)" class="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 font-bold">
                        </div>
                        <div>
                            <label class="block font-bold text-slate-700 mb-1">${s.t('modal_book_forms_calc')}</label>
                            <input type="text" id="bkFormsPreview" disabled value="8 ${isUrdu ? 'فارمے' : 'Forms'}" class="w-full bg-blue-50 border border-blue-300 text-blue-800 rounded-lg p-2.5 font-extrabold text-center">
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-3">
                        <div>
                            <label class="block font-bold text-slate-700 mb-1">${s.t('modal_book_inner_spec')}</label>
                            <input type="text" id="bkInner" placeholder="68 GSM Offset (23x36)" class="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5">
                        </div>
                        <div>
                            <label class="block font-bold text-slate-700 mb-1">${s.t('modal_book_outer_spec')}</label>
                            <input type="text" id="bkOuter" placeholder="260 GSM Art Card Matt" class="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5">
                        </div>
                    </div>

                    <div>
                        <label class="block font-bold text-slate-700 mb-1">${s.t('modal_book_cost')}</label>
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
    const isUrdu = window.apnStore.lang === 'ur';
    const p = parseInt(pages) || 0;
    const forms = (p / 16).toFixed(1);
    const el = document.getElementById('bkFormsPreview');
    if (el) el.value = `${forms} ${isUrdu ? 'فارمے' : 'Forms'}`;
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
    const s = window.apnStore;
    const isUrdu = s.lang === 'ur';

    const modal = document.getElementById('modalContainer');
    modal.innerHTML = `
        <div class="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
            <div class="bg-white rounded-2xl max-w-xs w-full p-6 shadow-2xl border border-slate-200 ${isUrdu ? 'text-right' : 'text-left'}">
                <h3 class="text-base font-bold text-slate-900 pb-2 border-b">${s.t('modal_relocate_title')}</h3>
                <div class="space-y-3 mt-4 text-xs">
                    <div>
                        <label class="block font-bold text-slate-700 mb-1">${s.t('modal_new_rack')}</label>
                        <input type="text" id="newRack" value="${currRack}" class="w-full bg-slate-50 border border-slate-300 rounded-lg p-2 font-bold">
                    </div>
                    <div>
                        <label class="block font-bold text-slate-700 mb-1">${s.t('modal_new_shelf')}</label>
                        <input type="text" id="newShelf" value="${currShelf}" class="w-full bg-slate-50 border border-slate-300 rounded-lg p-2 font-bold">
                    </div>
                </div>
                <div class="flex justify-end gap-2 mt-4 pt-3 border-t">
                    <button onclick="closeModal()" class="px-3 py-1.5 bg-slate-100 rounded text-xs font-bold">${s.t('btn_cancel')}</button>
                    <button onclick="handleRelocate(${fgId})" class="px-4 py-1.5 bg-[#4885a6] text-white rounded text-xs font-bold">${s.t('btn_save')}</button>
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
window.setLang = setLang;
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
