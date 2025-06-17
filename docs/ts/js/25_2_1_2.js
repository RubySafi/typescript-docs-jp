"use strict";
const elm = document.getElementById('mouseevent_extra');
elm?.addEventListener('click', clickInfo);
elm?.addEventListener('contextmenu', clickInfo);
function clickInfo(e) {
    e.preventDefault();
    let res = document.getElementById('prevent_RC');
    let text = '';
    switch (e.type) {
        case 'click':
            text = `pタグ上で左クリック`;
            break;
        case 'contextmenu':
            text = `pタグ上で右クリック`;
            break;
    }
    if (res !== null) {
        res.value = text;
    }
}
