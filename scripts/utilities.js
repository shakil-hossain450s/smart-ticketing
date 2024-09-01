function getElementInnerTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}

function setElementInnerTextById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}