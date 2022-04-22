/*
 ** You are given an array prices where prices[i] is the price of a given stock on the ith day.
 **
 ** You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 **
 ** Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 */

// Two POINTER
const maxProfit = (prices) => {
  let l = 0; // buy
  let r = 1; // sell
  let maxProfit = 0;

  while (r < prices.length) {
    const buy = prices[l];
    const sell = prices[r];
    let profit = sell - buy;

    // profitable?
    if (buy < sell) {
      maxProfit = Math.max(maxProfit, profit);
    } else {
      l = r;
    }
    r++;
  }
  return maxProfit;
};

module.exports = maxProfit;
