function setElementInnerTextById(elementId, value) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerText = value;
    }
}

function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const value = parseInt(elementText);
    return value;
}

function hideElementById(elementId){
    const element = document.querySelector(elementId);
    element.classList.add('hidden');
}