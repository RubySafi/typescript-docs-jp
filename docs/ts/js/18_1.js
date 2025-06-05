"use strict";
function addListElm() {
    if (isValid()) {
        let elmList = document.getElementById('sample-list');
        let elmInput = document.getElementById('NameInput');
        let elm = document.createElement('li');
        let name = elmInput.value;
        if (name === '') {
            alert('Input a name.');
            return;
        }
        elm.innerText = `Hello, ${name}!`;
        elm.style.color = 'red';
        elmList.appendChild(elm);
    }
}
function clearAllList() {
    if (isValid()) {
        let elmList = document.getElementById('sample-list');
        elmList.innerHTML = '';
    }
}
function isValid() {
    let elmList = document.getElementById('sample-list');
    let elmInput = document.getElementById('NameInput');
    return elmList !== null && elmInput !== null;
}
