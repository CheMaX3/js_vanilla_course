var buttonPlus = document.getElementById("buttonPlus");
var buttonMinus = document.getElementById("buttonMinus");
var buttonMultiply = document.getElementById("buttonMultiply");
var buttonDivide = document.getElementById("buttonDivide");
var input1 = document.getElementById("number1");
var input2 = document.getElementById("number2");
var result;
var operationButtons = [buttonPlus, buttonMinus, buttonMultiply, buttonDivide];

function makeOperation(operationCode) {
    var number1 = Number(input1.value);
    var number2 = Number(input2.value);

    if (operationCode === "+") {
       result = number1 + number2;
    } else if (operationCode === "-") {
       result = number1 - number2;
    } else if (operationCode === "*") {
       result = number1 * number2;
    } else {
       result = number1 / number2;
    }
    window.alert(result);
}

function onOperationButtonClick(eventObject) {
    var clickedElement = eventObject.currentTarget;
    var operation = clickedElement.innerHTML;
    makeOperation(operation);
}

for (var i = 0; i < operationButtons.length; i++) {
    operationButtons[i].addEventListener("click", onOperationButtonClick);
}