function updateCSS() {
    // Get inputs
    const borderRadius = document.getElementById('borderRadius').value;
    const borderRadiusValue = document.getElementById('borderRadiusValue');
    const display = document.getElementById('display').value;
    const fontSize = document.getElementById('fontSize').value;
    const fontSizeValue = document.getElementById('fontSizeValue');

    // Sync ranges and number inputs
    borderRadiusValue.value = borderRadius;
    document.getElementById('borderRadius').value = borderRadiusValue.value;
    fontSizeValue.value = fontSize;
    document.getElementById('fontSize').value = fontSizeValue.value;

    // Generate CSS
    const cssCode = `
        border-radius: ${borderRadius}px;
        display: ${display};
        font-size: ${fontSize}px;
    `.trim();

    // Display CSS in textarea
    document.getElementById('cssOutput').value = cssCode;

    // Apply styles to preview
    const preview = document.getElementById('preview');
    preview.style.borderRadius = `${borderRadius}px`;
    preview.style.display = display === 'none' ? 'block' : display;
    preview.style.fontSize = `${fontSize}px`;
}
function updateCSS() {
    // Get inputs
    const borderRadius = document.getElementById('borderRadius').value;
    const borderRadiusValue = document.getElementById('borderRadiusValue');
    const display = document.getElementById('display').value;
    const fontSize = document.getElementById('fontSize').value;
    const fontSizeValue = document.getElementById('fontSizeValue');

    // Sync ranges and number inputs
    borderRadiusValue.value = borderRadius;
    document.getElementById('borderRadius').value = borderRadiusValue.value;
    fontSizeValue.value = fontSize;
    document.getElementById('fontSize').value = fontSizeValue.value;

    // Generate CSS
    const cssCode = `
        border-radius: ${borderRadius}px;
        display: ${display};
        font-size: ${fontSize}px;
    `.trim();

    // Display CSS in textarea
    document.getElementById('cssOutput').value = cssCode;

    // Apply styles to preview
    const preview = document.getElementById('preview');
    preview.style.borderRadius = `${borderRadius}px`;
    preview.style.display = display === 'none' ? 'block' : display;
    preview.style.fontSize = `${fontSize}px`;
}
