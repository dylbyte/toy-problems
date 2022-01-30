function mergeSort(array) {
  if (array.length === 1) return array;
  
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle, array.length);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  let il = 0;
  let ir = 0;
  while (il < left.length && ir < right.length) {
    if (left[il] < right[ir]) {
      result.push(left[il++]);
    } else if (left[il] > right[ir]) {
      result.push(right[ir++]);
    } else {
      result.concat([left[il++], right[ir++]]);
    }
  }

  while (il < left.length) {
    result.push(left[il++]);
  }

  while (ir < right.length) {
    result.push(right[ir++]);
  }

  return result;
}

module.exports = mergeSort;