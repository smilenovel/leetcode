const { runTest } = require('../utils/runTest');

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let minValue = prices[0];
  let max = 0;
  for (let i = 1; i < prices.length; i++) {
    minValue = Math.min(minValue, prices[i]);
    max = Math.max(max, prices[i] - minValue);
  }
  return max;
};
runTest(maxProfit, [[7, 1, 5, 3, 6, 4]]);
runTest(maxProfit, [[7, 6, 4, 3, 1]]);
