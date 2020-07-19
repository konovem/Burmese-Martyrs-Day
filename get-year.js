var date = new Date();
var currentYear = date.getFullYear();
var nthYear = currentYear - 1947;


console.log(currentYear);
console.log(currentYear - 1947);

document.getElementById("nth-year").innerHTML = nthYear;


