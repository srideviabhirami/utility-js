const tail = require('./tail');
const head = require('./head');

const findmax = (array,max=array[0]) => {
        if (array.length==0)
            return max;
        if (head(array) > max)
            max = head(array);
        return findmax(tail(array),max)
}

module.exports = findmax;