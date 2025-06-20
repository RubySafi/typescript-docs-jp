"use strict";
const elmBtn = document.getElementById('btn');
elmBtn?.addEventListener('click', getInfo);
function getInfo() {
    const elmRes = document.getElementById('result');
    const elmList = document.getElementsByClassName('queryType-2');
    const elmEx2 = document.getElementById('ex2');
    let elm = null;
    let valid = false;
    for (let i = 0; i < elmList.length; i++) {
        const elmInput = elmList[i];
        if (elmInput.checked) {
            elm = elmEx2?.querySelector(elmInput.value);
            valid = true;
            break;
        }
    }
    if (elmRes !== null) {
        if (!valid) {
            elmRes.value = '検索条件を指定してください';
            return;
        }
        elmRes.value = elm?.outerHTML ?? '要素が存在しません';
    }
}
