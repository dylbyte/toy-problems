function binarySearch(list, target) {
  let min = 0;
  let max = list.length - 1;
  let guessIndex;
  let valueAtGuessIndex;

  while (min <= max) {
    guessIndex = Math.floor((min + max) / 2);
    valueAtGuessIndex = list[guessIndex];

    if (valueAtGuessIndex < target) {
      min = guessIndex + 1;
    } else if (valueAtGuessIndex > target) {
      max = guessIndex - 1;
    } else {
      return guessIndex;
    }
  }
  return -1;
}

module.exports = binarySearch;