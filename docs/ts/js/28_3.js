"use strict";
const elmEx3 = document.getElementById('ex3');
const elmBtn = document.getElementById('btn-ex3');
elmBtn?.addEventListener('click', getInfo3);
function getInfo3() {
    const elmRes = document.getElementById('result-ex3');
    const elmList = document.getElementsByClassName('queryType-3');
    if (!elmRes || !elmEx3) {
        return;
    }
    for (let i = 0; i < elmList.length; i++) {
        const elmInput = elmList[i];
        if (elmInput.checked) {
            let elmSearchList = elmEx3.querySelectorAll(elmInput.value);
            let text = `検索結果: ${elmSearchList.length}件\n`;
            for (let i = 0; i < elmSearchList.length; i++) {
                text += elmSearchList[i].outerHTML + '\n';
            }
            elmRes.value = text;
            break;
        }
    }
}
