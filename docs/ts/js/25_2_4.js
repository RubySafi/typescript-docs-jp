"use strict";
const elm = document.getElementById('event_fcs');
elm?.addEventListener('focus', eventInfo);
elm?.addEventListener('blur', eventInfo);
function eventInfo(e) {
    let res = document.getElementById('event_fcs_result');
    let text = `イベント: ${e.type}<br>`;
    switch (e.type) {
        case 'focus':
            text += 'target: focus 取得要素, relatedTarget: focus 失効要素<br>';
            break;
        case 'blur':
            text += 'target: focus 失効要素, relatedTarget: focus 取得要素<br>';
            break;
    }
    let elmRT = e.relatedTarget;
    let elmT = e.target;
    text += `target の text : ${elmT?.value}<br>`;
    text += `relatedTarget の text : ${elmRT?.value}`;
    if (res !== null) {
        res.innerHTML = text;
    }
}
