var firstNameId = "first-name";
var firstNameEl = document.getElementById(firstNameId);

var lastNameId = 'last-name';
var lastNameEl = document.getElementById(lastNameId);

var addressId = 'address'
var addressEl = document.getElementById(addressId);

function logger(element) {
    console.log(element.value);
    console.log(element.className);
}

logger(firstNameEl); 

logger(lastNameEl);

logger(addressEl);