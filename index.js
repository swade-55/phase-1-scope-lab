var customerName = 'bob';
const leastFavoriteCustomer = 'Sam';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}


function setBestCustomer() {
    bestCustomer = 'not bob';
    return bestCustomer;
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
    return bestCustomer;
}


function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'Bob';
    return leastFavoriteCustomer;
}