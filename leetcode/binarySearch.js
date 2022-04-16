/* 
  Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. 
  
  If target exists, then return its index. Otherwise, return -1.
  
  You must write an algorithm with O(log n) runtime complexity.
*/
const binarySearch = (nums, target) => {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (nums[mid] > target) {
      r = mid - 1;
    } else if (nums[mid] < target) {
      l = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
};

module.exports = binarySearch;
