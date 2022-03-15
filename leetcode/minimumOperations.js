// TODO: finish implementing
function minimumOperations(nums) {
  const countsEven = {};
  const countsOdd = {};

  for (let i = 0; i < nums.length; i += 2) {
    if (i % 2 === 0) {
      if (countsEven[nums[i]]) countsEven[nums[i]]++;
      else countsEven[nums[i]] = 1;
    } else {
      if (countsOdd[nums[i]]) countsOdd[nums[i]]++;
      else countsOdd[nums[i]] = 1;
    }
  }

  let evenMax = 0;
  for (const count of countsEven) {
    if (count > evenMax) evenMax = count;
  }

  let oddMax = 0;
  for (const count of countsOdd) {
    if (count > oddMax) oddMax = count;
  }

  if (evenMax !== oddMax) nums.length - oddMax - evenMax;
  return nums.length - oddMax - evenMax;
}

module.exports = minimumOperations;
