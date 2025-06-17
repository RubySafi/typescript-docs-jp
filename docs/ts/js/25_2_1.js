"use strict";
const elm = document.getElementById('mouseevent');
elm?.addEventListener('click', clickInfo);
elm?.addEventListener('contextmenu', clickInfo);
function clickInfo(e) {
    let res = document.getElementById('mouseevent_result');
    let text = `イベント: ${e.type}\n`;
    text += `clientX:${e.clientX}, clientY:${e.clientY}\n`;
    text += `button:${e.button}\n`;
    text += `ctrlKey:${e.ctrlKey}, shiftKey:${e.shiftKey}, altKey:${e.altKey}, metaKey:${e.metaKey}`;
    if (res !== null) {
        res.value = text;
    }
}
