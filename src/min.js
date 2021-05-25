const tail = require('./tail');
const head = require('./head');

const findmin = (array,min=array[0]) => {
        if (array.length==0)
            return min;
        if (head(array) < min)
            min = head(array);
        return findmin(tail(array),min)
}

module.exports = findmin;