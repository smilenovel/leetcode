const { runTest } = require('../utils/runTest');
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  let dp = [...new Array(n + 1)].map((_, idx) => idx);
  for (let i = 1; i <= n; i++) {
    for (let j = 1; i - j * j >= 0; j++) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
  }
  return dp[n];
};
runTest(numSquares, [12]);
