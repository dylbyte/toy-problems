/*
 * n x n matrix is valid if every row and column 
 * contains all the integers from 1 to n inclusive
*/

function checkValid (matrix) {
  let n = matrix.length;
  console.log("matrix length: ", n);

  // check rows
  for (const row of matrix) {
    const rowSet = new Set();
    console.log("Row: ", row);
    for (const val of row) {
      rowSet.add(val);
    }
    if (rowSet.size !== matrix.length) {
      return false;
    }
  }
  
  // check columns
  for (let i = 0; i < matrix.length; i++) {
    const colSet = new Set();
    for (let j = 0; j < matrix.length; j++) {
      colSet.add(matrix[j][i]);
    }
    if (colSet.size !== matrix.length) {
      return false;
    }
  }
  return true;
}

module.exports = checkValid;