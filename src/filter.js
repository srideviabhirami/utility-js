const tail = require('./tail');
const head = require('./head');

const filter = (array,givenFunction,result=[]) => {
    if(array.length===0)
        return result;
    if(givenFunction(head(array)))
    result.push(head(array));
    return filter(tail(array),givenFunction,result);
}

const returnTrue = (value) => {
        return true;
}

const returnFalse = (value) => {
        return false;
}

const checkIfGreaterThanOne = (value) => {
        return value > 1;
}

const checkIfUpperCase = (value) => {
        return value == value.toUpperCase();
}

module.exports = {filter,returnTrue,returnFalse,checkIfGreaterThanOne,checkIfUpperCase};