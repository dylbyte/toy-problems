/*
 ** Write a function which accepts an object and returns an array of all values in the object that have a typeof string.
 */
function collectStrings(obj) {
  let strings = [];
  Object.values(obj).forEach((val) => {
    if (val instanceof Object && !Array.isArray(val)) {
      strings = strings.concat(collectStrings(val));
    } else if (typeof val === "string") {
      strings.push(val);
    }
  });
  return strings;
}

module.exports = collectStrings;
