function getInputFieldValueById(inputFildId){
    const inputFild = document.getElementById(inputFildId);
    const inputFildIdString = inputFild.value;
    const inputFildValue = parseFloat(inputFildIdString);
    inputFild.value = '';
    return inputFildValue;
}

function getElementvalueById(elementId){
    const textElement = document.getElementById(elementId);
    const textElementString = textElement.innerText;
    const textElementValue = parseFloat(textElementString);
    return textElementValue;
}

function setTexElementvalueById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}