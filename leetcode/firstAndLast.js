// O(n) time | O(1) space
const firstAndLast = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      let start = i;
      while (i + 1 < nums.length && nums[i + 1] === target) {
        i += 1;
      }
      return [start, i];
    }
  }
  return [-1, -1];
};

// O(logn) time | O(1) space
const firstAndLast2 = (nums, target) => {
  // early exit cases
  if (nums[0] > target || nums[nums.length - 1] < target || nums.length === 0) {
    return [-1, -1];
  }
  const result = [];
  result[0] = findFirst(nums, target);
  result[1] = findLast(nums, target);
  return result;
};

const findFirst = (nums, target) => {
  if (nums[0] === target) return 0;
  let il = 0;
  let ir = nums.length - 1;
  while (il <= ir) {
    const mid = Math.floor((il + ir) / 2);
    if (nums[mid] === target && nums[mid - 1] < target) return mid;
    else if (nums[mid] < target) il = mid + 1;
    else ir = mid - 1;
  }
  return -1;
};

const findLast = (nums, target) => {
  if (nums[nums.length - 1] === target) return nums.length - 1;
  let il = 0;
  let ir = nums.length - 1;
  while (il <= ir) {
    const mid = Math.floor((il + ir) / 2);
    if (nums[mid] === target && nums[mid + 1] > target) return mid;
    else if (nums[mid] > target) ir = mid - 1;
    else il = mid + 1;
  }
  return -1;
};

module.exports = { firstAndLast, firstAndLast2 };
