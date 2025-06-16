"use strict";
function getChkInfo() {
    const chkA = document.getElementById('chkA');
    const chkB = document.getElementById('chkB');
    let text = 'checkbox の状態\n';
    text += `項目1 ... checked: ${chkA?.checked}, name:${chkA?.name}, value:${chkA?.value}\n`;
    text += `項目2 ... checked: ${chkB?.checked}, name:${chkB?.name}, value:${chkB?.value}\n`;
    alert(text);
}
