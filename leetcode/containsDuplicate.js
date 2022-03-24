// set solution
function containsDuplicate(nums) {
  const numSet = new Set();
  for (let num of nums) {
    if (numSet.has(num)) return true;
    numSet.add(num);
  }
  return false;
}

// object solution
function containsDuplicate2(nums) {
  const seen = {};
  for (let num of nums) {
    if (seen[num]) return true;
    seen[num] = 1;
  }
  return false;
}

module.exports = {
  setSolution: containsDuplicate,
  objectSolution: containsDuplicate2,
};
