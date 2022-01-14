function checkValid2(matrix) {
  // rows
  for (const row of matrix) {
    const counts = new Array(matrix.length).fill(0);
    for (const val of row) {
      if (counts[val - 1] > 0) return false;
      counts[val - 1]++;
    }
  }
  // columns
  for (let i = 0; i < matrix.length; i++) {
    const counts = new Array(matrix.length).fill(0);
    for (let j = 0; j < matrix.length; j++) {
      if (counts[matrix[j][i] - 1] > 0) {
        return false;
      }
      counts[matrix[j][i] - 1]++;
    }
  }
  return true;
}

module.exports = checkValid2;