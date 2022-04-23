// non-destructive quicksort
const quickSort = (nums) => {
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

module.exports = {
  quickSort,
};
