"use strict";
function addTableRow() {
    if (isValid()) {
        let elmTable = document.getElementById('sample-table');
        let elmNameInfo = document.getElementById('NameInfo');
        let elmHobbyInfo = document.getElementById('HobbyInfo');
        let name = elmNameInfo.value;
        let hobby = elmHobbyInfo.value;
        if (name === '' || hobby === '') {
            alert('Input a name or a hobby.');
            return;
        }
        let elmTr = document.createElement('tr');
        let elmTdName = document.createElement('td');
        let elmTdHobby = document.createElement('td');
        elmTdName.innerText = name;
        elmTdHobby.innerText = hobby;
        elmTdName.style.color = 'green';
        elmTdHobby.style.color = 'blue';
        elmTr.appendChild(elmTdName);
        elmTr.appendChild(elmTdHobby);
        elmTable.appendChild(elmTr);
    }
}
function clearAllData() {
    if (isValid()) {
        let elmTable = document.getElementById('sample-table');
        elmTable.innerHTML = '<tr><th>Name</th><th>Hobby</th></tr>';
    }
}
function isValid() {
    let elmTable = document.getElementById('sample-table');
    let elmNameInfo = document.getElementById('NameInfo');
    let elmHobbyInfo = document.getElementById('HobbyInfo');
    return elmTable !== null && elmNameInfo !== null && elmHobbyInfo !== null;
}
