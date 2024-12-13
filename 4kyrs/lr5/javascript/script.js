function generate() {
    // Get values
    const rtl = document.getElementById('rtl').value;
    const rtr = document.getElementById('rtr').value;
    const rbr = document.getElementById('rbr').value;
    const rbl = document.getElementById('rbl').value;
    const backgroundOrigin = document.getElementById('backgroundOrigin').value;
    const backgroundPosition = document.getElementById('backgroundPosition').value;

    // Get text inputs and sync with range inputs
    document.getElementById('ttl').value = rtl;
    document.getElementById('ttr').value = rtr;
    document.getElementById('tbr').value = rbr;
    document.getElementById('tbl').value = rbl;

    // Generate CSS code
    const cssCode = `
        border-radius: ${rtl}px ${rtr}px ${rbr}px ${rbl}px;
        background-origin: ${backgroundOrigin};
        background-position: ${backgroundPosition};
    `.trim();

    // Display CSS in textarea
    document.getElementById('cssOutput').value = cssCode;

    // Apply styles to preview block
    const block = document.getElementById('block');
    block.style.borderRadius = `${rtl}px ${rtr}px ${rbr}px ${rbl}px`;
    block.style.backgroundOrigin = backgroundOrigin;
    block.style.backgroundPosition = backgroundPosition;
}
