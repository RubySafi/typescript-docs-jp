"use strict";
function getNode() {
    let elm = document.getElementById('sampleTag');
    let text = getNodeTree(elm, '', 0);
    let resultArea = document.getElementById('nodeResult');
    resultArea.value = text;
}
function getNodeTree(element, prefix, depth) {
    let res = '';
    const indent = ' '.repeat(depth);
    for (let i = 0; i < element.childNodes.length; i++) {
        switch (element.childNodes[i].nodeType) {
            case Node.TEXT_NODE:
                res += `${indent}[${prefix}${i}] TEXT: "${element.childNodes[i].nodeValue}"\n`;
                break;
            case Node.COMMENT_NODE:
                res += `${indent}[${prefix}${i}] COMMENT: "${element.childNodes[i].nodeValue}"\n`;
                break;
            case Node.ELEMENT_NODE:
                let elm = element.childNodes[i];
                res += `${indent}[${prefix}${i}] ELEMENT: ${elm.tagName}\n`;
                if (elm.childNodes.length > 0) {
                    res += getNodeTree(elm, `${prefix}${i}-`, depth + 1);
                }
                break;
            default:
                res += `${indent}[${prefix}${i}] OtherNodes\n`;
        }
    }
    return res;
}