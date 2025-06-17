"use strict";
const elm = document.getElementById('event_kbd');
elm?.addEventListener('keydown', eventInfo);
elm?.addEventListener('keyup', eventInfo);
function eventInfo(e) {
    let res = document.getElementById('event_kbd_result');
    let text = `イベント: ${e.type}\n`;
    text += `key:${e.key}, code:${e.code}\n`;
    text += `ctrlKey:${e.ctrlKey}, shiftKey:${e.shiftKey}, altKey:${e.altKey}, metaKey:${e.metaKey}`;
    if (res !== null) {
        res.value = text;
    }
}
