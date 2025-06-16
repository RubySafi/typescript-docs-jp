"use strict";
function getRadioBtnInfo() {
    const btnList = document.getElementsByClassName('radioBtn');
    let text = '選択中の値：\n';
    for (let i = 0; i < btnList.length; i++) {
        let btn = btnList[i];
        if (btn.checked) {
            text += btn.value;
        }
    }
    alert(text);
}
