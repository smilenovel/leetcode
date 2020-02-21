const { runTest } = require('../utils/runTest');

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  let dp = [[0]];
  let min = Number.MAX_VALUE;
  for (let i = 1; i < triangle.length; i++) {
    dp[i] = [];
    for (let j = 0; j < triangle[i].length; j++) {
      let left = Number.MAX_VALUE;
      let right = Number.MAX_VALUE;
      if (j < triangle[i].length - 1) {
        left = dp[i - 1][j] + triangle[i - 1][j];
      }
      if (j > 0) {
        right = dp[i][j] = Math.max(dp[i - 1][j - 1] + triangle[i - 1][j - 1]);
      }
      dp[i][j] = Math.min(left, right);
    }
  }
  let last = triangle.length - 1;
  for (let i = 0; i < dp[last].length; i++) {
    min = Math.min(dp[last][i] + triangle[last][i], min);
  }
  return min;
};
runTest(minimumTotal, [[[2], [3, 4]]]);
runTest(minimumTotal, [[[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]]);
