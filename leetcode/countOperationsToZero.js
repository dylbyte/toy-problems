function countOperationsToZero(num1, num2) {
  if (num1 === 0 || num2 === 0) return 0;
  let count = 0;
  while (num1 !== num2) {
      if (num2 > num1) {
          let temp = num2;
          num2 = num1;
          num1 = temp;
      }
      num1 = num1 - num2;
      count++;
  }
  return count + 1;
}

module.exports = countOperationsToZero;