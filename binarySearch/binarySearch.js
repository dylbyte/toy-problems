function binarySearch(array, target) {
  let min = 0;
  let max = array.length - 1;
  let guessIdx;

  while(min <= max) {
    guessIdx = Math.floor((min + max) / 2);
    if (target > array[guessIdx]) {
      min = guessIdx + 1;
    } else if (target < array[guessIdx]) {
      max = guessIdx - 1;
    } else {
      return guessIdx;
    }
  }
  return -1;
}

module.exports = binarySearch;