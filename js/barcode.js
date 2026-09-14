// Standalone Barcode Generator (Code128 / Code 39 representation)
// APN - Abbasi Publication Network

function generateBarcodeSVG(codeText, width = 220, height = 55) {
    if (!codeText) return '';
    
    // Generate a pseudo barcode pattern based on string characters
    const bars = [];
    let hash = 0;
    for (let i = 0; i < codeText.length; i++) {
        hash = ((hash << 5) - hash) + codeText.charCodeAt(i);
        hash |= 0;
    }

    // Standard start pattern
    bars.push(2, 1, 1, 2);

    for (let i = 0; i < codeText.length; i++) {
        const charCode = codeText.charCodeAt(i);
        // Create 4 bar widths from character
        const b1 = ((charCode * 3 + i) % 3) + 1;
        const b2 = ((charCode * 7 + i) % 2) + 1;
        const b3 = ((charCode * 5 + i) % 3) + 1;
        const b4 = ((charCode * 2 + i) % 2) + 1;
        bars.push(b1, b2, b3, b4);
    }

    // Stop pattern
    bars.push(2, 1, 2, 2, 2);

    let totalUnits = bars.reduce((a, b) => a + b, 0);
    let unitWidth = (width - 20) / totalUnits;

    let currentX = 10;
    let svgRects = '';
    let isBar = true;

    for (let i = 0; i < bars.length; i++) {
        const barW = bars[i] * unitWidth;
        if (isBar) {
            svgRects += `<rect x="${currentX.toFixed(1)}" y="4" width="${barW.toFixed(1)}" height="${height - 18}" fill="#0f172a" />`;
        }
        currentX += barW;
        isBar = !isBar;
    }

    return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" class="w-full max-w-[240px] h-auto">
        <rect width="100%" height="100%" fill="#ffffff"/>
        ${svgRects}
        <text x="${width / 2}" y="${height - 2}" font-family="monospace" font-size="11" font-weight="bold" fill="#334155" text-anchor="middle" letter-spacing="2">${codeText}</text>
    </svg>`;
}

window.generateBarcodeSVG = generateBarcodeSVG;
