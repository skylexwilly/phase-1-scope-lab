// Write your solution in this file!
var customerName = 'bob';


function upperCaseCustomerName() {
  if (typeof customerName === 'string') {
      customerName = customerName.toUpperCase();
  } else {
      console.log('customerName is not a string!');
  }
}





function setBestCustomer() {
  bestCustomer = 'not bob'; // Declaring without var, let, or const makes it global
}





function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'; // Modifying the global variable
}



const leastFavoriteCustomer = 'someone'; // Declaring a constant

function changeLeastFavoriteCustomer() {
    // Attempting to change a constant - this will throw an error in JavaScript
    leastFavoriteCustomer = 'someone else';
}

