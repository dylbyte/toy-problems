/* 
  Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. 
  
  If target exists, then return its index. Otherwise, return -1.
  
  You must write an algorithm with O(log n) runtime complexity.
*/
const binarySearch = (nums, target) => {
  let l = 0;
  let r = nums.length - 1;
  let guessIdx;

  while (l <= r) {
    guessIdx = Math.floor((l + r) / 2);
    console.log("guess: ", nums[guessIdx]);
    if (nums[guessIdx] > target) {
      r = guessIdx - 1;
    } else if (nums[guessIdx] < target) {
      l = guessIdx + 1;
    } else {
      return guessIdx;
    }
  }
  return -1;
};

module.exports = binarySearch;
