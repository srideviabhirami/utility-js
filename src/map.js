const tail = require('./tail');
const head = require('./head');

const map = (array,givenFunction,result=[]) => {
    if(array.length===0)
        return result;
    result.push(givenFunction(head(array)));
    return map(tail(array),givenFunction,result);
}

const cube = (value) => {
    return value**3;
}

const identity = (value) => {
    return value;
}

const addValue = (object) => {
    return object.x+1;
}

module.exports = {map,cube,identity,addValue};

