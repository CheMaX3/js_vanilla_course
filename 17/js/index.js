var buttonPlus = document.getElementById("buttonPlus");
var buttonMinus = document.getElementById("buttonMinus");
var buttonMultiply = document.getElementById("buttonMultiply");
var buttonDivide = document.getElementById("buttonDivide");
var input1 = document.getElementById("number1");
var input2 = document.getElementById("number2");
var result;

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

buttonPlus.addEventListener("click", onOperationButtonClick);
buttonMinus.addEventListener("click", onOperationButtonClick);
buttonMultiply.addEventListener("click", onOperationButtonClick);
buttonDivide.addEventListener("click", onOperationButtonClick);