"use strict";
const elmEx5 = document.getElementById('ex5');
const elmBtn_ex5 = elmEx5?.querySelector('#btn-ex5');
elmBtn_ex5?.addEventListener('click', getInfo5);
function getInfo5() {
    if (elmEx5) {
        const elmRes = elmEx5.querySelector('#result-ex5');
        const elmList = elmEx5.querySelectorAll('input.queryType-5');
        for (let i = 0; i < elmList.length; i++) {
            let elm = elmList[i];
            if (elm.checked && elmRes) {
                let elmSearch = elmEx5.querySelector(elm.value);
                elmRes.value = elmSearch?.outerHTML ?? '要素が見つかりません';
            }
        }
    }
}
