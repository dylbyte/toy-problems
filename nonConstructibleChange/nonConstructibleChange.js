function nonConstructibleChange(coins) {
  let change = 0; // O(1) space
  coins.sort((a, b) => a - b); // O(nlog(n)) time

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < coins.length; i++) {
    const value = coins[i];
    if (value > change + 1) {
      break;
    }
    change += value;
  }
  return change + 1;
}

module.exports = nonConstructibleChange;
