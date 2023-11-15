var buttonPlus = document.getElementById("buttonPlus");
var buttonMinus = document.getElementById("buttonMinus");
var buttonMultiply = document.getElementById("buttonMultiply");
var buttonDivide = document.getElementById("buttonDivide");
var input1 = document.getElementById("number1");
var input2 = document.getElementById("number2");
var result;

function getNumber1() {
    return Number(input1.value)
}

function getNumber2() {
    return Number(input2.value)
}

function makeOperation(operationCode) {
    if (operationCode === "+") {
       result = getNumber1() + getNumber2();
    } else if (operationCode === "-") {
       result = getNumber1() - getNumber2();
    } else if (operationCode === "*") {
       result = getNumber1() * getNumber2();
    } else {
       result = getNumber1() / getNumber2();
    }
    window.alert(result);
}

function onButtonPlusClick() {
    makeOperation("+");
}

function onButtonMinusClick() {
    makeOperation("-");
}

function onButtonMultiplyClick() {
    makeOperation("*");
}

function onButtonDivideClick() {
    makeOperation("/");
}

buttonPlus.addEventListener("click", onButtonPlusClick);
buttonMinus.addEventListener("click", onButtonMinusClick);
buttonMultiply.addEventListener("click", onButtonMultiplyClick);
buttonDivide.addEventListener("click", onButtonDivideClick);