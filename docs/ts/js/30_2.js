"use strict";
const elmEx2 = document.getElementById('ex2');
const elmEx2_1 = document.getElementById('ex2-1');
if (elmEx2 && elmEx2_1) {
    let btn = elmEx2_1.querySelector('.get');
    btn?.addEventListener('click', getInfo);
}
function getInfo() {
    if (elmEx2 && elmEx2_1) {
        const elmList = elmEx2_1.querySelectorAll('[name=ex2-search]');
        let search = '';
        for (let i = 0; i < elmList.length; i++) {
            let elm = elmList[i];
            if (elm.checked) {
                search = elm.value;
                break;
            }
        }
        searchAndGo(search);
    }
}
function searchAndGo(search) {
    if (elmEx2 && elmEx2_1) {
        let elmRes = elmEx2_1.querySelector('.result');
        let elmExp = elmEx2_1.querySelector('.searchExp');
        if (elmRes && elmExp) {
            let text = '';
            if (search === '') {
                text = 'セレクタを選択してください';
            }
            else {
                let resList = elmEx2.querySelectorAll(search);
                elmExp.innerHTML = `<code>querySelectorAll('${search}')</code>`;
                for (const elm of resList) {
                    text += elm.outerHTML + '\n';
                }
            }
            elmRes.value = text;
        }
    }
}
