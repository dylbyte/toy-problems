function missingNumber(nums) {
  const res = new Array(nums.length + 1).fill(-1);

  for (let num of nums) {
    res[num] = num;
  }
  return res.indexOf(-1);
}

// sums solution
function missingNumber2(nums) {
  let sum = nums.length;

  for (let i = 0; i < nums.length; i++) {
    sum += i - nums[i];
  }

  return sum;
}

// console.log(missingNumber2([9, 6, 4, 2, 3, 5, 7, 0, 1]));
module.exports = missingNumber;
