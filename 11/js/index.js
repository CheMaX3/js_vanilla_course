var firstNameEl;
var firstNameId;

function logger() {
    console.log('1');
    console.log('2');
    console.log('3');
}

firstNameId = 'first-name'
firstNameEl = document.getElementById(firstNameId);

document.getElementById('first-name').className = 'first-name successInput';
document.getElementById('last-name').className = 'last-name successInput';
document.getElementById('address').className = 'adress wrongInput';

debugger;
logger();