"use strict";
function convertInfo() {
    const input = document.getElementById('NameInput');
    const output = document.getElementById('InfoOutput');
    const text = input?.value;
    if (output !== null) {
        output.value = text ?? '';
    }
}
