"use strict";
const elmBtn = document.getElementById('btn-3');
elmBtn?.addEventListener('click', getInfo3);
function getInfo3() {
    const elmRes = document.getElementById('result-3');
    const elmList = document.getElementsByClassName('queryType-3');
    const elmEx3 = document.getElementById('ex3');
    let valid = false;
    let search = '';
    for (let i = 0; i < elmList.length; i++) {
        const elmInput = elmList[i];
        if (elmInput.checked) {
            search = elmInput.value;
            valid = true;
            break;
        }
    }
    if (elmRes !== null && elmEx3 != undefined) {
        if (!valid) {
            elmRes.value = '検索条件を指定してください';
            return;
        }
        let elmSearchList = elmEx3.querySelectorAll(search);
        let text = `"検索結果: ${elmSearchList.length}件\n"`;
        for (let i = 0; i < elmSearchList.length; i++) {
            text += elmSearchList[i].outerHTML + '\n';
        }
        elmRes.value = text;
    }
}
