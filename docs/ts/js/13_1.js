"use strict";
function getSetValue() {
    let elm_from = document.getElementById('NameInput');
    let elm_to = document.getElementById('NameOutput');
    if (elm_from !== null) {
        let elm_input = elm_from;
        let yourName = elm_input.value;
        if (yourName === '') {
            alert('Input your name.');
        }
        else if (elm_to !== null) {
            let elm_output = elm_to;
            elm_output.value = `Hello, ${yourName}!`;
        }
    }
}
function clearFields() {
    let elm_from = document.getElementById('NameInput');
    let elm_to = document.getElementById('NameOutput');
    if (elm_from !== null) {
        let elm_input = elm_from;
        elm_input.value = '';
    }
    if (elm_to !== null) {
        let elm_output = elm_to;
        elm_output.value = '';
    }
}
