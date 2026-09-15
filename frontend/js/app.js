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

    // 10. HR & Payroll
    hr: `<svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,

    // 11. Chart of Accounts & Finance
    accounts: `<svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/><line x1="12" x2="12" y1="15" y2="15"/><line x1="8" x2="8" y1="15" y2="15"/><line x1="16" x2="16" y1="15" y2="15"/></svg>`,

    // 12. Excel Bulk Hub
    excel_hub: `<svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="m8 13 4 4"/><path d="m12 13-4 4"/></svg>`,

    // 13. Users & Limitations
    users: `<svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,

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
    nav_hr: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/></svg>`,
    nav_accounts: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>`,
    nav_excel_hub: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="m8 13 4 4"/><path d="m12 13-4 4"/></svg>`,
    nav_users: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
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
    window.apnStore.employees = await APN_API.getEmployees();
    window.apnStore.accounts = await APN_API.getAccounts();
    window.apnStore.users = await APN_API.getUsers();
    window.apnStore.vouchers = await APN_API.getVouchers();
}


function switchTab(tabId) {
    window.apnStore.activeTab = tabId;
    window.apnStore.mobileSidebarOpen = false;
    renderApp();
}

function toggleSidebar() {
    window.apnStore.sidebarCollapsed = !window.apnStore.sidebarCollapsed;
    renderApp();
}

function toggleMobileSidebar(openState) {
    window.apnStore.toggleMobileSidebar(openState);
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
        <!-- Mobile Sidebar Backdrop Overlay (< md) -->
        ${s.mobileSidebarOpen ? `
            <div onclick="toggleMobileSidebar(false)" class="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-40 md:hidden transition-opacity"></div>
        ` : ''}

        <!-- Top Header Bar (#4885a6 steel blue) -->
        <header class="bg-[#4885a6] text-white shadow-sm sticky top-0 z-40 h-[52px] flex items-center justify-between px-3 sm:px-4 select-none">
            <!-- Left: Mobile Menu Toggle, Brand Title & Language Switcher -->
            <div class="flex items-center gap-2 sm:gap-3 min-w-0">
                <!-- Mobile Hamburger Button (< md) -->
                <button onclick="toggleMobileSidebar()" class="md:hidden p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white focus:outline-none transition shrink-0" title="Menu">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>

                <!-- Brand Title with Responsive Sizing & Ellipsis -->
                <div class="flex items-center gap-1 sm:gap-2 min-w-0">
                    ${isUrdu ? `
                        <span class="calligraphy-title text-base sm:text-lg md:text-xl font-bold tracking-wide text-white drop-shadow-xs truncate max-w-[135px] sm:max-w-[240px] md:max-w-none">
                            عباسی پبلیکیشن نیٹ ورک
                        </span>
                    ` : `
                        <span class="font-extrabold tracking-wider text-xs sm:text-sm md:text-base uppercase text-white font-sans drop-shadow-xs truncate max-w-[130px] sm:max-w-[220px] md:max-w-none">
                            ABBASI PUBLICATION NETWORK
                        </span>
                    `}
                </div>

                <!-- Direct English / Urdu Switcher right next to title -->
                <div class="flex items-center bg-[#366883] p-0.5 rounded-lg border border-white/20 text-[11px] sm:text-xs font-bold shadow-inner shrink-0">
                    <button onclick="setLang('ur')" class="px-2 sm:px-2.5 py-0.5 rounded-md transition ${isUrdu ? 'bg-white text-[#1b3240] shadow-xs' : 'text-blue-100 hover:text-white'}">
                        اردو
                    </button>
                    <button onclick="setLang('en')" class="px-2 sm:px-2.5 py-0.5 rounded-md transition ${!isUrdu ? 'bg-white text-[#1b3240] shadow-xs' : 'text-blue-100 hover:text-white'}">
                        English
                    </button>
                </div>
                
                <!-- Square Refresh Button -->
                <button onclick="handleReload()" title="${isUrdu ? 'ریفریش ڈیٹا' : 'Reload Data'}" class="w-7 h-7 sm:w-8 sm:h-8 rounded bg-[#5c9bbd] hover:bg-[#3d7a9c] flex items-center justify-center text-white transition text-xs sm:text-sm shadow-xs shrink-0">
                    <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                    </svg>
                </button>
            </div>

            <!-- Right: Status & User Avatar -->
            <div class="flex items-center gap-2 sm:gap-3 shrink-0">
                <!-- Status Badge -->
                <div class="hidden sm:flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${s.isOnline ? 'bg-emerald-600/30 text-emerald-100 border border-emerald-300/40' : 'bg-amber-600/30 text-amber-100 border border-amber-300/40'}">
                    <span class="w-2 h-2 rounded-full ${s.isOnline ? 'bg-emerald-300 animate-ping' : 'bg-amber-300'}"></span>
                    <span>${s.isOnline ? s.t('backend_connected') : s.t('backend_offline')}</span>
                </div>

                <!-- User Profile Switcher Trigger -->
                <div onclick="openUserSwitcherModal()" class="flex items-center gap-1.5 cursor-pointer pl-1 bg-[#3a6b86] hover:bg-[#2d566e] px-2.5 py-1 rounded-lg transition border border-white/20 shadow-xs" title="${isUrdu ? 'تبدیل صارف / سوئچ یوزر' : 'Switch User'}">
                    <div class="w-6 h-6 rounded-full bg-[#1b3240] border border-white/40 flex items-center justify-center text-white text-[10px] font-bold">
                        ${(s.currentUser?.username || 'U')[0].toUpperCase()}
                    </div>
                    <div class="hidden sm:flex flex-col text-left leading-tight">
                        <span class="text-white text-[11px] font-bold truncate max-w-[120px]">${s.currentUser?.full_name || 'Admin'}</span>
                        <span class="text-blue-200 text-[9px] uppercase font-semibold">${s.currentUser?.role || 'ADMIN'}</span>
                    </div>
                    <span class="text-white/80 text-[10px]">▼</span>
                </div>
            </div>
        </header>

        <!-- Mobile Drawer Navigation (< md) -->
        <aside class="fixed top-0 bottom-0 left-0 z-50 w-64 bg-white border-r border-slate-200 flex flex-col justify-between shadow-2xl md:hidden overflow-y-auto transition-transform duration-200 ease-in-out ${s.mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'}">
            <div>
                <!-- Mobile Drawer Header -->
                <div class="p-3.5 bg-[#4885a6] text-white flex items-center justify-between shadow-xs">
                    <div class="font-bold text-xs truncate">
                        ${isUrdu ? 'عباسی پبلیکیشن نیٹ ورک' : 'Abbasi Publication'}
                    </div>
                    <button onclick="toggleMobileSidebar(false)" class="w-7 h-7 flex items-center justify-center rounded-md bg-white/10 hover:bg-white/20 text-white text-sm font-bold">
                        ✕
                    </button>
                </div>

                <!-- 4 Top Action Buttons -->
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

                <!-- Navigation List -->
                <nav class="p-2 space-y-1">
                    ${renderSidebarLink('dashboard', 'nav_dashboard', s.t('nav_dashboard'), false)}
                    ${s.hasPermission('raw_materials') ? renderSidebarLink('raw_materials', 'nav_raw_materials', s.t('nav_raw_materials'), true) : ''}
                    ${s.hasPermission('books') ? renderSidebarLink('books', 'nav_books', s.t('nav_books'), true) : ''}
                    ${s.hasPermission('work_orders') ? renderSidebarLink('work_orders', 'nav_work_orders', s.t('nav_work_orders'), true) : ''}
                    ${s.hasPermission('printing') ? renderSidebarLink('printing', 'nav_printing', s.t('nav_printing'), true) : ''}
                    ${s.hasPermission('outer') ? renderSidebarLink('outer', 'nav_outer', s.t('nav_outer'), true) : ''}
                    ${s.hasPermission('binding') ? renderSidebarLink('binding', 'nav_binding', s.t('nav_binding'), true) : ''}
                    ${s.hasPermission('warehouse') ? renderSidebarLink('warehouse', 'nav_warehouse', s.t('nav_warehouse'), true) : ''}
                    ${s.hasPermission('damage') ? renderSidebarLink('damage', 'nav_damage', s.t('nav_damage'), true) : ''}
                    ${s.hasPermission('hr') ? renderSidebarLink('hr', 'nav_hr', s.t('nav_hr'), true) : ''}
                    ${s.hasPermission('accounts') ? renderSidebarLink('accounts', 'nav_accounts', s.t('nav_accounts'), true) : ''}
                    ${s.hasPermission('excel_hub') ? renderSidebarLink('excel_hub', 'nav_excel_hub', s.t('nav_excel_hub'), true) : ''}
                    ${s.hasPermission('users') ? renderSidebarLink('users', 'nav_users', s.t('nav_users'), true) : ''}
                    ${s.hasPermission('admin') ? renderSidebarLink('admin', 'nav_admin', s.t('nav_reports'), false) : ''}
                </nav>
            </div>
            
            <div class="p-3 border-t border-slate-100 text-center text-[11px] text-slate-400">
                APN ERP v1.0 • User: ${s.currentUser?.username || 'Admin'}
            </div>
        </aside>

        <!-- Main Shell Container: Sidebar ALWAYS on the LEFT -->
        <div class="flex min-h-[calc(100vh-52px)]">
            <!-- Desktop Left Sidebar (Permanent Left Position, hidden on < md) -->
            <aside class="${isCollapsed ? 'w-16' : 'w-60'} bg-white border-r border-slate-200 hidden md:flex flex-col justify-between transition-all duration-200 shrink-0 select-none shadow-xs">
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
                        ${s.hasPermission('raw_materials') ? renderSidebarLink('raw_materials', 'nav_raw_materials', s.t('nav_raw_materials'), true) : ''}
                        ${s.hasPermission('books') ? renderSidebarLink('books', 'nav_books', s.t('nav_books'), true) : ''}
                        ${s.hasPermission('work_orders') ? renderSidebarLink('work_orders', 'nav_work_orders', s.t('nav_work_orders'), true) : ''}
                        ${s.hasPermission('printing') ? renderSidebarLink('printing', 'nav_printing', s.t('nav_printing'), true) : ''}
                        ${s.hasPermission('outer') ? renderSidebarLink('outer', 'nav_outer', s.t('nav_outer'), true) : ''}
                        ${s.hasPermission('binding') ? renderSidebarLink('binding', 'nav_binding', s.t('nav_binding'), true) : ''}
                        ${s.hasPermission('warehouse') ? renderSidebarLink('warehouse', 'nav_warehouse', s.t('nav_warehouse'), true) : ''}
                        ${s.hasPermission('damage') ? renderSidebarLink('damage', 'nav_damage', s.t('nav_damage'), true) : ''}
                        ${s.hasPermission('hr') ? renderSidebarLink('hr', 'nav_hr', s.t('nav_hr'), true) : ''}
                        ${s.hasPermission('accounts') ? renderSidebarLink('accounts', 'nav_accounts', s.t('nav_accounts'), true) : ''}
                        ${s.hasPermission('excel_hub') ? renderSidebarLink('excel_hub', 'nav_excel_hub', s.t('nav_excel_hub'), true) : ''}
                        ${s.hasPermission('users') ? renderSidebarLink('users', 'nav_users', s.t('nav_users'), true) : ''}
                        ${s.hasPermission('admin') ? renderSidebarLink('admin', 'nav_admin', s.t('nav_reports'), false) : ''}
                    </nav>
                </div>


                <!-- Bottom Collapse Arrow Button -->
                <div class="p-2 border-t border-slate-200 text-center">
                    <button onclick="toggleSidebar()" class="w-8 h-8 mx-auto rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center text-xs font-bold transition">
                        ${isCollapsed ? '»' : '«'}
                    </button>
                </div>
            </aside>

            <!-- Main Content Area (on the Right of Sidebar) -->
            <main class="flex-1 bg-[#f4f7f9] p-3 sm:p-5 md:p-6 overflow-y-auto w-full min-w-0">
                <!-- Tab Header -->
                <div class="flex items-center gap-1 border-b border-slate-200 mb-4 sm:mb-6 pb-0 select-none overflow-x-auto whitespace-nowrap scrollbar-none">
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
        case 'hr': return s.t('nav_hr');
        case 'accounts': return s.t('nav_accounts');
        case 'excel_hub': return s.t('nav_excel_hub');
        case 'users': return s.t('nav_users');
        case 'admin': return s.t('nav_reports');
        default: return s.t('nav_dashboard');
    }
}


// ==================== DASHBOARD DEPARTMENT CARDS GRID ====================

window.setWorkspaceFilter = function(filterKey) {
    window.apnStore.selectedWorkspaceFilter = filterKey;
    renderApp();
};

function renderDepartmentGrid() {
    const s = window.apnStore;
    const m = s.dashboardMetrics;
    const isUrdu = s.lang === 'ur';
    const currentFilter = s.selectedWorkspaceFilter || 'all';

    const departments = [
        { 
            id: 'raw_materials', 
            category: 'inventory',
            icon: APN_ICONS.raw_materials, 
            accent: '#0284c7',
            iconBg: 'bg-sky-50 text-sky-600 border border-sky-200/80',
            badgeClass: 'bg-sky-50 text-sky-700 border border-sky-200',
            titleEn: 'Raw Material Store', 
            titleUr: 'خام مال و پیکیجنگ اسٹور', 
            subEn: 'Paper, Art Board, Printing Inks & Lamination Supplies',
            subUr: 'کاغذ، آرٹ بورڈ، پرنٹنگ سیاہی اور لیمینیشن میٹریل',
            countEn: `${s.rawMaterials.length} Items`,
            countUr: `${s.rawMaterials.length} آئٹمز`
        },
        { 
            id: 'books', 
            category: 'manufacturing',
            icon: APN_ICONS.books, 
            accent: '#7c3aed',
            iconBg: 'bg-violet-50 text-violet-600 border border-violet-200/80',
            badgeClass: 'bg-violet-50 text-violet-700 border border-violet-200',
            titleEn: 'Book Master & BOM', 
            titleUr: 'کتب ماسٹر اور فارمولا (BOM)', 
            subEn: 'Book Specs, Inner Forms, Paper Types & Standard Costing',
            subUr: 'کتابوں کے صفحات، فارمے، پیپر سائز اور لاگت کا تخمینہ',
            countEn: `${s.books.length} Books`,
            countUr: `${s.books.length} کتب`
        },
        { 
            id: 'work_orders', 
            category: 'manufacturing',
            icon: APN_ICONS.work_orders, 
            accent: '#d97706',
            iconBg: 'bg-amber-50 text-amber-600 border border-amber-200/80',
            badgeClass: 'bg-amber-50 text-amber-700 border border-amber-200',
            titleEn: 'Work Orders & Production', 
            titleUr: 'ورک آرڈرز اور پروڈکشن جابز', 
            subEn: 'Job Card Issuance, Barcode Tracking & Floor Progress',
            subUr: 'جاب کارڈز کا اجراء، بارکوڈ ٹریکنگ اور شیٹس کنٹرول',
            countEn: `${m.active_jobs_count || 0} Active Jobs`,
            countUr: `${m.active_jobs_count || 0} فعال آرڈرز`
        },
        { 
            id: 'printing', 
            category: 'manufacturing',
            icon: APN_ICONS.printing, 
            accent: '#2563eb',
            iconBg: 'bg-blue-50 text-blue-600 border border-blue-200/80',
            badgeClass: 'bg-blue-50 text-blue-700 border border-blue-200',
            titleEn: 'Inner Printing Floor', 
            titleUr: 'انر پرنٹنگ پریس فلور', 
            subEn: 'Offset Presses, Text Forms & Sheet Counters',
            subUr: 'آفسیٹ پریس مشینیں، اندرونی فارمے اور شیٹس مانیٹرنگ',
            countEn: 'Press Unit 1',
            countUr: 'مشین روم 1'
        },
        { 
            id: 'outer', 
            category: 'manufacturing',
            icon: APN_ICONS.outer, 
            accent: '#db2777',
            iconBg: 'bg-pink-50 text-pink-600 border border-pink-200/80',
            badgeClass: 'bg-pink-50 text-pink-700 border border-pink-200',
            titleEn: 'Cover & Lamination Unit', 
            titleUr: 'ٹائٹل کور اور لیمینیشن', 
            subEn: 'Cover Printing, Matt & Gloss Thermal Lamination',
            subUr: 'ٹائٹل کارڈ پرنٹنگ، میٹ و گلوس تھرمل لیمینیشن',
            countEn: 'Press Unit 2',
            countUr: 'مشین روم 2'
        },
        { 
            id: 'binding', 
            category: 'manufacturing',
            icon: APN_ICONS.binding, 
            accent: '#0d9488',
            iconBg: 'bg-teal-50 text-teal-600 border border-teal-200/80',
            badgeClass: 'bg-teal-50 text-teal-700 border border-teal-200',
            titleEn: 'Binding & Finishing', 
            titleUr: 'بائنڈنگ اور فنشنگ فلور', 
            subEn: 'Folding, Hot Melt Glue, Stitching & 3-Knife Trimming',
            subUr: 'فولڈنگ، ہاٹ میلٹ گوند، سلائی اور تھری نائف کٹنگ',
            countEn: 'Binding Floor',
            countUr: 'بائنڈنگ فلور'
        },
        { 
            id: 'warehouse', 
            category: 'inventory',
            icon: APN_ICONS.warehouse, 
            accent: '#16a34a',
            iconBg: 'bg-emerald-50 text-emerald-600 border border-emerald-200/80',
            badgeClass: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
            titleEn: 'Finished Goods Warehouse', 
            titleUr: 'تیار کتب مرکزی گودام', 
            subEn: 'Rack & Shelf Inventory, Ready Stock & Dispatch Delivery',
            subUr: 'ریک اور شیلف انوینٹری، اسٹاک بیلنس اور کتب ترسیل',
            countEn: `${(m.total_finished_books || 0).toLocaleString()} Books`,
            countUr: `${(m.total_finished_books || 0).toLocaleString()} کتب`
        },
        { 
            id: 'damage', 
            category: 'finance_hr',
            icon: APN_ICONS.damage, 
            accent: '#e11d48',
            iconBg: 'bg-rose-50 text-rose-600 border border-rose-200/80',
            badgeClass: 'bg-rose-50 text-rose-700 border border-rose-200',
            titleEn: 'Damage & Spoilage Log', 
            titleUr: 'ڈیمیج اور ویسٹیج تجزیہ', 
            subEn: 'Press Spoilage, Damage Reasons & Financial Impact',
            subUr: 'پرنٹنگ و بائنڈنگ اسپوائلج، وجوہات اور مالی نقصان',
            countEn: `${m.total_damage_items || 0} Losses`,
            countUr: `${m.total_damage_items || 0} ضایعات`
        },
        { 
            id: 'hr', 
            category: 'finance_hr',
            icon: APN_ICONS.hr, 
            accent: '#0891b2',
            iconBg: 'bg-cyan-50 text-cyan-600 border border-cyan-200/80',
            badgeClass: 'bg-cyan-50 text-cyan-700 border border-cyan-200',
            titleEn: 'HR & Payroll Management', 
            titleUr: 'ہیومن ریسورس اور پے رول', 
            subEn: 'Staff Directory, Daily Attendance & Salary Slips',
            subUr: 'ملازمین کا ریکارڈ، روزانہ حاضری، تنخواہیں اور پرچیاں',
            countEn: `${(s.employees || []).length} Staff`,
            countUr: `${(s.employees || []).length} ملازمین`
        },
        { 
            id: 'accounts', 
            category: 'finance_hr',
            icon: APN_ICONS.accounts, 
            accent: '#059669',
            iconBg: 'bg-emerald-50 text-emerald-600 border border-emerald-200/80',
            badgeClass: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
            titleEn: 'Chart of Accounts & GL', 
            titleUr: 'چارٹ آف اکاؤنٹس اور مالیات', 
            subEn: 'Ledgers, Cash/Bank Vouchers & Trial Balance',
            subUr: 'کھاتہ جات، کیش و بینک واؤچرز اور میزان محاکمہ',
            countEn: `${(s.accounts || []).length} Accounts`,
            countUr: `${(s.accounts || []).length} کھاتے`
        },
        { 
            id: 'excel_hub', 
            category: 'finance_hr',
            icon: APN_ICONS.excel_hub, 
            accent: '#15803d',
            iconBg: 'bg-green-50 text-green-700 border border-green-200/80',
            badgeClass: 'bg-green-50 text-green-700 border border-green-200',
            titleEn: 'Excel Bulk Data Hub', 
            titleUr: 'ایکسل ڈیٹا امپورٹ سینٹر', 
            subEn: 'Bulk Sheet Upload, Live Preview & Sample Templates',
            subUr: 'ایکسل شیٹس کا بلک اپلوڈ، ڈیٹا معائنہ اور ٹیمپلیٹس',
            countEn: 'Bulk Import',
            countUr: 'بلک امپورٹ'
        },
        { 
            id: 'users', 
            category: 'finance_hr',
            icon: APN_ICONS.users, 
            accent: '#6366f1',
            iconBg: 'bg-indigo-50 text-indigo-600 border border-indigo-200/80',
            badgeClass: 'bg-indigo-50 text-indigo-700 border border-indigo-200',
            titleEn: 'User Access & Permissions', 
            titleUr: 'صارفین اور اختیارات کنٹرول', 
            subEn: 'Role Permissions, Access Limits & Module Control',
            subUr: 'یوزرز کی لمیٹیشنز، ماڈیول پابندیاں اور رولز',
            countEn: `${(s.users || []).length} Users`,
            countUr: `${(s.users || []).length} صارفین`
        },
        { 
            id: 'admin', 
            category: 'finance_hr',
            icon: APN_ICONS.admin, 
            accent: '#475569',
            iconBg: 'bg-slate-100 text-slate-700 border border-slate-200',
            badgeClass: 'bg-slate-100 text-slate-700 border border-slate-300',
            titleEn: 'Admin Reports & Audit', 
            titleUr: 'ایڈمن رپورٹس اور آڈٹ لیجر', 
            subEn: 'System Audit Trail, Analytics & Controls',
            subUr: 'مکمل سسٹم کا آڈٹ ٹریل، کارکردگی اور ڈیٹا تجزیہ',
            countEn: 'System Controls',
            countUr: 'سسٹم کنٹرول'
        }
    ];

    const accessibleDepts = departments.filter(d => s.hasPermission(d.id));
    const filteredDepts = currentFilter === 'all' 
        ? accessibleDepts 
        : accessibleDepts.filter(d => d.category === currentFilter);

    return `
        <!-- Executive KPI Metrics Strip (Enterprise Tier) -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5 mb-5 sm:mb-6">
            <div class="bg-white p-3 sm:p-3.5 rounded-xl border border-slate-200/90 shadow-2xs hover:shadow-xs transition relative overflow-hidden">
                <div class="flex items-center justify-between">
                    <span class="text-[10.5px] sm:text-[11.5px] font-bold uppercase tracking-wider text-slate-500 font-sans">
                        ${isUrdu ? 'کل تیار کتب اسٹاک' : 'Total Finished Stock'}
                    </span>
                    <div class="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                        ${APN_ICONS.kpi_books}
                    </div>
                </div>
                <div class="mt-1.5 flex items-baseline gap-1.5">
                    <span class="text-xl sm:text-2xl font-black text-slate-900 tabular-nums tracking-tight font-sans">
                        ${(m.total_finished_books || 0).toLocaleString()}
                    </span>
                    <span class="text-xs text-slate-500 font-medium">${s.t('kpi_books_unit')}</span>
                </div>
                <div class="mt-1.5 flex items-center gap-1.5 text-[10.5px] text-emerald-600 font-semibold">
                    <span>● ${isUrdu ? 'محفوظ و معائنہ شدہ اسٹاک' : 'Optimal Inventory'}</span>
                </div>
            </div>

            <div class="bg-white p-3 sm:p-3.5 rounded-xl border border-slate-200/90 shadow-2xs hover:shadow-xs transition relative overflow-hidden">
                <div class="flex items-center justify-between">
                    <span class="text-[10.5px] sm:text-[11.5px] font-bold uppercase tracking-wider text-slate-500 font-sans">
                        ${isUrdu ? 'زیرِ تکمیل جابز' : 'Active Work Orders'}
                    </span>
                    <div class="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                        ${APN_ICONS.kpi_jobs}
                    </div>
                </div>
                <div class="mt-1.5 flex items-baseline gap-1.5">
                    <span class="text-xl sm:text-2xl font-black text-slate-900 tabular-nums tracking-tight font-sans">
                        ${m.active_jobs_count || 0}
                    </span>
                    <span class="text-xs text-slate-500 font-medium">${s.t('kpi_jobs_unit')}</span>
                </div>
                <div class="mt-1.5 flex items-center gap-1.5 text-[10.5px] text-amber-600 font-semibold">
                    <span>● ${isUrdu ? 'پرنٹنگ و بائنڈنگ جاری' : 'Press & Binding Active'}</span>
                </div>
            </div>

            <div class="bg-white p-3 sm:p-3.5 rounded-xl border border-slate-200/90 shadow-2xs hover:shadow-xs transition relative overflow-hidden">
                <div class="flex items-center justify-between">
                    <span class="text-[10.5px] sm:text-[11.5px] font-bold uppercase tracking-wider text-slate-500 font-sans">
                        ${isUrdu ? 'کم اسٹاک الرٹس' : 'Low Stock Alerts'}
                    </span>
                    <div class="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center ${(m.low_stock_count || 0) > 0 ? 'badge-pulse-red' : ''}">
                        ${APN_ICONS.kpi_alerts}
                    </div>
                </div>
                <div class="mt-1.5 flex items-baseline gap-1.5">
                    <span class="text-xl sm:text-2xl font-black ${(m.low_stock_count || 0) > 0 ? 'text-red-600' : 'text-slate-900'} tabular-nums tracking-tight font-sans">
                        ${m.low_stock_count || 0}
                    </span>
                    <span class="text-xs text-slate-500 font-medium">${s.t('kpi_alerts_unit')}</span>
                </div>
                <div class="mt-1.5 flex items-center gap-1.5 text-[10.5px] ${(m.low_stock_count || 0) > 0 ? 'text-red-600 font-bold' : 'text-slate-500 font-semibold'}">
                    <span>${(m.low_stock_count || 0) > 0 ? (isUrdu ? '⚠️ فوری خریداری درکار' : '⚠️ Immediate Reorder') : (isUrdu ? '✓ اسٹاک تسلی بخش' : '✓ Stock Healthy')}</span>
                </div>
            </div>

            <div class="bg-white p-3 sm:p-3.5 rounded-xl border border-slate-200/90 shadow-2xs hover:shadow-xs transition relative overflow-hidden">
                <div class="flex items-center justify-between">
                    <span class="text-[10.5px] sm:text-[11.5px] font-bold uppercase tracking-wider text-slate-500 font-sans">
                        ${isUrdu ? 'کل ڈیمیج و نقصان' : 'Total Spoilage Loss'}
                    </span>
                    <div class="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center">
                        ${APN_ICONS.kpi_loss}
                    </div>
                </div>
                <div class="mt-1.5 flex items-baseline gap-1.5">
                    <span class="text-xl sm:text-2xl font-black text-slate-900 tabular-nums tracking-tight font-sans">
                        ${(m.total_financial_loss || 0).toLocaleString()}
                    </span>
                    <span class="text-xs text-slate-500 font-medium">${s.t('kpi_pkr')}</span>
                </div>
                <div class="mt-1.5 flex items-center gap-1.5 text-[10.5px] text-slate-500 font-semibold">
                    <span>● ${isUrdu ? 'مجموعی ویسٹیج تخمینہ' : 'Logged Spoilage Cost'}</span>
                </div>
            </div>
        </div>

        <!-- Operational Workspace Filter Strip (Enterprise Cockpit Navigation) -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-4 pb-2 border-b border-slate-200/80">
            <div class="flex items-center gap-2">
                <div class="w-2.5 h-2.5 rounded-full bg-[#0284c7]"></div>
                <h3 class="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-800 font-sans">
                    ${isUrdu ? 'کاروباری شعبہ جات و ماڈیولز' : 'ENTERPRISE MODULES & WORK CENTERS'}
                </h3>
                <span class="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    ${accessibleDepts.length} ${isUrdu ? 'شعبے' : 'Active'}
                </span>
            </div>

            <!-- Workspace Category Filter Pills -->
            <div class="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
                <button onclick="setWorkspaceFilter('all')" class="workspace-filter-tab ${currentFilter === 'all' ? 'active' : ''}">
                    ${isUrdu ? 'تمام شعبے' : 'All Modules'}
                </button>
                <button onclick="setWorkspaceFilter('manufacturing')" class="workspace-filter-tab ${currentFilter === 'manufacturing' ? 'active' : ''}">
                    ${isUrdu ? 'پروڈکشن و پریس' : 'Production Floor'}
                </button>
                <button onclick="setWorkspaceFilter('inventory')" class="workspace-filter-tab ${currentFilter === 'inventory' ? 'active' : ''}">
                    ${isUrdu ? 'اسٹور و گودام' : 'Supply & Storage'}
                </button>
                <button onclick="setWorkspaceFilter('finance_hr')" class="workspace-filter-tab ${currentFilter === 'finance_hr' ? 'active' : ''}">
                    ${isUrdu ? 'مالیات و ایڈمن' : 'Finance & HR'}
                </button>
            </div>
        </div>

        <!-- Landscape Executive Department Cards Grid (Wide, Readable, Single-Language) -->
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3.5 sm:gap-4 mb-6">
            ${filteredDepts.map(d => `
                <div onclick="switchTab('${d.id}')" class="dept-card-landscape group" style="--card-accent: ${d.accent};">
                    <div class="flex items-start gap-3.5 sm:gap-4">
                        <!-- Big Clear Vector Icon Container -->
                        <div class="card-icon-container ${d.iconBg}">
                            ${d.icon}
                        </div>

                        <!-- Center: Strictly Single Language Title + Big Readable Specification in Landscape -->
                        <div class="flex-1 min-w-0">
                            <div class="flex items-center justify-between gap-2">
                                <h4 class="${isUrdu ? 'urdu-nastaliq text-[17px] sm:text-[18px] font-bold text-slate-900 leading-snug' : 'font-sans text-sm sm:text-base font-bold text-slate-900 tracking-tight'} truncate">
                                    ${isUrdu ? d.titleUr : d.titleEn}
                                </h4>

                                <!-- Prominent Item Count Badge -->
                                <span class="text-xs font-bold px-2.5 py-1 rounded-lg ${d.badgeClass} tabular-nums whitespace-nowrap shrink-0 shadow-2xs">
                                    ${isUrdu ? d.countUr : d.countEn}
                                </span>
                            </div>

                            <!-- Readable, Large Specification Text -->
                            <p class="${isUrdu ? 'urdu-nastaliq text-[13px] sm:text-[13.5px] text-slate-600 font-normal mt-1 leading-normal' : 'text-xs text-slate-500 font-medium mt-1 leading-normal'}">
                                ${isUrdu ? d.subUr : d.subEn}
                            </p>
                        </div>

                        <!-- Subtle Arrow Indicator -->
                        <div class="text-slate-300 group-hover:text-slate-700 group-hover:translate-x-1 transition-all shrink-0 pt-1 hidden sm:block">
                            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                ${isUrdu ? '<path d="m15 18-6-6 6-6"/>' : '<path d="m9 18 6-6-6-6"/>'}
                            </svg>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>


        <!-- Active Production Jobs Tracker -->
        <div class="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-xs mb-6">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                <div>
                    <h3 class="text-sm font-bold text-slate-900">${s.t('pipeline_title')}</h3>
                    <p class="text-xs text-slate-500">${s.t('pipeline_desc')}</p>
                </div>
                <button onclick="openNewWorkOrderModal()" class="px-3.5 py-1.5 bg-[#4885a6] hover:bg-[#3b7596] text-white text-xs font-bold rounded-lg shadow-xs transition self-start sm:self-auto">
                    ${s.t('btn_new_job')}
                </button>
            </div>

            <div class="divide-y divide-slate-100 mt-3">
                ${s.workOrders.slice(0, 5).map(wo => {
                    const innerPct = Math.min(100, Math.round((wo.inner_printed_sheets / (wo.target_quantity || 1)) * 100));
                    const outerPct = Math.min(100, Math.round((wo.outer_printed_covers / (wo.target_quantity || 1)) * 100));
                    const bindPct = Math.min(100, Math.round((wo.binding_assembled_qty / (wo.target_quantity || 1)) * 100));

                    return `
                        <div class="py-3 px-1 sm:px-2 hover:bg-slate-50/70 rounded-lg transition">
                            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                                <div class="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                                    <span class="font-mono text-[11px] sm:text-xs font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-300 shrink-0">${wo.work_order_no}</span>
                                    <h4 class="font-bold text-slate-800 text-xs">${wo.book_title || wo.book_article_id}</h4>
                                    <span class="text-[10px] px-2 py-0.5 rounded font-semibold shrink-0 ${getStatusBadge(wo.status)}">${s.t('status_' + wo.status)}</span>
                                </div>
                                <div class="flex items-center gap-1.5 sm:gap-2 shrink-0">
                                    <button onclick="openJobCardPrintModal('${wo.work_order_no}')" class="px-2.5 py-1 text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 rounded border border-slate-300">
                                        ${s.t('btn_print_job')}
                                    </button>
                                    <button onclick="openProgressUpdateModal('${wo.work_order_no}')" class="px-2.5 py-1 text-xs font-bold bg-blue-50 text-blue-700 hover:bg-blue-100 rounded border border-blue-200">
                                        ${s.t('btn_update_progress')}
                                    </button>
                                </div>
                            </div>

                            <!-- 4 Stages Progress Bar (Responsive 1-col on mobile, 2-col on sm, 4-col on md) -->
                            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 text-xs">
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
    const s = window.apnStore;
    if (tabId !== 'dashboard' && !s.hasPermission(tabId)) {
        return renderAccessDenied(tabId);
    }
    switch (tabId) {
        case 'raw_materials': return renderRawMaterials();
        case 'books': return renderBooks();
        case 'work_orders': return renderWorkOrders();
        case 'printing': return renderProductionFloor('printing');
        case 'outer': return renderProductionFloor('outer');
        case 'binding': return renderProductionFloor('binding');
        case 'warehouse': return renderWarehouse();
        case 'damage': return renderDamageReport();
        case 'hr': return renderHR();
        case 'accounts': return renderAccounts();
        case 'excel_hub': return renderExcelHub();
        case 'users': return renderUserPermissions();
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
        <div class="bg-white rounded-xl border border-slate-200 p-3 sm:p-5 md:p-6 shadow-xs">
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

            <div class="overflow-x-auto -mx-3 sm:mx-0 px-3 sm:px-0 mt-4">
                <table class="w-full min-w-[640px] text-xs">
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
        <div class="bg-white rounded-xl border border-slate-200 p-3 sm:p-5 md:p-6 shadow-xs">
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
        <div class="bg-white rounded-xl border border-slate-200 p-3 sm:p-5 md:p-6 shadow-xs">
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

            <div class="overflow-x-auto -mx-3 sm:mx-0 px-3 sm:px-0 mt-4">
                <table class="w-full min-w-[640px] text-xs">
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
        <div class="bg-white rounded-xl border border-slate-200 p-3 sm:p-5 md:p-6 shadow-xs">
            <div class="pb-4 border-b border-slate-100 flex items-center justify-between">
                <div>
                    <h3 class="text-base font-bold text-slate-900">${isUrdu ? 'پروڈکشن فلور مانیٹرنگ' : 'Production Floor Monitoring'}</h3>
                    <p class="text-xs text-slate-500">${isUrdu ? 'انر فارمے چھپائی، ٹائٹل لیمینیشن، اور بائنڈنگ اسمبلی کی تفصیلی ورکنگ' : 'Inner text printing, cover thermal lamination, and binding assembly tracking'}</p>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-4 sm:mt-6">
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
        <div class="bg-white rounded-xl border border-slate-200 p-3 sm:p-5 md:p-6 shadow-xs">
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

            <div class="overflow-x-auto -mx-3 sm:mx-0 px-3 sm:px-0 mt-4">
                <table class="w-full min-w-[640px] text-xs">
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
        <div class="bg-white rounded-xl border border-slate-200 p-3 sm:p-5 md:p-6 shadow-xs">
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

            <div class="overflow-x-auto -mx-3 sm:mx-0 px-3 sm:px-0 mt-4">
                <table class="w-full min-w-[640px] text-xs">
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
        <div class="bg-white rounded-xl border border-slate-200 p-3 sm:p-5 md:p-6 shadow-xs">
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

// ==================== ACCESS RESTRICTED GUARD VIEW ====================

function renderAccessDenied(tabId) {
    const s = window.apnStore;
    const isUrdu = s.lang === 'ur';

    return `
        <div class="bg-white rounded-xl border border-red-200 p-8 shadow-sm text-center max-w-2xl mx-auto my-12">
            <div class="w-16 h-16 rounded-2xl bg-red-50 text-red-600 border border-red-200 flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                </svg>
            </div>
            <h3 class="text-xl font-extrabold text-slate-800 mb-2">
                ${isUrdu ? 'رسائی محدود ہے (Access Restricted)' : 'Access Restricted'}
            </h3>
            <p class="text-sm text-slate-600 mb-4 leading-relaxed">
                ${isUrdu 
                    ? `آپ کے موجودہ اکاؤنٹ <b>(${s.currentUser?.full_name || 'User'})</b> کو اس ماڈیول <b>(${getTabTitle(tabId)})</b> تک رسائی کی اجازت نہیں ہے۔` 
                    : `Your current login <b>(${s.currentUser?.full_name || 'User'})</b> does not have permissions to access <b>(${getTabTitle(tabId)})</b>.`}
            </p>
            <div class="flex items-center justify-center gap-3 pt-2">
                <button onclick="switchTab('dashboard')" class="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-lg transition">
                    ← ${isUrdu ? 'ڈیش بورڈ پر جائیں' : 'Back to Dashboard'}
                </button>
                <button onclick="openUserSwitcherModal()" class="px-4 py-2 bg-[#4885a6] hover:bg-[#3d7391] text-white font-bold text-xs rounded-lg transition shadow-xs">
                    👤 ${isUrdu ? 'صارف اکاؤنٹ تبدیل کریں' : 'Switch User'}
                </button>
            </div>
        </div>
    `;
}

// ==================== 10. HR & PAYROLL MODULE ====================

function renderHR() {
    const s = window.apnStore;
    const isUrdu = s.lang === 'ur';
    const subTab = s.hrSubTab || 'employees';

    return `
        <div class="bg-white rounded-xl border border-slate-200 p-4 sm:p-6 shadow-xs">
            <!-- HR Header & Subtabs -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 border border-cyan-200/80 flex items-center justify-center shrink-0 shadow-xs">
                        ${APN_ICONS.hr}
                    </div>
                    <div>
                        <h3 class="text-base font-bold text-slate-900">${s.t('dept_hr_title')}</h3>
                        <p class="text-xs text-slate-500">${s.t('dept_hr_sub')}</p>
                    </div>
                </div>
                
                <!-- Subtab Switcher -->
                <div class="flex items-center bg-slate-100 p-1 rounded-lg text-xs font-semibold self-start sm:self-auto gap-1">
                    <button onclick="setHRSubTab('employees')" class="px-3 py-1.5 rounded-md transition ${subTab === 'employees' ? 'bg-white text-cyan-800 shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900'}">
                        👥 ${isUrdu ? 'ملازمین کا ریکارڈ' : 'Employees Master'}
                    </button>
                    <button onclick="setHRSubTab('attendance')" class="px-3 py-1.5 rounded-md transition ${subTab === 'attendance' ? 'bg-white text-cyan-800 shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900'}">
                        📅 ${isUrdu ? 'روزانہ حاضری' : 'Daily Attendance'}
                    </button>
                    <button onclick="setHRSubTab('payroll')" class="px-3 py-1.5 rounded-md transition ${subTab === 'payroll' ? 'bg-white text-cyan-800 shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900'}">
                        💵 ${isUrdu ? 'تنخواہیں و پرچیاں' : 'Payroll & Slips'}
                    </button>
                </div>
            </div>

            <!-- Subtab Content -->
            <div class="mt-4">
                ${subTab === 'employees' ? renderHREmployeesList() : ''}
                ${subTab === 'attendance' ? renderHRAttendanceSheet() : ''}
                ${subTab === 'payroll' ? renderHRPayrollSheet() : ''}
            </div>
        </div>
    `;
}

function setHRSubTab(subTab) {
    window.apnStore.hrSubTab = subTab;
    renderApp();
}

function renderHREmployeesList() {
    const s = window.apnStore;
    const isUrdu = s.lang === 'ur';
    const emps = s.employees || [];

    return `
        <div>
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div class="text-xs text-slate-500">
                    ${isUrdu ? `کل رجسٹرڈ ملازمین: <b>${emps.length}</b>` : `Total Staff: <b>${emps.length}</b>`}
                </div>
                <button onclick="openAddEmployeeModal()" class="px-3 py-1.5 bg-[#4885a6] hover:bg-[#3b7596] text-white text-xs font-bold rounded-lg shadow-xs transition flex items-center gap-1.5 self-start sm:self-auto">
                    <span>+</span>
                    <span>${isUrdu ? 'نیا ملازم شامل کریں' : 'Add Employee'}</span>
                </button>
            </div>

            <div class="overflow-x-auto border border-slate-200 rounded-lg">
                <table class="w-full text-xs text-right border-collapse">
                    <thead class="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                        <tr>
                            <th class="p-2.5">کوڈ</th>
                            <th class="p-2.5">نام ملازم</th>
                            <th class="p-2.5">ولدیت</th>
                            <th class="p-2.5">شعبہ (ڈیپارٹمنٹ)</th>
                            <th class="p-2.5">عہدہ (Designation)</th>
                            <th class="p-2.5">بنیادی تنخواہ (PKR)</th>
                            <th class="p-2.5">فون نمبر</th>
                            <th class="p-2.5">حالت</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100">
                        ${emps.length === 0 ? `
                            <tr><td colspan="8" class="p-6 text-center text-slate-400">کوئی ملازم درج نہیں ہے۔ نیا ملازم شامل کریں۔</td></tr>
                        ` : emps.map(e => `
                            <tr class="hover:bg-slate-50/80 transition">
                                <td class="p-2.5 font-mono font-bold text-slate-600">${e.emp_code}</td>
                                <td class="p-2.5 font-bold text-slate-800">${e.full_name}</td>
                                <td class="p-2.5 text-slate-500">${e.father_name || '—'}</td>
                                <td class="p-2.5"><span class="px-2 py-0.5 bg-blue-50 text-blue-700 rounded font-semibold">${e.department}</span></td>
                                <td class="p-2.5 text-slate-700">${e.designation}</td>
                                <td class="p-2.5 font-mono font-bold text-slate-900">${(e.basic_salary || 0).toLocaleString()}</td>
                                <td class="p-2.5 font-mono text-slate-600" dir="ltr">${e.phone || '—'}</td>
                                <td class="p-2.5">
                                    <span class="px-2 py-0.5 rounded text-[11px] font-semibold ${e.status === 'ACTIVE' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}">
                                        ${e.status === 'ACTIVE' ? 'فعال' : e.status}
                                    </span>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

function renderHRAttendanceSheet() {
    const s = window.apnStore;
    const isUrdu = s.lang === 'ur';
    const emps = s.employees || [];
    const todayStr = new Date().toISOString().slice(0, 10);

    return `
        <div>
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <div class="flex items-center gap-3">
                    <label class="text-xs font-bold text-slate-700">${isUrdu ? 'تاریخ حاضری:' : 'Attendance Date:'}</label>
                    <input type="date" id="attDateInput" value="${todayStr}" class="p-1.5 text-xs bg-white border border-slate-300 rounded font-mono font-semibold" />
                </div>
                <div class="flex items-center gap-2">
                    <button onclick="markAllPresent()" class="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded shadow-xs transition">
                        ✓ ${isUrdu ? 'سب کو حاضر مارک کریں' : 'Mark All Present'}
                    </button>
                    <button onclick="saveAttendanceSheet()" class="px-3.5 py-1.5 bg-[#4885a6] hover:bg-[#3b7596] text-white text-xs font-bold rounded shadow-xs transition">
                        💾 ${isUrdu ? 'حاضری محفوظ کریں' : 'Save Attendance'}
                    </button>
                </div>
            </div>

            <div class="overflow-x-auto border border-slate-200 rounded-lg">
                <table class="w-full text-xs text-right border-collapse">
                    <thead class="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                        <tr>
                            <th class="p-2.5">کوڈ</th>
                            <th class="p-2.5">ملازم کا نام</th>
                            <th class="p-2.5">شعبہ و عہدہ</th>
                            <th class="p-2.5">حاضری کی حالت</th>
                            <th class="p-2.5">اوور ٹائم (گھنٹے)</th>
                            <th class="p-2.5">نوٹس / ریمارکس</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100">
                        ${emps.map(e => `
                            <tr class="hover:bg-slate-50/80 transition" data-emp-id="${e.id}">
                                <td class="p-2.5 font-mono font-bold text-slate-600">${e.emp_code}</td>
                                <td class="p-2.5 font-bold text-slate-800">${e.full_name}</td>
                                <td class="p-2.5 text-slate-600">${e.department} - ${e.designation}</td>
                                <td class="p-2.5">
                                    <select class="att-status-select p-1 border border-slate-300 rounded bg-white text-xs font-semibold">
                                        <option value="PRESENT" selected>حاضر (Present)</option>
                                        <option value="ABSENT">غیر حاضر (Absent)</option>
                                        <option value="LEAVE">رخصت (Leave)</option>
                                        <option value="HALF_DAY">ہاف ڈے (Half Day)</option>
                                    </select>
                                </td>
                                <td class="p-2.5">
                                    <input type="number" step="0.5" min="0" value="0" class="att-ot-input w-20 p-1 border border-slate-300 rounded text-center font-mono" />
                                </td>
                                <td class="p-2.5">
                                    <input type="text" placeholder="اختیاری..." class="att-notes-input w-full p-1 border border-slate-200 rounded text-xs" />
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

function markAllPresent() {
    document.querySelectorAll('.att-status-select').forEach(sel => sel.value = 'PRESENT');
}

async function saveAttendanceSheet() {
    const s = window.apnStore;
    const isUrdu = s.lang === 'ur';
    const date = document.getElementById('attDateInput')?.value || new Date().toISOString().slice(0, 10);
    const rows = document.querySelectorAll('tbody tr[data-emp-id]');
    
    for (const row of rows) {
        const empId = parseInt(row.getAttribute('data-emp-id'));
        const status = row.querySelector('.att-status-select')?.value || 'PRESENT';
        const ot = parseFloat(row.querySelector('.att-ot-input')?.value || 0);
        const notes = row.querySelector('.att-notes-input')?.value || '';

        await APN_API.recordAttendance({
            employee_id: empId,
            date: date,
            status: status,
            overtime_hours: ot,
            notes: notes
        });
    }

    alert(isUrdu ? 'تاریخ ' + date + ' کی حاضری کامیابی سے محفوظ کر لی گئی ہے۔' : 'Attendance saved successfully for ' + date);
    refreshData().then(() => renderApp());
}

function renderHRPayrollSheet() {
    const s = window.apnStore;
    const isUrdu = s.lang === 'ur';
    const payrolls = s.payrolls || [];
    const currentMonth = new Date().toISOString().slice(0, 7);

    return `
        <div>
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <div class="flex items-center gap-3">
                    <label class="text-xs font-bold text-slate-700">${isUrdu ? 'تنخواہ کا مہینہ:' : 'Payroll Month:'}</label>
                    <input type="month" id="payrollMonthInput" value="${currentMonth}" class="p-1.5 text-xs bg-white border border-slate-300 rounded font-mono font-semibold" />
                </div>
                <button onclick="generateMonthlyPayroll()" class="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded shadow-xs transition flex items-center gap-1.5 self-start sm:self-auto">
                    <span>⚡</span>
                    <span>${isUrdu ? 'اس مہینے کی تنخواہیں جنریٹ کریں' : 'Generate Monthly Payroll'}</span>
                </button>
            </div>

            <div class="overflow-x-auto border border-slate-200 rounded-lg">
                <table class="w-full text-xs text-right border-collapse">
                    <thead class="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                        <tr>
                            <th class="p-2.5">ملازم</th>
                            <th class="p-2.5">مہینہ</th>
                            <th class="p-2.5">بنیادی تنخواہ</th>
                            <th class="p-2.5">اوور ٹائم / الاؤنس</th>
                            <th class="p-2.5">ایڈوانس / کٹوتی</th>
                            <th class="p-2.5">خالص واجب الادا (Net)</th>
                            <th class="p-2.5">حالت</th>
                            <th class="p-2.5">ایکشن</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100">
                        ${payrolls.length === 0 ? `
                            <tr><td colspan="8" class="p-6 text-center text-slate-400">کوئی تنخواہ سلپ موجود نہیں ہے۔ اوپر دیے گئے بٹن سے اس مہینے کی تنخواہیں جنریٹ کریں۔</td></tr>
                        ` : payrolls.map(p => `
                            <tr class="hover:bg-slate-50/80 transition">
                                <td class="p-2.5">
                                    <div class="font-bold text-slate-800">${p.employee_name || 'ملازم'}</div>
                                    <div class="text-[10px] text-slate-400 font-mono">${p.emp_code || ''}</div>
                                </td>
                                <td class="p-2.5 font-mono text-slate-600">${p.month_year}</td>
                                <td class="p-2.5 font-mono text-slate-800">${(p.basic_salary || 0).toLocaleString()}</td>
                                <td class="p-2.5 font-mono text-emerald-700">+${((p.overtime_amount || 0) + (p.allowance || 0)).toLocaleString()}</td>
                                <td class="p-2.5 font-mono text-rose-600">-${((p.advance_deduction || 0) + (p.deductions || 0)).toLocaleString()}</td>
                                <td class="p-2.5 font-mono font-bold text-slate-900">${(p.net_salary || 0).toLocaleString()} PKR</td>
                                <td class="p-2.5">
                                    <span class="px-2 py-0.5 rounded text-[10px] font-semibold ${p.payment_status === 'PAID' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}">
                                        ${p.payment_status === 'PAID' ? 'ادا شدہ (PAID)' : 'واجب الادا (PENDING)'}
                                    </span>
                                </td>
                                <td class="p-2.5 flex items-center gap-1.5">
                                    <button onclick="openSalarySlipModal(${p.id})" class="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded text-xs font-semibold">
                                        📄 پرچی
                                    </button>
                                    ${p.payment_status !== 'PAID' ? `
                                        <button onclick="markPayrollPaid(${p.id})" class="px-2.5 py-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-300 rounded text-xs font-bold">
                                            ✓ ادائیگی
                                        </button>
                                    ` : ''}
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

async function generateMonthlyPayroll() {
    const s = window.apnStore;
    const isUrdu = s.lang === 'ur';
    const month = document.getElementById('payrollMonthInput')?.value || new Date().toISOString().slice(0, 7);
    const emps = s.employees || [];

    if (emps.length === 0) {
        alert(isUrdu ? 'کوئی ملازم موجود نہیں ہے۔ پہلے ملازمین شامل کریں۔' : 'No employees found.');
        return;
    }

    let count = 0;
    for (const e of emps) {
        if (e.status !== 'ACTIVE') continue;
        const basic = e.basic_salary || 0;
        const net = basic;

        await APN_API.addPayroll({
            employee_id: e.id,
            employee_name: e.full_name,
            emp_code: e.emp_code,
            designation: e.designation,
            month_year: month,
            basic_salary: basic,
            overtime_amount: 0,
            allowance: 0,
            deductions: 0,
            advance_deduction: 0,
            net_salary: net,
            payment_status: 'PENDING',
            payment_method: 'CASH'
        });
        count++;
    }

    alert(isUrdu ? `${count} ملازمین کی تنخواہیں برائے ${month} کامیابی سے تیار کر لی گئی ہیں۔` : `Generated payroll for ${count} staff.`);
    refreshData().then(() => renderApp());
}

async function markPayrollPaid(payrollId) {
    const isUrdu = window.apnStore.lang === 'ur';
    await APN_API.paySalary(payrollId, 'PAID', 'CASH');
    alert(isUrdu ? 'تنخواہ کی ادائیگی کا اندراج کامیابی سے ہو گیا۔' : 'Salary marked as paid.');
    refreshData().then(() => renderApp());
}

function openSalarySlipModal(payrollId) {
    const s = window.apnStore;
    const p = (s.payrolls || []).find(x => x.id === payrollId);
    if (!p) return;

    const modal = document.getElementById('modalContainer');
    modal.innerHTML = `
        <div class="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
            <div class="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 text-right print:p-0 print:border-none">
                <!-- Slip Header -->
                <div class="text-center pb-4 border-b border-slate-200">
                    <h2 class="text-lg font-extrabold text-slate-900">عباسی پبلیکیشن نیٹ ورک (APN)</h2>
                    <p class="text-xs text-slate-500 font-semibold">تنخواہ سلپ / Salary Pay Slip</p>
                    <span class="inline-block mt-1 px-2.5 py-0.5 bg-blue-50 text-blue-700 text-xs font-mono font-bold rounded-full">
                        ماہ: ${p.month_year}
                    </span>
                </div>

                <!-- Employee Info Grid -->
                <div class="grid grid-cols-2 gap-2 text-xs my-4 p-3 bg-slate-50 rounded-xl">
                    <div><b>نام ملازم:</b> ${p.employee_name || '—'}</div>
                    <div><b>کوڈ:</b> <span class="font-mono">${p.emp_code || '—'}</span></div>
                    <div><b>عہدہ:</b> ${p.designation || '—'}</div>
                    <div><b>طریقہ ادائیگی:</b> ${p.payment_method || 'CASH'}</div>
                </div>

                <!-- Earnings and Deductions Table -->
                <table class="w-full text-xs text-right border border-slate-200 rounded-lg overflow-hidden mb-4">
                    <thead class="bg-slate-100 text-slate-700 font-bold">
                        <tr><th class="p-2">تفصیلات</th><th class="p-2 text-left">رقم (PKR)</th></tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100">
                        <tr><td class="p-2">بنیادی تنخواہ (Basic)</td><td class="p-2 text-left font-mono">${(p.basic_salary || 0).toLocaleString()}</td></tr>
                        <tr><td class="p-2">اوور ٹائم الاؤنس</td><td class="p-2 text-left font-mono text-emerald-700">+${(p.overtime_amount || 0).toLocaleString()}</td></tr>
                        <tr><td class="p-2">پیشگی تنخواہ کٹوتی (Advance)</td><td class="p-2 text-left font-mono text-rose-600">-${(p.advance_deduction || 0).toLocaleString()}</td></tr>
                        <tr class="bg-slate-50 font-extrabold text-sm"><td class="p-2.5">خالص تنخواہ (Net Payable)</td><td class="p-2.5 text-left font-mono text-blue-700">${(p.net_salary || 0).toLocaleString()} PKR</td></tr>
                    </tbody>
                </table>

                <!-- Signatures -->
                <div class="flex justify-between items-end pt-8 mt-6 border-t border-slate-200 text-xs text-slate-500">
                    <div class="text-center"><div class="w-32 border-b border-slate-400 mb-1"></div>ملازم کے دستخط</div>
                    <div class="text-center"><div class="w-32 border-b border-slate-400 mb-1"></div>اکاؤنٹس انچارج</div>
                </div>

                <!-- Modal Actions -->
                <div class="flex justify-end gap-2 mt-6 pt-3 border-t border-slate-100 print:hidden">
                    <button onclick="document.getElementById('modalContainer').innerHTML = ''" class="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition">بند کریں</button>
                    <button onclick="window.print()" class="px-4 py-2 bg-[#4885a6] hover:bg-[#3d7391] text-white text-xs font-bold rounded-lg shadow-xs transition">🖨️ پرنٹ پرچی</button>
                </div>
            </div>
        </div>
    `;
}

function openAddEmployeeModal() {
    const isUrdu = window.apnStore.lang === 'ur';
    const modal = document.getElementById('modalContainer');
    modal.innerHTML = `
        <div class="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
            <div class="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 text-right">
                <div class="flex justify-between items-center pb-3 border-b border-slate-100">
                    <h3 class="text-base font-bold text-slate-800">${isUrdu ? 'نئے ملازم کا اندراج' : 'Register New Employee'}</h3>
                    <button onclick="document.getElementById('modalContainer').innerHTML = ''" class="text-slate-400 hover:text-slate-600 font-bold">✕</button>
                </div>

                <form onsubmit="saveNewEmployee(event)" class="space-y-3 mt-4 text-xs">
                    <div>
                        <label class="block font-bold text-slate-700 mb-1">ملازم کوڈ (Emp Code) *</label>
                        <input type="text" id="newEmpCode" required value="EMP-${String((window.apnStore.employees.length + 1)).padStart(3, '0')}" class="w-full p-2 border border-slate-300 rounded font-mono font-bold" />
                    </div>
                    <div>
                        <label class="block font-bold text-slate-700 mb-1">ملازم کا مکمل نام *</label>
                        <input type="text" id="newEmpName" required placeholder="مثلاً: محمد وقاص" class="w-full p-2 border border-slate-300 rounded font-bold" />
                    </div>
                    <div class="grid grid-cols-2 gap-2">
                        <div>
                            <label class="block font-bold text-slate-700 mb-1">ولدیت</label>
                            <input type="text" id="newEmpFather" placeholder="والد کا نام" class="w-full p-2 border border-slate-300 rounded" />
                        </div>
                        <div>
                            <label class="block font-bold text-slate-700 mb-1">فون نمبر</label>
                            <input type="text" id="newEmpPhone" placeholder="0300-1234567" class="w-full p-2 border border-slate-300 rounded font-mono" />
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-2">
                        <div>
                            <label class="block font-bold text-slate-700 mb-1">شعبہ (Department) *</label>
                            <select id="newEmpDept" class="w-full p-2 border border-slate-300 rounded bg-white">
                                <option value="پرنٹنگ فلور">پرنٹنگ فلور (Printing)</option>
                                <option value="بائنڈنگ یونٹ">بائنڈنگ یونٹ (Binding)</option>
                                <option value="خام مال اسٹور">خام مال اسٹور (Store)</option>
                                <option value="فنش گڈز گودام">فنش گڈز گودام (Warehouse)</option>
                                <option value="پری پریس و ڈیزائننگ">پری پریس و ڈیزائننگ</option>
                                <option value="اکاؤنٹس و فنانس">اکاؤنٹس و فنانس</option>
                                <option value="ایڈمنسٹریشن">ایڈمنسٹریشن</option>
                            </select>
                        </div>
                        <div>
                            <label class="block font-bold text-slate-700 mb-1">عہدہ (Designation) *</label>
                            <input type="text" id="newEmpDesig" required placeholder="مثلاً: پریس ماسٹر" class="w-full p-2 border border-slate-300 rounded" />
                        </div>
                    </div>
                    <div>
                        <label class="block font-bold text-slate-700 mb-1">ماہانہ بنیادی تنخواہ (PKR) *</label>
                        <input type="number" id="newEmpSalary" required min="0" value="40000" class="w-full p-2 border border-slate-300 rounded font-mono font-bold" />
                    </div>

                    <div class="flex justify-end gap-2 pt-3 border-t border-slate-100">
                        <button type="button" onclick="document.getElementById('modalContainer').innerHTML = ''" class="px-4 py-2 bg-slate-100 text-slate-700 font-bold rounded-lg">منسوخ</button>
                        <button type="submit" class="px-5 py-2 bg-[#4885a6] text-white font-bold rounded-lg shadow-xs">محفوظ کریں</button>
                    </div>
                </form>
            </div>
        </div>
    `;
}

async function saveNewEmployee(event) {
    event.preventDefault();
    const isUrdu = window.apnStore.lang === 'ur';

    const emp = {
        emp_code: document.getElementById('newEmpCode').value.trim(),
        full_name: document.getElementById('newEmpName').value.trim(),
        father_name: document.getElementById('newEmpFather').value.trim(),
        phone: document.getElementById('newEmpPhone').value.trim(),
        department: document.getElementById('newEmpDept').value,
        designation: document.getElementById('newEmpDesig').value.trim(),
        basic_salary: parseFloat(document.getElementById('newEmpSalary').value || 0),
        status: 'ACTIVE'
    };

    await APN_API.addEmployee(emp);
    document.getElementById('modalContainer').innerHTML = '';
    alert(isUrdu ? 'نیا ملازم کامیابی سے شامل ہو گیا ہے۔' : 'Employee added successfully.');
    refreshData().then(() => renderApp());
}


// ==================== 11. CHART OF ACCOUNTS & FINANCE MODULE ====================

function renderAccounts() {
    const s = window.apnStore;
    const isUrdu = s.lang === 'ur';
    const subTab = s.accountsSubTab || 'accounts';

    return `
        <div class="bg-white rounded-xl border border-slate-200 p-4 sm:p-6 shadow-xs">
            <!-- COA Header & Subtabs -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200/80 flex items-center justify-center shrink-0 shadow-xs">
                        ${APN_ICONS.accounts}
                    </div>
                    <div>
                        <h3 class="text-base font-bold text-slate-900">${s.t('dept_accounts_title')}</h3>
                        <p class="text-xs text-slate-500">${s.t('dept_accounts_sub')}</p>
                    </div>
                </div>

                <!-- Subtabs -->
                <div class="flex items-center bg-slate-100 p-1 rounded-lg text-xs font-semibold self-start sm:self-auto gap-1">
                    <button onclick="setAccountsSubTab('accounts')" class="px-3 py-1.5 rounded-md transition ${subTab === 'accounts' ? 'bg-white text-emerald-800 shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900'}">
                        📂 ${isUrdu ? 'کھاتہ جات چارٹ' : 'Chart of Accounts'}
                    </button>
                    <button onclick="setAccountsSubTab('vouchers')" class="px-3 py-1.5 rounded-md transition ${subTab === 'vouchers' ? 'bg-white text-emerald-800 shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900'}">
                        📝 ${isUrdu ? 'روزنامچہ و واؤچرز' : 'Journal Vouchers'}
                    </button>
                    <button onclick="setAccountsSubTab('trial_balance')" class="px-3 py-1.5 rounded-md transition ${subTab === 'trial_balance' ? 'bg-white text-emerald-800 shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900'}">
                        ⚖️ ${isUrdu ? 'میزانِ محاکمہ' : 'Trial Balance'}
                    </button>
                </div>
            </div>

            <!-- Content -->
            <div class="mt-4">
                ${subTab === 'accounts' ? renderCOAAccountsList() : ''}
                ${subTab === 'vouchers' ? renderCOAVouchersList() : ''}
                ${subTab === 'trial_balance' ? renderCOATrialBalance() : ''}
            </div>
        </div>
    `;
}

function setAccountsSubTab(subTab) {
    window.apnStore.accountsSubTab = subTab;
    renderApp();
}

function renderCOAAccountsList() {
    const s = window.apnStore;
    const isUrdu = s.lang === 'ur';
    const accounts = s.accounts || [];

    const typeBadges = {
        ASSET: 'bg-blue-50 text-blue-700 border-blue-200',
        LIABILITY: 'bg-rose-50 text-rose-700 border-rose-200',
        EQUITY: 'bg-purple-50 text-purple-700 border-purple-200',
        REVENUE: 'bg-emerald-50 text-emerald-700 border-emerald-200',
        EXPENSE: 'bg-amber-50 text-amber-700 border-amber-200'
    };

    return `
        <div>
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div class="text-xs text-slate-500">
                    ${isUrdu ? `کل ایکٹو کھاتہ جات: <b>${accounts.length}</b>` : `Total Accounts: <b>${accounts.length}</b>`}
                </div>
                <button onclick="openAddAccountModal()" class="px-3 py-1.5 bg-[#4885a6] hover:bg-[#3b7596] text-white text-xs font-bold rounded-lg shadow-xs transition flex items-center gap-1.5 self-start sm:self-auto">
                    <span>+</span>
                    <span>${isUrdu ? 'نیا کھاتہ شامل کریں' : 'Add Account'}</span>
                </button>
            </div>

            <div class="overflow-x-auto border border-slate-200 rounded-lg">
                <table class="w-full text-xs text-right border-collapse">
                    <thead class="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                        <tr>
                            <th class="p-2.5">کوڈ</th>
                            <th class="p-2.5">عنوانِ کھاتہ (اردو)</th>
                            <th class="p-2.5">Account Title (English)</th>
                            <th class="p-2.5">نوعیت (Type)</th>
                            <th class="p-2.5">ذیلی کیٹیگری</th>
                            <th class="p-2.5">موجودہ بیلنس (PKR)</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100">
                        ${accounts.map(a => `
                            <tr class="hover:bg-slate-50/80 transition">
                                <td class="p-2.5 font-mono font-bold text-slate-700">${a.account_code}</td>
                                <td class="p-2.5 font-bold text-slate-900">${a.account_name_ur}</td>
                                <td class="p-2.5 font-medium text-slate-600">${a.account_name_en}</td>
                                <td class="p-2.5">
                                    <span class="px-2 py-0.5 rounded text-[10px] font-bold border ${typeBadges[a.account_type] || 'bg-slate-100 text-slate-600'}">
                                        ${a.account_type}
                                    </span>
                                </td>
                                <td class="p-2.5 text-slate-500">${a.subcategory || '—'}</td>
                                <td class="p-2.5 font-mono font-bold text-slate-900">${(a.current_balance || 0).toLocaleString()}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

function renderCOAVouchersList() {
    const s = window.apnStore;
    const isUrdu = s.lang === 'ur';
    const vouchers = s.vouchers || [];

    return `
        <div>
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div class="text-xs text-slate-500">
                    ${isUrdu ? `کل واؤچرز اندراج: <b>${vouchers.length}</b>` : `Total Vouchers: <b>${vouchers.length}</b>`}
                </div>
                <button onclick="openNewVoucherModal()" class="px-3 py-1.5 bg-[#4885a6] hover:bg-[#3b7596] text-white text-xs font-bold rounded-lg shadow-xs transition flex items-center gap-1.5 self-start sm:self-auto">
                    <span>+</span>
                    <span>${isUrdu ? 'نیا واؤچر درج کریں' : 'New Voucher'}</span>
                </button>
            </div>

            <div class="overflow-x-auto border border-slate-200 rounded-lg">
                <table class="w-full text-xs text-right border-collapse">
                    <thead class="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                        <tr>
                            <th class="p-2.5">واؤچر نمبر</th>
                            <th class="p-2.5">قسم (Type)</th>
                            <th class="p-2.5">تاریخ</th>
                            <th class="p-2.5">تفصیل / Narration</th>
                            <th class="p-2.5">کل رقم (PKR)</th>
                            <th class="p-2.5">اندراج کنندہ</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100">
                        ${vouchers.length === 0 ? `
                            <tr><td colspan="6" class="p-6 text-center text-slate-400">کوئی واؤچر موجود نہیں ہے۔ اوپر دیے گئے بٹن سے نیا واؤچر بنائیں۔</td></tr>
                        ` : vouchers.map(v => `
                            <tr class="hover:bg-slate-50/80 transition">
                                <td class="p-2.5 font-mono font-bold text-slate-700">${v.voucher_no}</td>
                                <td class="p-2.5">
                                    <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
                                        ${v.voucher_type}
                                    </span>
                                </td>
                                <td class="p-2.5 font-mono text-slate-500">${(v.voucher_date || '').slice(0, 10)}</td>
                                <td class="p-2.5 text-slate-800">${v.description || '—'}</td>
                                <td class="p-2.5 font-mono font-bold text-slate-900">${(v.total_amount || 0).toLocaleString()}</td>
                                <td class="p-2.5 text-slate-600">${v.created_by || 'Admin'}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

function renderCOATrialBalance() {
    const s = window.apnStore;
    const isUrdu = s.lang === 'ur';
    const accounts = s.accounts || [];

    let totalDebit = 0;
    let totalCredit = 0;

    const rows = accounts.map(a => {
        const bal = a.current_balance || 0;
        let debit = 0;
        let credit = 0;
        if (a.account_type === 'ASSET' || a.account_type === 'EXPENSE') {
            if (bal >= 0) debit = bal; else credit = Math.abs(bal);
        } else {
            if (bal >= 0) credit = bal; else debit = Math.abs(bal);
        }
        totalDebit += debit;
        totalCredit += credit;
        return { ...a, debit, credit };
    });

    const isBalanced = Math.abs(totalDebit - totalCredit) < 0.01;

    return `
        <div>
            <!-- Balanced Status Banner -->
            <div class="flex items-center justify-between p-3.5 rounded-xl border mb-4 ${isBalanced ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-rose-50 border-rose-200 text-rose-800'}">
                <div class="flex items-center gap-2">
                    <span class="text-base">${isBalanced ? '✓' : '⚠️'}</span>
                    <span class="font-bold text-xs">
                        ${isBalanced 
                            ? (isUrdu ? 'میزانِ محاکمہ متوازن ہے (Trial Balance is Balanced: Total Debit = Total Credit)' : 'Trial Balance is perfectly balanced.') 
                            : (isUrdu ? 'توجہ فرمائیں! ڈیبٹ اور کریڈٹ میں فرق موجود ہے۔' : 'Warning: Debit and Credit are not equal.')}
                    </span>
                </div>
                <button onclick="window.print()" class="px-3 py-1 bg-white border border-slate-300 rounded text-xs font-bold text-slate-700 shadow-2xs hover:bg-slate-50">
                    🖨️ پرنٹ
                </button>
            </div>

            <div class="overflow-x-auto border border-slate-200 rounded-lg">
                <table class="w-full text-xs text-right border-collapse">
                    <thead class="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                        <tr>
                            <th class="p-2.5">کوڈ</th>
                            <th class="p-2.5">عنوانِ کھاتہ</th>
                            <th class="p-2.5">قسم</th>
                            <th class="p-2.5 text-left">ڈیبٹ (Debit PKR)</th>
                            <th class="p-2.5 text-left">کریڈٹ (Credit PKR)</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100">
                        ${rows.map(r => `
                            <tr class="hover:bg-slate-50/80 transition">
                                <td class="p-2.5 font-mono text-slate-600">${r.account_code}</td>
                                <td class="p-2.5 font-bold text-slate-800">${r.account_name_ur} <span class="text-[10px] text-slate-400 font-normal">(${r.account_name_en})</span></td>
                                <td class="p-2.5 text-slate-500">${r.account_type}</td>
                                <td class="p-2.5 text-left font-mono font-bold ${r.debit > 0 ? 'text-slate-900' : 'text-slate-300'}">${r.debit > 0 ? r.debit.toLocaleString() : '—'}</td>
                                <td class="p-2.5 text-left font-mono font-bold ${r.credit > 0 ? 'text-slate-900' : 'text-slate-300'}">${r.credit > 0 ? r.credit.toLocaleString() : '—'}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                    <tfoot class="bg-slate-100 font-extrabold text-sm border-t-2 border-slate-300">
                        <tr>
                            <td colspan="3" class="p-3 text-right">کل میزان (Total Balanced)</td>
                            <td class="p-3 text-left font-mono text-blue-700">${totalDebit.toLocaleString()} PKR</td>
                            <td class="p-3 text-left font-mono text-blue-700">${totalCredit.toLocaleString()} PKR</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    `;
}

function openAddAccountModal() {
    const isUrdu = window.apnStore.lang === 'ur';
    const modal = document.getElementById('modalContainer');
    modal.innerHTML = `
        <div class="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
            <div class="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 text-right">
                <div class="flex justify-between items-center pb-3 border-b border-slate-100">
                    <h3 class="text-base font-bold text-slate-800">${isUrdu ? 'نیا کھاتہ کھولیں (New Account)' : 'Open New Account'}</h3>
                    <button onclick="document.getElementById('modalContainer').innerHTML = ''" class="text-slate-400 hover:text-slate-600 font-bold">✕</button>
                </div>

                <form onsubmit="saveNewAccount(event)" class="space-y-3 mt-4 text-xs">
                    <div>
                        <label class="block font-bold text-slate-700 mb-1">کھاتہ کوڈ (Account Code) *</label>
                        <input type="text" id="newAccCode" required placeholder="مثلاً: 1080 یا 5090" class="w-full p-2 border border-slate-300 rounded font-mono font-bold" />
                    </div>
                    <div>
                        <label class="block font-bold text-slate-700 mb-1">عنوانِ کھاتہ اردو میں *</label>
                        <input type="text" id="newAccUr" required placeholder="مثلاً: فیکٹری کرایہ کھاتہ" class="w-full p-2 border border-slate-300 rounded font-bold" />
                    </div>
                    <div>
                        <label class="block font-bold text-slate-700 mb-1">Account Title (English) *</label>
                        <input type="text" id="newAccEn" required placeholder="e.g. Factory Rent Expense" class="w-full p-2 border border-slate-300 rounded" />
                    </div>
                    <div class="grid grid-cols-2 gap-2">
                        <div>
                            <label class="block font-bold text-slate-700 mb-1">کھاتے کی بنیادی قسم *</label>
                            <select id="newAccType" class="w-full p-2 border border-slate-300 rounded bg-white">
                                <option value="ASSET">اثاثہ جات (ASSET)</option>
                                <option value="LIABILITY">واجبات (LIABILITY)</option>
                                <option value="EQUITY">سرمایہ (EQUITY)</option>
                                <option value="REVENUE">آمدنی (REVENUE)</option>
                                <option value="EXPENSE" selected>اخراجات (EXPENSE)</option>
                            </select>
                        </div>
                        <div>
                            <label class="block font-bold text-slate-700 mb-1">ابتدائی بیلنس (Opening PKR)</label>
                            <input type="number" id="newAccBal" min="0" value="0" class="w-full p-2 border border-slate-300 rounded font-mono" />
                        </div>
                    </div>

                    <div class="flex justify-end gap-2 pt-3 border-t border-slate-100">
                        <button type="button" onclick="document.getElementById('modalContainer').innerHTML = ''" class="px-4 py-2 bg-slate-100 text-slate-700 font-bold rounded-lg">منسوخ</button>
                        <button type="submit" class="px-5 py-2 bg-[#4885a6] text-white font-bold rounded-lg shadow-xs">کھاتہ محفوظ کریں</button>
                    </div>
                </form>
            </div>
        </div>
    `;
}

async function saveNewAccount(event) {
    event.preventDefault();
    const isUrdu = window.apnStore.lang === 'ur';

    const acc = {
        account_code: document.getElementById('newAccCode').value.trim(),
        account_name_ur: document.getElementById('newAccUr').value.trim(),
        account_name_en: document.getElementById('newAccEn').value.trim(),
        account_type: document.getElementById('newAccType').value,
        opening_balance: parseFloat(document.getElementById('newAccBal').value || 0)
    };

    await APN_API.addAccount(acc);
    document.getElementById('modalContainer').innerHTML = '';
    alert(isUrdu ? 'نیا کھاتہ کامیابی سے شامل ہو گیا ہے۔' : 'Account created successfully.');
    refreshData().then(() => renderApp());
}

function openNewVoucherModal() {
    const s = window.apnStore;
    const isUrdu = s.lang === 'ur';
    const accounts = s.accounts || [];

    const optionsHtml = accounts.map(a => `<option value="${a.id}">${a.account_code} - ${a.account_name_ur} (${a.account_name_en})</option>`).join('');

    const modal = document.getElementById('modalContainer');
    modal.innerHTML = `
        <div class="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
            <div class="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl border border-slate-200 text-right">
                <div class="flex justify-between items-center pb-3 border-b border-slate-100">
                    <h3 class="text-base font-bold text-slate-800">${isUrdu ? 'نیا مالیاتی واؤچر درج کریں' : 'New Journal Voucher Entry'}</h3>
                    <button onclick="document.getElementById('modalContainer').innerHTML = ''" class="text-slate-400 hover:text-slate-600 font-bold">✕</button>
                </div>

                <form onsubmit="saveNewVoucher(event)" class="space-y-3 mt-4 text-xs">
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        <div>
                            <label class="block font-bold text-slate-700 mb-1">واؤچر کی قسم *</label>
                            <select id="vType" class="w-full p-2 border border-slate-300 rounded bg-white font-bold">
                                <option value="CPV">کیش ادائیگی (CPV - Cash Payment)</option>
                                <option value="CRV">کیش وصولی (CRV - Cash Receipt)</option>
                                <option value="BPV">بینک ادائیگی (BPV - Bank Payment)</option>
                                <option value="BRV">بینک وصولی (BRV - Bank Receipt)</option>
                                <option value="JV" selected>جرنل واؤچر (JV - Journal Voucher)</option>
                            </select>
                        </div>
                        <div class="sm:col-span-2">
                            <label class="block font-bold text-slate-700 mb-1">تفصیل / Narration *</label>
                            <input type="text" id="vDesc" required placeholder="مثلاً: کاغذ سپلائر کو نقد ادائیگی بذریعہ چیک" class="w-full p-2 border border-slate-300 rounded" />
                        </div>
                    </div>

                    <!-- Entries Rows -->
                    <div>
                        <div class="flex justify-between items-center mb-1">
                            <label class="font-bold text-slate-700">کھاتہ جات کے اندراجات (ڈیبٹ اور کریڈٹ برابر ہونے چاہئیں):</label>
                            <button type="button" onclick="addVoucherRow()" class="px-2 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded font-bold text-[11px]">+ مزید قطار</button>
                        </div>
                        <div id="voucherRowsContainer" class="space-y-2 max-h-56 overflow-y-auto pr-1">
                            <div class="voucher-row flex items-center gap-2 bg-slate-50 p-2 rounded border border-slate-200">
                                <select class="v-acc w-1/2 p-1.5 border border-slate-300 rounded bg-white text-xs" required>
                                    ${optionsHtml}
                                </select>
                                <input type="number" min="0" placeholder="ڈیبٹ Debit" oninput="updateVoucherTotals()" class="v-debit w-1/4 p-1.5 border border-slate-300 rounded text-left font-mono" value="0" />
                                <input type="number" min="0" placeholder="کریڈٹ Credit" oninput="updateVoucherTotals()" class="v-credit w-1/4 p-1.5 border border-slate-300 rounded text-left font-mono" value="0" />
                            </div>
                            <div class="voucher-row flex items-center gap-2 bg-slate-50 p-2 rounded border border-slate-200">
                                <select class="v-acc w-1/2 p-1.5 border border-slate-300 rounded bg-white text-xs" required>
                                    ${optionsHtml}
                                </select>
                                <input type="number" min="0" placeholder="ڈیبٹ Debit" oninput="updateVoucherTotals()" class="v-debit w-1/4 p-1.5 border border-slate-300 rounded text-left font-mono" value="0" />
                                <input type="number" min="0" placeholder="کریڈٹ Credit" oninput="updateVoucherTotals()" class="v-credit w-1/4 p-1.5 border border-slate-300 rounded text-left font-mono" value="0" />
                            </div>
                        </div>
                    </div>

                    <!-- Totals Display -->
                    <div class="flex items-center justify-between p-2.5 bg-slate-100 rounded-lg text-xs font-bold border border-slate-300">
                        <div>کل ڈیبٹ: <span id="vTotDebit" class="font-mono text-blue-700">0</span> PKR</div>
                        <div>کل کریڈٹ: <span id="vTotCredit" class="font-mono text-blue-700">0</span> PKR</div>
                        <div id="vBalanceNotice" class="text-rose-600">برابر نہیں ہیں ✕</div>
                    </div>

                    <div class="flex justify-end gap-2 pt-3 border-t border-slate-100">
                        <button type="button" onclick="document.getElementById('modalContainer').innerHTML = ''" class="px-4 py-2 bg-slate-100 text-slate-700 font-bold rounded-lg">منسوخ</button>
                        <button type="submit" id="vSubmitBtn" disabled class="px-5 py-2 bg-slate-400 text-white font-bold rounded-lg shadow-xs cursor-not-allowed">واؤچر محفوظ کریں</button>
                    </div>
                </form>
            </div>
        </div>
    `;
}

function addVoucherRow() {
    const s = window.apnStore;
    const accounts = s.accounts || [];
    const optionsHtml = accounts.map(a => `<option value="${a.id}">${a.account_code} - ${a.account_name_ur} (${a.account_name_en})</option>`).join('');

    const container = document.getElementById('voucherRowsContainer');
    const div = document.createElement('div');
    div.className = 'voucher-row flex items-center gap-2 bg-slate-50 p-2 rounded border border-slate-200';
    div.innerHTML = `
        <select class="v-acc w-1/2 p-1.5 border border-slate-300 rounded bg-white text-xs" required>
            ${optionsHtml}
        </select>
        <input type="number" min="0" placeholder="ڈیبٹ Debit" oninput="updateVoucherTotals()" class="v-debit w-1/4 p-1.5 border border-slate-300 rounded text-left font-mono" value="0" />
        <input type="number" min="0" placeholder="کریڈٹ Credit" oninput="updateVoucherTotals()" class="v-credit w-1/4 p-1.5 border border-slate-300 rounded text-left font-mono" value="0" />
        <button type="button" onclick="this.parentElement.remove(); updateVoucherTotals();" class="text-red-500 font-bold px-1 hover:text-red-700">✕</button>
    `;
    container.appendChild(div);
}

function updateVoucherTotals() {
    let totDebit = 0;
    let totCredit = 0;
    document.querySelectorAll('.v-debit').forEach(inp => totDebit += parseFloat(inp.value || 0));
    document.querySelectorAll('.v-credit').forEach(inp => totCredit += parseFloat(inp.value || 0));

    document.getElementById('vTotDebit').innerText = totDebit.toLocaleString();
    document.getElementById('vTotCredit').innerText = totCredit.toLocaleString();

    const isBalanced = totDebit > 0 && Math.abs(totDebit - totCredit) < 0.01;
    const notice = document.getElementById('vBalanceNotice');
    const btn = document.getElementById('vSubmitBtn');

    if (isBalanced) {
        notice.innerText = 'متوازن ہے ✓';
        notice.className = 'text-emerald-700 font-bold';
        btn.disabled = false;
        btn.className = 'px-5 py-2 bg-[#4885a6] hover:bg-[#3b7596] text-white font-bold rounded-lg shadow-xs cursor-pointer';
    } else {
        notice.innerText = totDebit === 0 ? 'رقم درج کریں' : 'برابر نہیں ہیں ✕';
        notice.className = 'text-rose-600 font-bold';
        btn.disabled = true;
        btn.className = 'px-5 py-2 bg-slate-400 text-white font-bold rounded-lg shadow-xs cursor-not-allowed';
    }
}

async function saveNewVoucher(event) {
    event.preventDefault();
    const isUrdu = window.apnStore.lang === 'ur';

    const vType = document.getElementById('vType').value;
    const vDesc = document.getElementById('vDesc').value.trim();

    const entries = [];
    document.querySelectorAll('.voucher-row').forEach(row => {
        const accId = parseInt(row.querySelector('.v-acc').value);
        const debit = parseFloat(row.querySelector('.v-debit').value || 0);
        const credit = parseFloat(row.querySelector('.v-credit').value || 0);
        if (debit > 0 || credit > 0) {
            entries.push({
                account_id: accId,
                debit: debit,
                credit: credit,
                narration: vDesc
            });
        }
    });

    await APN_API.addVoucher({
        voucher_type: vType,
        description: vDesc,
        entries: entries
    });

    document.getElementById('modalContainer').innerHTML = '';
    alert(isUrdu ? 'واؤچر کامیابی سے محفوظ کر لیا گیا ہے۔' : 'Voucher saved successfully.');
    refreshData().then(() => renderApp());
}


// ==================== 12. EXCEL BULK HUB MODULE ====================

function renderExcelHub() {
    const s = window.apnStore;
    const isUrdu = s.lang === 'ur';
    const uploadType = s.excelUploadType || 'raw_materials';

    return `
        <div class="bg-white rounded-xl border border-slate-200 p-4 sm:p-6 shadow-xs">
            <!-- Header -->
            <div class="flex items-center gap-3 pb-4 border-b border-slate-100">
                <div class="w-10 h-10 rounded-xl bg-green-50 text-green-700 border border-green-200/80 flex items-center justify-center shrink-0 shadow-xs">
                    ${APN_ICONS.excel_hub}
                </div>
                <div>
                    <h3 class="text-base font-bold text-slate-900">${s.t('dept_excel_title')}</h3>
                    <p class="text-xs text-slate-500">${s.t('dept_excel_sub')}</p>
                </div>
            </div>

            <!-- Hero: QuickBooks Packages Old File One-Click Import -->
            <div class="my-5 p-4 rounded-xl bg-gradient-to-r from-emerald-50 via-teal-50 to-sky-50 border border-emerald-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <div class="flex items-center gap-2">
                        <span class="px-2 py-0.5 rounded bg-emerald-600 text-white text-[10px] font-bold">پرانا کوئیک بکس ڈیٹا</span>
                        <h4 class="font-bold text-slate-800 text-sm">report 05-aug-2026 Pakeges.xlsx</h4>
                    </div>
                    <p class="text-xs text-slate-600 mt-1">
                        اس ایکسل فائل میں کوئیک بکس سے ایکسپورٹ شدہ <b>730 پیکیجنگ اور خام مال آئٹمز</b> (تھرمل رولز، بارکوڈ، گٹہ ٹرے، پیپر وغیرہ) موجود ہیں۔
                    </p>
                </div>
                <button onclick="importPackagesReportNow()" id="btnImportPackages" class="px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-extrabold rounded-xl shadow-md transition shrink-0 flex items-center gap-2 self-start md:self-auto">
                    <span>⚡</span>
                    <span>${isUrdu ? 'یہ 730 آئٹمز اب درآمد کریں' : 'Import 730 Items Now'}</span>
                </button>
            </div>

            <!-- Module Target Selector -->
            <div class="mt-6">
                <h4 class="font-bold text-xs text-slate-700 mb-2">1. ایکسل فائل کی کیٹیگری منتخب کریں:</h4>
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                    <button onclick="setExcelType('raw_materials')" class="p-3 rounded-xl border text-center transition ${uploadType === 'raw_materials' ? 'border-[#4885a6] bg-blue-50/50 text-[#1b3240] font-bold ring-2 ring-[#4885a6]/20' : 'border-slate-200 bg-white hover:bg-slate-50'}">
                        📦 خام مال و اسٹاک
                    </button>
                    <button onclick="setExcelType('books')" class="p-3 rounded-xl border text-center transition ${uploadType === 'books' ? 'border-[#4885a6] bg-blue-50/50 text-[#1b3240] font-bold ring-2 ring-[#4885a6]/20' : 'border-slate-200 bg-white hover:bg-slate-50'}">
                        📚 کتب ماسٹر (Books)
                    </button>
                    <button onclick="setExcelType('accounts')" class="p-3 rounded-xl border text-center transition ${uploadType === 'accounts' ? 'border-[#4885a6] bg-blue-50/50 text-[#1b3240] font-bold ring-2 ring-[#4885a6]/20' : 'border-slate-200 bg-white hover:bg-slate-50'}">
                        📊 چارٹ آف اکاؤنٹ
                    </button>
                    <button onclick="setExcelType('employees')" class="p-3 rounded-xl border text-center transition ${uploadType === 'employees' ? 'border-[#4885a6] bg-blue-50/50 text-[#1b3240] font-bold ring-2 ring-[#4885a6]/20' : 'border-slate-200 bg-white hover:bg-slate-50'}">
                        👥 ملازمین کی فہرست
                    </button>
                </div>
            </div>

            <!-- Download Template & Upload Area -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <!-- Left: Download Template -->
                <div class="p-4 rounded-xl border border-slate-200 bg-slate-50 flex flex-col justify-between">
                    <div>
                        <h4 class="font-bold text-slate-800 text-xs mb-1">نمونہ ایکسل ٹیمپلیٹ ڈاؤنلوڈ کریں:</h4>
                        <p class="text-xs text-slate-500 leading-relaxed">
                            اس خالی ایکسل فارمیٹ میں اپنے پرانے کالمز بھر کر اپلوڈ کریں۔ کالمز کے نام پہلے سے سیٹ ہیں۔
                        </p>
                    </div>
                    <button onclick="downloadExcelTemplate('${uploadType}')" class="mt-4 px-4 py-2 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 font-bold text-xs rounded-lg shadow-2xs transition flex items-center justify-center gap-2">
                        <span>📥</span>
                        <span>${isUrdu ? 'نمونہ ٹیمپلیٹ فائل ڈاؤنلوڈ (.xlsx)' : 'Download Template (.xlsx)'}</span>
                    </button>
                </div>

                <!-- Right: File Drop / Pick -->
                <div class="p-4 rounded-xl border-2 border-dashed border-slate-300 hover:border-[#4885a6] bg-white transition flex flex-col items-center justify-center text-center">
                    <svg class="w-8 h-8 text-slate-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                    </svg>
                    <p class="text-xs font-bold text-slate-700">ایکسل فائل یہاں ڈراپ کریں یا منتخب کریں</p>
                    <p class="text-[10px] text-slate-400 mt-0.5">سپورٹڈ فائلز: .xlsx, .xls, .csv</p>
                    <input type="file" id="excelFileInput" accept=".xlsx,.xls,.csv" onchange="handleExcelFileSelect(event)" class="mt-3 text-xs" />
                </div>
            </div>

            <!-- Preview & Confirm Area -->
            <div id="excelPreviewContainer" class="mt-6 ${s.uploadedPreview ? '' : 'hidden'}">
                ${s.uploadedPreview ? renderExcelPreviewTable() : ''}
            </div>
        </div>
    `;
}

function setExcelType(type) {
    window.apnStore.excelUploadType = type;
    window.apnStore.uploadedPreview = null;
    renderApp();
}

async function importPackagesReportNow() {
    const isUrdu = window.apnStore.lang === 'ur';
    const btn = document.getElementById('btnImportPackages');
    if (btn) {
        btn.disabled = true;
        btn.innerHTML = `<span>⏳</span><span>درآمد ہو رہا ہے...</span>`;
    }

    try {
        const res = await APN_API.importPackagesReport();
        alert(isUrdu 
            ? `مبارک ہو! کوئیک بکس پیکیجز فائل سے ${res.total_processed || 730} آئٹمز کامیابی سے درآمد کر لیے گئے ہیں۔ اب آپ خام مال اسٹور میں دیکھ سکتے ہیں۔` 
            : `Successfully imported ${res.total_processed || 730} items into Raw Materials Store.`);
        await refreshData();
        renderApp();
    } catch (e) {
        alert("امپورٹ کے دوران خرابی: " + e.message);
        if (btn) btn.disabled = false;
    }
}

function handleExcelFileSelect(event) {
    const file = event.target.files[0];
    if (!file) return;

    if (typeof XLSX === 'undefined') {
        alert("SheetJS لائبریری ابھی لوڈ ہو رہی ہے، براہِ کرم 2 سیکنڈ بعد دوبارہ کوشش کریں۔");
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const firstSheet = workbook.SheetNames[0];
            const jsonData = XLSX.utils.sheet_to_json(workbook.Sheets[firstSheet]);

            if (!jsonData || jsonData.length === 0) {
                alert("منتخب کردہ ایکسل فائل خالی ہے!");
                return;
            }

            window.apnStore.uploadedPreview = {
                fileName: file.name,
                rowCount: jsonData.length,
                rows: jsonData
            };
            renderApp();
        } catch (err) {
            alert("ایکسل فائل پڑھنے میں خرابی: " + err.message);
        }
    };
    reader.readAsArrayBuffer(file);
}

function renderExcelPreviewTable() {
    const s = window.apnStore;
    const isUrdu = s.lang === 'ur';
    const p = s.uploadedPreview;
    if (!p) return '';

    const firstRow = p.rows[0] || {};
    const cols = Object.keys(firstRow);

    return `
        <div class="p-4 rounded-xl border border-blue-200 bg-blue-50/40">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3 pb-2 border-b border-blue-200">
                <div>
                    <h4 class="font-bold text-slate-800 text-xs">پیشگی معائنہ: ${p.fileName}</h4>
                    <p class="text-[11px] text-slate-500">کل قطاریں: <b>${p.rowCount}</b> • ٹارگٹ کیٹیگری: <b>${s.excelUploadType}</b></p>
                </div>
                <button onclick="executeExcelImport()" class="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-lg shadow-sm transition flex items-center gap-1.5 self-start sm:self-auto">
                    <span>✓</span>
                    <span>${isUrdu ? `یہ ${p.rowCount} ریکارڈز ERP میں شامل کریں` : `Confirm & Import ${p.rowCount} Rows`}</span>
                </button>
            </div>

            <div class="overflow-x-auto max-h-60 bg-white border border-slate-200 rounded-lg">
                <table class="w-full text-[11px] text-right border-collapse">
                    <thead class="bg-slate-100 font-bold text-slate-700 border-b border-slate-200 sticky top-0">
                        <tr>${cols.slice(0, 8).map(c => `<th class="p-2">${c}</th>`).join('')}</tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100">
                        ${p.rows.slice(0, 10).map(r => `
                            <tr class="hover:bg-slate-50">${cols.slice(0, 8).map(c => `<td class="p-2">${r[c] !== undefined ? r[c] : '—'}</td>`).join('')}</tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
            ${p.rowCount > 10 ? `<p class="text-[10px] text-slate-400 mt-1">صرف ابتدائی 10 قطاریں دکھائی جا رہی ہیں (کل: ${p.rowCount})</p>` : ''}
        </div>
    `;
}

async function executeExcelImport() {
    const s = window.apnStore;
    const isUrdu = s.lang === 'ur';
    const p = s.uploadedPreview;
    if (!p) return;

    const type = s.excelUploadType;
    try {
        if (type === 'raw_materials') {
            await APN_API.bulkImportRawMaterials(p.rows);
        } else if (type === 'books') {
            await APN_API.bulkImportBooks(p.rows);
        } else if (type === 'accounts') {
            await APN_API.bulkImportAccounts(p.rows);
        } else if (type === 'employees') {
            await APN_API.bulkImportEmployees(p.rows);
        }

        alert(isUrdu ? `${p.rowCount} ریکارڈز کامیابی سے درآمد ہو گئے ہیں۔` : `Imported ${p.rowCount} records successfully.`);
        s.uploadedPreview = null;
        await refreshData();
        renderApp();
    } catch (e) {
        alert("امپورٹ کے دوران خرابی: " + e.message);
    }
}

function downloadExcelTemplate(type) {
    if (typeof XLSX === 'undefined') {
        alert("SheetJS لائبریری ابھی لوڈ ہو رہی ہے، براہِ کرم ایک لمحہ بعد کلک کریں۔");
        return;
    }

    let data = [];
    let fileName = `apn_template_${type}.xlsx`;

    if (type === 'raw_materials') {
        data = [
            { name: "68 GSM Offset Paper (23x36)", category: "PAPER_INNER", size: "23x36", gsm: 68, unit: "REAMS", current_stock: 50, min_reorder_level: 10, unit_cost: 4500 },
            { name: "260 GSM Art Card (Gloss)", category: "CARD_OUTER", size: "20x30", gsm: 260, unit: "SHEETS", current_stock: 2000, min_reorder_level: 500, unit_cost: 15 }
        ];
    } else if (type === 'books') {
        data = [
            { article_id: "APN-BK-0201", title: "اردو قواعد و انشا - جماعت ششم", language: "Urdu", subject: "Urdu", page_count: 144, inner_paper_spec: "68 GSM Offset (23x36)", outer_card_spec: "260 GSM Art Card", colors: "4-Color", standard_cost_per_copy: 110 }
        ];
    } else if (type === 'accounts') {
        data = [
            { account_code: "1080", account_name_en: "Raw Material Warehouse Advance", account_name_ur: "خام مال گودام ایڈوانس", account_type: "ASSET", subcategory: "Current Asset", opening_balance: 50000 },
            { account_code: "5090", account_name_en: "Factory Generator Fuel", account_name_ur: "فیکٹری جنریٹر ڈیزل خرچ", account_type: "EXPENSE", subcategory: "Factory Overhead", opening_balance: 0 }
        ];
    } else if (type === 'employees') {
        data = [
            { emp_code: "EMP-010", full_name: "محمد عمران", father_name: "عبدالحمید", cnic: "35201-9988776-1", phone: "0300-9988776", department: "پرنٹنگ فلور", designation: "پریس ہیلپر", salary_type: "MONTHLY", basic_salary: 32000 }
        ];
    }

    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, fileName);
}


// ==================== 13. USER LIMITATIONS & ROLES MODULE ====================

function renderUserPermissions() {
    const s = window.apnStore;
    const isUrdu = s.lang === 'ur';
    const users = s.users || [];

    return `
        <div class="bg-white rounded-xl border border-slate-200 p-4 sm:p-6 shadow-xs">
            <!-- Header -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-200/80 flex items-center justify-center shrink-0 shadow-xs">
                        ${APN_ICONS.users}
                    </div>
                    <div>
                        <h3 class="text-base font-bold text-slate-900">${s.t('dept_users_title')}</h3>
                        <p class="text-xs text-slate-500">${s.t('dept_users_sub')}</p>
                    </div>
                </div>

                <div class="flex items-center gap-2">
                    <button onclick="openUserSwitcherModal()" class="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition">
                        👤 ${isUrdu ? 'لاگ اِن تبدیل کریں' : 'Switch User'}
                    </button>
                    <button onclick="openAddUserModal()" class="px-3 py-1.5 bg-[#4885a6] hover:bg-[#3b7596] text-white text-xs font-bold rounded-lg shadow-xs transition flex items-center gap-1.5">
                        <span>+</span>
                        <span>${isUrdu ? 'نیا صارف بنائیں' : 'Add User'}</span>
                    </button>
                </div>
            </div>

            <!-- Current Active User Notice -->
            <div class="my-4 p-3 bg-indigo-50/60 border border-indigo-200 rounded-xl flex items-center justify-between text-xs">
                <div class="flex items-center gap-2">
                    <span class="w-3 h-3 rounded-full bg-emerald-500"></span>
                    <span>${isUrdu ? 'موجودہ فعال لاگ اِن صارف:' : 'Currently Active User:'} <b>${s.currentUser?.full_name || 'Admin'}</b> (${s.currentUser?.role || 'ADMIN'})</span>
                </div>
                <span class="px-2 py-0.5 rounded bg-white font-mono text-[11px] font-bold text-indigo-700 border border-indigo-200">
                    Username: ${s.currentUser?.username || 'admin'}
                </span>
            </div>

            <!-- Users List Table -->
            <div class="overflow-x-auto border border-slate-200 rounded-lg mt-4">
                <table class="w-full text-xs text-right border-collapse">
                    <thead class="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                        <tr>
                            <th class="p-2.5">صارف کا نام</th>
                            <th class="p-2.5">مکمل نام</th>
                            <th class="p-2.5">رول (کردار)</th>
                            <th class="p-2.5">مجاز ماڈیولز (Permissions)</th>
                            <th class="p-2.5">ایکشن</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100">
                        ${users.map(u => `
                            <tr class="hover:bg-slate-50/80 transition">
                                <td class="p-2.5 font-mono font-bold text-slate-700">@${u.username}</td>
                                <td class="p-2.5 font-bold text-slate-900">${u.full_name}</td>
                                <td class="p-2.5">
                                    <span class="px-2 py-0.5 rounded text-[10px] font-bold ${u.role === 'ADMIN' ? 'bg-purple-100 text-purple-800' : 'bg-slate-100 text-slate-700'}">
                                        ${u.role}
                                    </span>
                                </td>
                                <td class="p-2.5">
                                    <div class="flex flex-wrap gap-1 max-w-md">
                                        ${(u.permissions || []).includes('*') ? `
                                            <span class="px-1.5 py-0.5 bg-emerald-50 text-emerald-700 rounded text-[10px] font-semibold">تمام ماڈیولز (All)</span>
                                        ` : (u.permissions || []).map(p => `
                                            <span class="px-1.5 py-0.5 bg-blue-50 text-blue-700 rounded text-[10px]">${p}</span>
                                        `).join('')}
                                    </div>
                                </td>
                                <td class="p-2.5 flex items-center gap-1.5">
                                    <button onclick="switchActiveUser(${u.id})" class="px-2.5 py-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded font-bold text-xs">
                                        سوئچ لاگ اِن
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

function openAddUserModal() {
    const isUrdu = window.apnStore.lang === 'ur';
    const modules = [
        { key: 'raw_materials', label: 'خام مال اسٹور' },
        { key: 'books', label: 'کتب ماسٹر و BOM' },
        { key: 'work_orders', label: 'ورک آرڈرز' },
        { key: 'printing', label: 'انر پرنٹنگ فلور' },
        { key: 'outer', label: 'کور و لیمینیشن' },
        { key: 'binding', label: 'بائنڈنگ یونٹ' },
        { key: 'warehouse', label: 'فنش گڈز گودام' },
        { key: 'damage', label: 'ڈیمیج و ویسٹیج لاگ' },
        { key: 'hr', label: 'ایچ آر و پے رول' },
        { key: 'accounts', label: 'چارٹ آف اکاؤنٹ و فنانس' },
        { key: 'excel_hub', label: 'ایکسل ڈیٹا امپورٹ' },
        { key: 'users', label: 'صارفین کی پرمیشنز' }
    ];

    const modal = document.getElementById('modalContainer');
    modal.innerHTML = `
        <div class="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
            <div class="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 text-right">
                <div class="flex justify-between items-center pb-3 border-b border-slate-100">
                    <h3 class="text-base font-bold text-slate-800">${isUrdu ? 'نیا صارف رجسٹر کریں' : 'Register New User'}</h3>
                    <button onclick="document.getElementById('modalContainer').innerHTML = ''" class="text-slate-400 hover:text-slate-600 font-bold">✕</button>
                </div>

                <form onsubmit="saveNewUser(event)" class="space-y-3 mt-4 text-xs">
                    <div class="grid grid-cols-2 gap-2">
                        <div>
                            <label class="block font-bold text-slate-700 mb-1">یوزر نام (Username) *</label>
                            <input type="text" id="newUsername" required placeholder="e.g. printer1" class="w-full p-2 border border-slate-300 rounded font-mono" />
                        </div>
                        <div>
                            <label class="block font-bold text-slate-700 mb-1">پاس ورڈ / پن کوڈ *</label>
                            <input type="password" id="newUserPass" required value="1234" class="w-full p-2 border border-slate-300 rounded font-mono" />
                        </div>
                    </div>
                    <div>
                        <label class="block font-bold text-slate-700 mb-1">صارف کا مکمل نام *</label>
                        <input type="text" id="newUserFullName" required placeholder="مثلاً: محمد سلیمان (پریس آپریٹر)" class="w-full p-2 border border-slate-300 rounded font-bold" />
                    </div>
                    <div>
                        <label class="block font-bold text-slate-700 mb-1">پری سیٹ رول (Preset Role)</label>
                        <select id="newUserRole" onchange="applyRolePreset(this.value)" class="w-full p-2 border border-slate-300 rounded bg-white">
                            <option value="CUSTOM">کسٹم اختیارات (Custom)</option>
                            <option value="ADMIN">ایڈمنسٹریٹر (تمام اختیارات)</option>
                            <option value="STORE">اسٹور انچارج (خام مال، ایکسل)</option>
                            <option value="FLOOR">فلور سپروائزر (ورک آرڈرز، پرنٹنگ، بائنڈنگ، ڈیمیج)</option>
                            <option value="WAREHOUSE">گودام انچارج (گودام، ورک آرڈرز)</option>
                            <option value="ACCOUNTS">اکاؤنٹس مینیجر (اکاؤنٹس، ایکسل)</option>
                            <option value="HR">ایچ آر آفیسر (ایچ آر، پے رول)</option>
                        </select>
                    </div>

                    <div>
                        <label class="block font-bold text-slate-700 mb-1.5">ماڈیولز کے اختیارات تفویض کریں:</label>
                        <div class="grid grid-cols-2 gap-1.5 p-2 bg-slate-50 rounded-lg border border-slate-200">
                            ${modules.map(m => `
                                <label class="flex items-center gap-1.5 cursor-pointer text-[11px]">
                                    <input type="checkbox" name="modulePerm" value="${m.key}" class="rounded text-[#4885a6]" />
                                    <span>${m.label}</span>
                                </label>
                            `).join('')}
                        </div>
                    </div>

                    <div class="flex justify-end gap-2 pt-3 border-t border-slate-100">
                        <button type="button" onclick="document.getElementById('modalContainer').innerHTML = ''" class="px-4 py-2 bg-slate-100 text-slate-700 font-bold rounded-lg">منسوخ</button>
                        <button type="submit" class="px-5 py-2 bg-[#4885a6] text-white font-bold rounded-lg shadow-xs">صارف محفوظ کریں</button>
                    </div>
                </form>
            </div>
        </div>
    `;
}

function applyRolePreset(role) {
    const checks = document.querySelectorAll('input[name="modulePerm"]');
    checks.forEach(c => c.checked = false);

    const map = {
        ADMIN: ['raw_materials', 'books', 'work_orders', 'printing', 'outer', 'binding', 'warehouse', 'damage', 'hr', 'accounts', 'excel_hub', 'users', 'admin'],
        STORE: ['raw_materials', 'excel_hub'],
        FLOOR: ['work_orders', 'printing', 'outer', 'binding', 'damage'],
        WAREHOUSE: ['warehouse', 'work_orders'],
        ACCOUNTS: ['accounts', 'excel_hub', 'damage'],
        HR: ['hr', 'excel_hub']
    };

    if (map[role]) {
        checks.forEach(c => {
            if (map[role].includes(c.value)) c.checked = true;
        });
    }
}

async function saveNewUser(event) {
    event.preventDefault();
    const isUrdu = window.apnStore.lang === 'ur';

    const username = document.getElementById('newUsername').value.trim();
    const password = document.getElementById('newUserPass').value.trim();
    const fullName = document.getElementById('newUserFullName').value.trim();
    const role = document.getElementById('newUserRole').value;

    const permissions = [];
    document.querySelectorAll('input[name="modulePerm"]:checked').forEach(c => permissions.push(c.value));
    if (role === 'ADMIN') permissions.push('*');

    await APN_API.addUser({
        username: username,
        password: password,
        full_name: fullName,
        role: role,
        permissions: permissions
    });

    document.getElementById('modalContainer').innerHTML = '';
    alert(isUrdu ? 'نیا صارف کامیابی سے شامل ہو گیا۔' : 'User added successfully.');
    refreshData().then(() => renderApp());
}

function openUserSwitcherModal() {
    const s = window.apnStore;
    const isUrdu = s.lang === 'ur';
    const users = s.users || [];

    const modal = document.getElementById('modalContainer');
    modal.innerHTML = `
        <div class="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
            <div class="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 text-right">
                <div class="flex justify-between items-center pb-3 border-b border-slate-100">
                    <h3 class="text-base font-bold text-slate-800">👤 ${isUrdu ? 'صارف اکاؤنٹ منتخب کریں (سوئچ لاگ اِن)' : 'Switch Active User Account'}</h3>
                    <button onclick="document.getElementById('modalContainer').innerHTML = ''" class="text-slate-400 hover:text-slate-600 font-bold">✕</button>
                </div>
                <p class="text-xs text-slate-500 mt-2">
                    ${isUrdu ? 'جس صارف سے لاگ اِن کریں گے، سسٹم اسی صارف کی پرمیشنز کے مطابق ماڈیولز دکھائے گا۔' : 'Switching users dynamically alters visible modules and access limits.'}
                </p>

                <div class="space-y-2 mt-4 max-h-72 overflow-y-auto pr-1">
                    ${users.map(u => `
                        <div onclick="switchActiveUser(${u.id})" class="p-3 rounded-xl border cursor-pointer transition flex items-center justify-between ${s.currentUser?.id === u.id || s.currentUser?.username === u.username ? 'border-[#4885a6] bg-blue-50/60 ring-2 ring-[#4885a6]/20' : 'border-slate-200 hover:bg-slate-50'}">
                            <div class="flex items-center gap-3">
                                <div class="w-8 h-8 rounded-full bg-[#1b3240] text-white flex items-center justify-center font-bold text-xs">
                                    ${(u.username || 'U')[0].toUpperCase()}
                                </div>
                                <div class="text-right">
                                    <div class="font-bold text-slate-800 text-xs">${u.full_name}</div>
                                    <div class="text-[10px] text-slate-400 font-mono">@${u.username} • <span class="font-semibold text-blue-700">${u.role}</span></div>
                                </div>
                            </div>
                            <span class="text-xs font-bold text-[#4885a6]">
                                ${s.currentUser?.id === u.id || s.currentUser?.username === u.username ? 'فعال ✓' : 'لاگ اِن کریں'}
                            </span>
                        </div>
                    `).join('')}
                </div>

                <div class="mt-4 pt-3 border-t border-slate-100 text-left">
                    <button onclick="document.getElementById('modalContainer').innerHTML = ''" class="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition">بند کریں</button>
                </div>
            </div>
        </div>
    `;
}

function switchActiveUser(userId) {
    const s = window.apnStore;
    const u = (s.users || []).find(x => x.id === userId);
    if (!u) return;

    s.setCurrentUser(u);
    document.getElementById('modalContainer').innerHTML = '';
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
        <div class="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 z-50 overflow-y-auto">
            <div class="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] flex flex-col p-4 sm:p-6 shadow-2xl border border-slate-200 my-auto">
                <div class="flex items-center justify-between pb-3 border-b border-slate-100 shrink-0">
                    <h3 class="text-base font-bold text-slate-900">${s.t('modal_new_wo_title')}</h3>
                    <button onclick="closeModal()" class="text-slate-400 hover:text-slate-600 text-lg font-bold">✕</button>
                </div>

                <form id="newWoForm" onsubmit="handleCreateWorkOrder(event)" class="space-y-4 mt-4 text-xs ${isUrdu ? 'text-right' : 'text-left'} overflow-y-auto pr-1 flex-1">
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

                    <div class="flex items-center justify-end gap-2 pt-3 border-t border-slate-100 shrink-0">
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
        <div class="fixed inset-0 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 z-50 overflow-y-auto">
            <div class="bg-white rounded-2xl max-w-2xl w-full max-h-[92vh] flex flex-col p-4 sm:p-6 shadow-2xl border border-slate-200 my-auto overflow-hidden">
                <div class="flex items-center justify-between pb-3 border-b border-slate-200 no-print shrink-0">
                    <span class="text-xs font-bold text-slate-500">${s.t('jc_preview_title')}</span>
                    <div class="flex items-center gap-2">
                        <button onclick="window.print()" class="px-3 sm:px-4 py-1.5 bg-[#4885a6] hover:bg-[#3b7596] text-white font-bold text-xs rounded-lg shadow flex items-center gap-1.5">
                            <span>🖨️</span> <span>${s.t('jc_btn_print')}</span>
                        </button>
                        <button onclick="closeModal()" class="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-lg">${s.t('jc_btn_close')}</button>
                    </div>
                </div>

                <!-- Printable Area with responsive scrolling -->
                <div class="overflow-y-auto flex-1 mt-4 pr-1">
                    <div id="printableJobCardArea" class="border-2 border-slate-800 p-4 sm:p-6 rounded-xl ${isUrdu ? 'text-right' : 'text-left'}">
                        <div class="flex flex-col sm:flex-row justify-between items-start border-b-2 border-slate-800 pb-4 gap-3">
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

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 my-4 text-xs">
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
                        <div class="overflow-x-auto">
                            <table class="w-full min-w-[480px] text-xs border border-slate-300 text-center">
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
                        </div>

                        <p class="text-[10px] text-slate-400 text-center mt-6">
                            ${s.t('jc_footer_note')}
                        </p>
                    </div>
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
        <div class="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 z-50 overflow-y-auto">
            <div class="bg-white rounded-2xl max-w-md w-full max-h-[90vh] flex flex-col p-4 sm:p-6 shadow-2xl border border-slate-200 my-auto">
                <div class="flex items-center justify-between pb-3 border-b border-slate-100 shrink-0">
                    <div>
                        <h3 class="text-base font-bold text-slate-900">${s.t('modal_log_title')}</h3>
                        <p class="text-xs text-[#4885a6] font-mono font-bold">${wo.work_order_no} - ${wo.book_title}</p>
                    </div>
                    <button onclick="closeModal()" class="text-slate-400 hover:text-slate-600 text-lg font-bold">✕</button>
                </div>

                <form onsubmit="handleUpdateProgress(event, '${wo.work_order_no}')" class="space-y-4 mt-4 text-xs ${isUrdu ? 'text-right' : 'text-left'} overflow-y-auto pr-1 flex-1">
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

                    <div class="flex items-center justify-end gap-2 pt-3 border-t border-slate-100 shrink-0">
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
        <div class="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 z-50 overflow-y-auto">
            <div class="bg-white rounded-2xl max-w-md w-full max-h-[90vh] flex flex-col p-4 sm:p-6 shadow-2xl border border-slate-200 my-auto">
                <div class="flex items-center justify-between pb-3 border-b border-slate-100 shrink-0">
                    <h3 class="text-base font-bold text-slate-900">${s.t('modal_add_mat_title')}</h3>
                    <button onclick="closeModal()" class="text-slate-400 hover:text-slate-600 text-lg font-bold">✕</button>
                </div>

                <form onsubmit="handleAddMaterial(event)" class="space-y-4 mt-4 text-xs ${isUrdu ? 'text-right' : 'text-left'} overflow-y-auto pr-1 flex-1">
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

                    <div class="flex items-center justify-end gap-2 pt-3 border-t border-slate-100 shrink-0">
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
        <div class="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 z-50 overflow-y-auto">
            <div class="bg-white rounded-2xl max-w-md w-full max-h-[90vh] flex flex-col p-4 sm:p-6 shadow-2xl border border-slate-200 my-auto">
                <div class="flex items-center justify-between pb-3 border-b border-slate-100 shrink-0">
                    <h3 class="text-base font-bold text-slate-900">${s.t('modal_inward_title')}</h3>
                    <button onclick="closeModal()" class="text-slate-400 hover:text-slate-600 text-lg font-bold">✕</button>
                </div>

                <form onsubmit="handleStockInward(event)" class="space-y-4 mt-4 text-xs ${isUrdu ? 'text-right' : 'text-left'} overflow-y-auto pr-1 flex-1">
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

                    <div class="flex items-center justify-end gap-2 pt-3 border-t border-slate-100 shrink-0">
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
        <div class="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 z-50 overflow-y-auto">
            <div class="bg-white rounded-2xl max-w-md w-full max-h-[90vh] flex flex-col p-4 sm:p-6 shadow-2xl border border-slate-200 my-auto">
                <div class="flex items-center justify-between pb-3 border-b border-slate-100 shrink-0">
                    <h3 class="text-base font-bold text-slate-900">${s.t('modal_add_book_title')}</h3>
                    <button onclick="closeModal()" class="text-slate-400 hover:text-slate-600 text-lg font-bold">✕</button>
                </div>

                <form onsubmit="handleAddBook(event)" class="space-y-4 mt-4 text-xs ${isUrdu ? 'text-right' : 'text-left'} overflow-y-auto pr-1 flex-1">
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

                    <div class="flex items-center justify-end gap-2 pt-3 border-t border-slate-100 shrink-0">
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
        <div class="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 z-50 overflow-y-auto">
            <div class="bg-white rounded-2xl max-w-xs w-full p-4 sm:p-6 shadow-2xl border border-slate-200 ${isUrdu ? 'text-right' : 'text-left'} my-auto">
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
window.toggleMobileSidebar = toggleMobileSidebar;
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
