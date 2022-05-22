/*
 ** Write a function which takes in an object and finds all of the values which are numbers and converts them to strings.
 ** Recursion would be a great way to solve this.
 */
function stringifyNumbers(obj) {
  return Object.entries(obj).reduce((newObj, [key, val]) => {
    if (val instanceof Object && !Array.isArray(val)) {
      newObj[key] = stringifyNumbers(val);
    } else if (typeof val === "number") {
      newObj[key] = val.toString();
    } else {
      newObj[key] = val;
    }
    return newObj;
  }, {});
}

module.exports = stringifyNumbers;
