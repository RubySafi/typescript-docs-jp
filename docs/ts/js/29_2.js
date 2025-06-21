"use strict";
const elmEx2 = document.getElementById('ex2');
if (elmEx2) {
    const btnSwitch = elmEx2.querySelector('.switchState');
    const label = elmEx2.querySelector('#ex2-id1');
    const input = elmEx2.querySelector('#ex2-id2');
    const result = elmEx2.querySelector('.result');
    if (input && btnSwitch) {
        btnSwitch.addEventListener('click', () => {
            input.disabled = !input.disabled;
            updateInfo();
        });
        input.addEventListener('click', updateInfo);
    }
    function updateInfo() {
        if (label && input && result) {
            let html = '';
            let style = 'style="background-color: #ddd;"';
            html += `<strong>inputタグ</strong>\n`;
            html += `<ul>\n`;
            html += `<li>checked: <span ${style} >${input.checked}</span></li>\n`;
            html += `<li>disabled: <span ${style} >${input.disabled}</span></li>\n`;
            html += `<li>id: <span ${style} >${input.id}</span></li>\n`;
            html += `<li>class: <span ${style} >${input.className}</span></li>\n`;
            html += `</ul>\n`;
            html += `<strong>labelタグ</strong>\n`;
            html += `<ul>\n`;
            html += `<li>style.color: <span ${style} >${label.style.color}</span></li>\n`;
            html += `<li>style.backgroundColor: <span ${style} >${label.style.backgroundColor}</span></li>\n`;
            html += `</ul>`;
            result.innerHTML = html;
        }
    }
    updateInfo();
}
