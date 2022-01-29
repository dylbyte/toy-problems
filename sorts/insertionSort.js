function insertionSort(array) {
  for (let i = 1; i < array.length; i++) { // i = 1
    const current = array[i]; // 43
    let j = i;
    while (j > 0 && array[j - 1] > current) { // since we decrement j inside loop, need j > 0 to keep j from getting out of bounds (-1)
      array[j] = array[j - 1];
      j--;
    }
    array[j] = current;
  }
  return array;
}

module.exports = insertionSort;