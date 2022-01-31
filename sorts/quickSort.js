function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  // const pivot = array.pop();
  const pivot = array[array.length - 1];

  const left = [];
  const right = [];
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] <= pivot) left.push(array[i]);
    else right.push(array[i]);
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

console.log(quickSort([9, 6, 2, 3, 7, 1]));
module.exports = quickSort;