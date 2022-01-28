function binarySearch2(array, target) {
  return binarySearchHelper(array, target, 0, array.length - 1);
}

function binarySearchHelper(array, target, left, right) {
  if (left > right) return -1;
  const middle = Math.floor((left + right) / 2);
  const guess = array[middle];
  if (guess < target) {
    return binarySearchHelper(array, target, middle + 1, right);
  } else if (guess > target) {
    return binarySearchHelper(array, target, left, middle - 1);
  } else {
    return middle;
  }
}

module.exports = binarySearch2;