/* 
  Write a function that accepts a variable number of arguments and checks whether there are any duplicates among the arguments passed in.
  Returns a boolean.

  constraints: O(n) T | O(n) S
  bonus: O(nlogn) T | O(1) S
*/
function areThereDuplicates(...args) {
  const seen = {};
  for (const arg of args) {
    if (!seen[arg]) seen[arg] = 1;
    else return true;
  }
  return false;
}

module.exports = areThereDuplicates;
