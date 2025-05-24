"use strict";
function getSetValue() {
    if (isValid()) {
        let elm_input = document.getElementById('TextInput');
        let elm_output = document.getElementById('TextOutput');
        let yourText = elm_input.value;
        if (yourText === '') {
            alert('Input your message.');
        }
        else {
            elm_output.value = `Your Message:  \n${yourText} \n文字カウント：${yourText.length}`;
        }
    }
}
function clearFields() {
    if (isValid()) {
        let elm_input = document.getElementById('TextInput');
        let elm_output = document.getElementById('TextOutput');
        elm_input.value = '';
        elm_output.value = '';
    }
}
function isValid() {
    const flag = document.getElementById('TextInput') !== null &&
        document.getElementById('TextOutput') !== null;
    if (!flag) {
        alert('指定した id のタグが見つかりません．');
    }
    return flag;
}
