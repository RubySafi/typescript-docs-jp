"use strict";
const checkbox = document.getElementById('demo1');
const btn_switch = document.getElementById('demo1-switch');
checkbox?.addEventListener('input', updateChecked);
btn_switch?.addEventListener('click', updateDisabled);
function updateAllState() {
    if (checkbox) {
        const cellChecked = document.getElementById('demo1_state_checked');
        const cellDisabled = document.getElementById('demo1_state_disabled');
        const cellAttrChecked = document.getElementById('demo1_attr_checked');
        const cellAttrDisabled = document.getElementById('demo1_attr_disabled');
        const cellAttrCheckedVal = document.getElementById('demo1_attr_checked_val');
        const cellAttrDisabledVal = document.getElementById('demo1_attr_disabled_val');
        const attr_checked = checkbox.getAttribute('checked');
        const attr_disabled = checkbox.getAttribute('disabled');
        if (cellChecked) {
            cellChecked.innerText = checkbox.checked.toString();
        }
        if (cellDisabled) {
            cellDisabled.innerText = checkbox.disabled.toString();
        }
        if (cellAttrChecked && cellAttrCheckedVal) {
            if (attr_checked === null) {
                cellAttrChecked.style.display = 'none';
                cellAttrCheckedVal.style.display = 'none';
                cellAttrCheckedVal.innerText = 'なし';
            }
            else {
                cellAttrChecked.style.display = '';
                cellAttrCheckedVal.style.display = '';
                cellAttrCheckedVal.innerText = `"${attr_checked}"`;
            }
        }
        if (cellAttrDisabled && cellAttrDisabledVal) {
            if (attr_disabled === null) {
                cellAttrDisabled.style.display = 'none';
                cellAttrDisabledVal.style.display = 'none';
                cellAttrDisabledVal.innerText = 'なし';
            }
            else {
                cellAttrDisabled.style.display = '';
                cellAttrDisabledVal.style.display = '';
                cellAttrDisabledVal.innerText = `"${attr_disabled}"`;
            }
        }
    }
}
function updateChecked() {
    updateAllState();
}
function updateDisabled() {
    if (checkbox) {
        checkbox.disabled = !checkbox.disabled;
    }
    updateAllState();
}
updateAllState();

