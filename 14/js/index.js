var firstNameId = "first-name";
var lastNameId = "last-name";
var addressId = "address";
var firstNameEl = document.getElementById("first-name");
var sendButton = document.getElementById("send-button");
var addressEl = document.getElementById("address");

function logger(id) {
    console.log(document.getElementById(id).value);
}

function onClickAddressListener() {
    addErrorClassToInput(addressId);
}

function addErrorClassToInput(id) {
    var el = document.getElementById(id);
    el.className = 'wrongInput';
}

function addErrorClassToAllInputs() {
    addErrorClassToInput(firstNameId);
    addErrorClassToInput(lastNameId);
    addErrorClassToInput(addressId);
}

function onKeyUpFirstNameListener() {
    firstNameEl.className = "wrongInput";
}

// logger(firstNameId); 

// logger(lastNameId);

// logger(addressId);

// window.setTimeout(addErrorClassToAllInputs, 4000);

sendButton.addEventListener("click", onClickAddressListener);

firstNameEl.addEventListener("keyup", onKeyUpFirstNameListener);

