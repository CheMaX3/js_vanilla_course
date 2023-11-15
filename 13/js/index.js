var firstNameId = "first-name";
var lastNameId = 'last-name';
var addressId = 'address'

function logger(id) {
    console.log(document.getElementById(id).value);
    console.log(document.getElementById(id).className);
}

logger(firstNameId); 

logger(lastNameId);

logger(addressId);