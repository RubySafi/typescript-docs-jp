"use strict";
const btnA = document.getElementById('get-idA');
const btnB = document.getElementById('get-idB');
const btnX1 = document.getElementById('get-classX-1');
const btnX2 = document.getElementById('get-classX-2');
btnA?.addEventListener('click', () => getID('idA'));
btnB?.addEventListener('click', () => getID('idB'));
btnX1?.addEventListener('click', () => getClass('classX', 1));
btnX2?.addEventListener('click', () => getClass('classX', 2));
function getClass(cls, idx) {
    const elmList = document.getElementsByClassName(cls);
    const res = document.getElementById('result-ex1');
    if (res) {
        res.value = elmList?.[idx - 1].outerHTML ?? '要素がみつかりません';
    }
}
function getID(id) {
    const elm = document.getElementById(id);
    const res = document.getElementById('result-ex1');
    if (res) {
        res.value = elm?.outerHTML ?? '要素がみつかりません';
    }
}
