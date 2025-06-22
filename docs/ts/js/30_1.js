"use strict";
const elmEx1 = document.getElementById('ex1');
const elmEx1_1 = document.getElementById('ex1-1');
if (elmEx1 && elmEx1_1) {
    let btn = elmEx1_1.querySelector('.get');
    btn?.addEventListener('click', getInfo);
}
function getInfo() {
    if (elmEx1 && elmEx1_1) {
        const elmList = elmEx1_1.querySelectorAll('[name=ex1-search]');
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
    if (elmEx1 && elmEx1_1) {
        let elmRes = elmEx1_1.querySelector('.result');
        let elmExp = elmEx1_1.querySelector('.searchExp');

        if (elmRes && elmExp) {
            let text = '';
            if (search === '') {
                text = '検索書式を選択してください';
            }
            else {
                let resList = elmEx1.querySelectorAll(search);
                elmExp.innerHTML = `<code>querySelectorAll('${search}')</code>`;
                for (const elm of resList) {
                    text += elm.outerHTML + '\n';
                }
            }
            elmRes.value = text;
        }
    }
}
