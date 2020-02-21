const { runTest } = require('../utils/runTest');

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let dp = [1, 2];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n - 1];
};
runTest(climbStairs, [2]);
runTest(climbStairs, [3]);

runTest(climbStairs, [6]);
