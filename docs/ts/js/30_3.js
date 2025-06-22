"use strict";
const elmEx3 = document.getElementById('ex3');
const elmEx3_1 = document.getElementById('ex3-1');
if (elmEx3 && elmEx3_1) {
    let btn = elmEx3_1.querySelector('.get');
    btn?.addEventListener('click', getInfo);
}
function getInfo() {
    if (elmEx3 && elmEx3_1) {
        const elm = elmEx3_1.querySelector('[name=ex3-search]:checked');
        let search = elm ? elm.value : '';
        searchAndGo(search);
    }
}
function searchAndGo(search) {
    if (elmEx3 && elmEx3_1) {
        let elmRes = elmEx3_1.querySelector('.result');
        let elmExp = elmEx3_1.querySelector('.searchExp');
        if (elmRes && elmExp) {
            let text = '';
            if (search === '') {
                text = '検索書式を選択してください';
            }
            else {
                let resList = elmEx3.querySelectorAll(search);
                elmExp.innerHTML = `<span style="background-color: #c8c8c8;">querySelectorAll('${search}')</span>`;
                for (let i = 0; i < resList.length; i++) {
                    text += resList[i].outerHTML + '\n';
                }
            }
            elmRes.value = text;
        }
    }
}
