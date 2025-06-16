"use strict";
function getNumberInfo() {
    const input = document.getElementById('NumberInput');
    const min = input?.min;
    const max = input?.max;
    const step = input?.step;
    const valInput = input?.value;
    const val1 = Number(input?.value);
    const val2 = input?.valueAsNumber;
    let text = `設定　min: ${min}, max: ${max}, step: ${step}\n`;
    text += `入力値：${valInput}\nNumber(value): ${val1}\nvalueAsNumber: ${val2}`;
    alert(text);
}
function numberReset() {
    const input = document.getElementById('NumberInput');
    if (input !== null) {
        input.min = '-10';
        input.max = '20';
        input.step = '0.1';
        input.value = '';
    }
}
