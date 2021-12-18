const twoNumberSum = (array, targetSum) => {
  for (let i = 0; i < array.length - 1; i++) {
    let a = array[i];
    for (let j = i + 1; j < array.length; j++) {
      let b = array[j];
      if ((a + b) === targetSum) return [a, b];
    }
  }
  return [];
}