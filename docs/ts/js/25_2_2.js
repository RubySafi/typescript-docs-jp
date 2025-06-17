"use strict";
const elmInput = document.getElementById('event_input');
const elmChange = document.getElementById('event_change');
elmInput?.addEventListener('input', eventInfo);
elmChange?.addEventListener('change', eventInfo);
function eventInfo(e) {
    let res = document.getElementById('event_result');
    let text = `イベント: ${e.type}\n`;
    let elm = e.target;
    text += `現在の入力値:${elm?.value}\n`;
    if (res !== null) {
        res.value = text;
    }
}
