"use strict";
function getSampleValues() {
    let elm = document.getElementById('sample');
    let elm1 = document.getElementById('result1_innerText');
    let elm2 = document.getElementById('result1_textContent');
    let elm3 = document.getElementById('result1_innerHTML');
    elm1.value = elm.innerText;
    elm2.value = elm.textContent;
    elm3.value = elm.innerHTML;
}
