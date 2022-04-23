// non-destructive quicksort
const quickSort = (nums) => {
  // stack overflow on worst case (very large, sorted list)
  if (nums.length <= 1) return nums;

  const pivot = nums[nums.length - 1];
  const left = [];
  const right = [];
  for (let i = 0; i < nums.length - 1; i++) {
    const current = nums[i];
    if (current < pivot) left.push(current);
    else right.push(current);
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
};

/* Code below (csdojo.io/qs) not working on leetcode #912 */
const sortArray = (nums) => {
  if (nums.length <= 1) return nums; // hacky fix...
  quickSort2(nums, 0, nums.length - 1);
};

const quickSort2 = (nums, left, right) => {
  if (left >= right) return;
  const p = partition(nums, left, right);
  quickSort2(nums, left, p - 1);
  quickSort2(nums, p + 1, right);
};

const partition = (nums, left, right) => {
  const pivot = nums[right];
  let i = left - 1;
  for (let j = left; j < right; j++) {
    if (nums[j] < pivot) {
      i++;
      swap(nums, i, j);
    }
  }
  swap(nums, i + 1, right);
  return i + 1;
};

const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

module.exports = {
  quickSort,
};
