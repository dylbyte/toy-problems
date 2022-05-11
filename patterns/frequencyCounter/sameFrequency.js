// constraints - O(n) T
function sameFrequency(n1, n2) {
  const sNum1 = n1.toString();
  const sNum2 = n2.toString();
  if (sNum1.length !== sNum2.length) return false;

  // iterate over sNum1
  // build up count of each char
  // iterate over sNum2, if char is in count obj, subtract 1 from count
  // if sNum2 char in count obj is falsy (0 value or not present) return false
  const count = {};
  for (const val of sNum1) {
    count[val] = (count[val] || 0) + 1;
  }

  for (const val of sNum2) {
    if (!count[val]) return false;
    count[val] -= 1;
  }

  return true;
}

module.exports = sameFrequency;
