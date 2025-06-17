"use strict";
const elmAdd = document.getElementById('add_event');
const elmRemove = document.getElementById('remove_event');
const elm = document.getElementById('trigger');
elmAdd?.addEventListener('click', addEvent);
elmRemove?.addEventListener('click', removeEvent);
function addEvent() {
    if (elm !== null) {
        elm.addEventListener('click', greet);
        elm.innerText = '実行(登録済)';
    }
}
function removeEvent() {
    if (elm !== null) {
        elm.removeEventListener('click', greet);
        elm.innerText = '実行(未登録)';
    }
}
function greet() {
    alert('Hello');
}
