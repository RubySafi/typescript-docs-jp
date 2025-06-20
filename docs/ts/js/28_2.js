"use strict";
const elmBtn = document.getElementById('btn-ex2');
elmBtn?.addEventListener('click', getInfo);
function getInfo() {
    const elmRes = document.getElementById('result-ex2');
    const elmList = document.getElementsByClassName('queryType-2');
    const elmEx2 = document.getElementById('ex2');
    let elm = null;
    for (let i = 0; i < elmList.length; i++) {
        const elmInput = elmList[i];
        if (elmInput.checked && elmRes) {
            elm = elmEx2?.querySelector(elmInput.value);
            elmRes.value = elm?.outerHTML ?? '要素が存在しません';
            break;
        }
    }
}
