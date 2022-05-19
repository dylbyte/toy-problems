function power(base, exp) {
  if (exp === 0) return 1;
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
  if (n === 0) return 0;
  return n + recursiveRange(n - 1);
}

function fibonacci(n) {
  if (n <= 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

module.exports = {
  power,
  factorial,
  productOfArray,
  recursiveRange,
  fibonacci,
};
