"use strict";
function setInnerText() {
    let elm = document.getElementById('demo-text');
    let target = document.getElementById('sampleDemo');
    let targetHTML = document.getElementById('sampleDemoHTML');
    target.innerText = elm.value;
    targetHTML.textContent =
        '<div id="sampleDemo">\n' + target.innerHTML + '</div>';
}
function setInnerHTML() {
    let elm = document.getElementById('demo-text');
    let target = document.getElementById('sampleDemo');
    let targetHTML = document.getElementById('sampleDemoHTML');
    target.innerHTML = elm.value;
    targetHTML.textContent =
        '<div id="sampleDemo">\n' + target.innerHTML + '</div>';
}
function setTextContent() {
    let elm = document.getElementById('demo-text');
    let target = document.getElementById('sampleDemo');
    let targetHTML = document.getElementById('sampleDemoHTML');
    target.textContent = elm.value;
    targetHTML.textContent =
        '<div id="sampleDemo">\n' + target.innerHTML + '</div>';
}
function resetValues() {
    let elm = document.getElementById('demo-text');
    let target = document.getElementById('sampleDemo');
    let targetHTML = document.getElementById('sampleDemoHTML');
    elm.value =
        'HTMLは，<strong>スタイル</strong>を利用することで，<br>\n' +
            '<span style="color:red">色を付けたりする</span>ことが可能です．';
    target.innerHTML = '<p>ここにはブラウザでみた結果（上）やHTMLコード（下）が表示されます．</p>';
    targetHTML.innerHTML = '&lt;div id="sampleDemo"&gt;&lt;p&gt;ここにはブラウザでみた結果（上）やHTMLコード（下）が表示されます．&lt;/p&gt;&lt;/div&gt;';
}
