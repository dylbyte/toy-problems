function power(base, exp) {
  if (base === 0) return 1;
  if (base === 1) return base;
  return base * power(base, exp - 1);
}

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

function productOfArray(nums) {
  if (nums.length === 0) return 1;
  return nums[0] * productOfArray(nums.slice(1));
}

function recursiveRange(n) {
  if (n === 1) return 1;
  return n + recursiveRange(n - 1);
}

module.exports = {
  power,
  factorial,
  productOfArray,
  recursiveRange,
};
