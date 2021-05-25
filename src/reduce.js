const tail = require('./tail');
const head = require('./head');

const reduce = (array, functionName , initialValue) => {
  if (array.length === 0)
    return initialValue;
  if (initialValue === undefined)
    return reduce(tail(array), functionName, head(array))
  if (array.length === 1)
    return functionName(initialValue, head(array));
  return reduce(tail(array), functionName, functionName(initialValue, head(array)));
}

module.exports = reduce;