const sortedSquared2 = (array) => {
  const sortedSquares = new Array(array.length).fill(0);
  let lowIdx = 0;
  let highIdx = array.length - 1;

  for (let i = highIdx; i >= 0; i -= 1) {
    const smaller = Math.abs(array[lowIdx]);
    const larger = Math.abs(array[highIdx]);
    if (smaller > larger) {
      sortedSquares[i] = smaller ** 2;
      lowIdx += 1;
    } else {
      sortedSquares[i] = larger ** 2;
      highIdx -= 1;
    }
  }
  return sortedSquares;
};

module.exports = sortedSquared2;
