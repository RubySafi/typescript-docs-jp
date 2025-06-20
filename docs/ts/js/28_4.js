"use strict";
const elmEx4 = document.getElementById('ex4');
const elmBtn1_ex4 = elmEx4?.querySelector('#btn1-ex4');
const elmBtn2_ex4 = elmEx4?.querySelector('#btn2-ex4');
elmBtn1_ex4?.addEventListener('click', () => getInfo4('#idA-4 > p'));
elmBtn2_ex4?.addEventListener('click', () => getInfo4('p strong'));
function getInfo4(search) {
    const elmRes = elmEx4?.querySelector('#result-ex4');
    const elm = elmEx4?.querySelector(search);
    if (elmRes) {
        elmRes.value = elm?.outerHTML ?? '要素が見つかりません';
    }
}
