/* 
  Write a recursive function that returns the sum of all even numbers in an object, which may contain nested objects.
*/
function nestedEvenSum(obj) {
  let sum = 0;
  function helper(obj) {
    if (!Object.keys(obj).length) return;
    for (const val of Object.values(obj)) {
      if (val instanceof Object) {
        helper(val);
      }
      if (typeof val === "number") {
        if (val % 2 === 0) sum += val;
      }
    }
  }
  helper(obj);
  return sum;
}

module.exports = nestedEvenSum;
