/*
 ** You are given an array prices where prices[i] is the price of a given stock on the ith day.
 **
 ** You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 **
 ** Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 */

// 2, 4, 1
const maxProfit = (prices) => {
  let min = prices[0];
  let max = prices[0];

  for (let i = 1; i < prices.length; i++) {
    const price = prices[i];

    if (price < min) {
      min = price;
      // update max once new min is found
      max = price;
    }

    if (price > max) {
      max = price;
    }
  }

  return max !== min ? max - min : 0;
};

module.exports = maxProfit;
