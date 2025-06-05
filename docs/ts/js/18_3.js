"use strict";
function addMultList() {
    if (isValid()) {
        let elmMultList = document.getElementById('sample-mult-list');
        let elmMultInput = document.getElementById('MultInput');
        let multValues = elmMultInput.value;
        let list = multValues.split(',');
        if (multValues.trim() === '') {
            alert('Please input values in CSV format.');
            return;
        }
        let elmChildList = document.createElement('li');
        elmChildList.innerText = '入力データ';
        let elmOL = document.createElement('ol');
        for (let data of list) {
            let elmList = document.createElement('li');
            elmList.innerText = data;
            elmOL.appendChild(elmList);
        }
        elmChildList.append(elmOL);
        elmMultList.appendChild(elmChildList);
    }
}
function clearAllMultList() {
    if (isValid()) {
        let elmMultList = document.getElementById('sample-mult-list');
        elmMultList.innerHTML = '';
    }
}
function isValid() {
    let elmMultList = document.getElementById('sample-mult-list');
    let elmMultInput = document.getElementById('MultInput');
    return elmMultList !== null && elmMultInput !== null;
}
