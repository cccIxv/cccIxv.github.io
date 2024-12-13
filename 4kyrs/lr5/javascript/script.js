// Tabs
var tab;
var tabContent;

window.onload = function() {
    tabContent = document.getElementsByClassName('tabContent');
    tab = document.getElementsByClassName('tab');
    hideTabsContent(1);
}

function hideTabsContent(a) {
    for (var i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
        tab[i].classList.remove('whiteborder');
    }
}

document.getElementById('tabs').onclick = function(event) {
    var target = event.target;
    if (target.className == 'tab') {
        for (var i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
                showTabsContent(i);
                break;
            }
        }
    }
}

function showTabsContent(b) {
    if (tabContent[b].classList.contains('hide')) {
        hideTabsContent(0);
        tab[b].classList.add('whiteborder');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
}

// CSS Generator
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
