const { runTest } = require('../utils/runTest');

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  if (matrix.length == 0) {
    return 0;
  }
  let max = 0;
  let dp = [];
  for (let i = 0; i < matrix.length; i++) {
    dp[i] = [];
    if (i == 0) {
      for (let j = 0; j < matrix[0].length; j++) {
        dp[i][j] = parseInt(matrix[i][j]);
        max = Math.max(max, dp[i][j]);
      }
    } else {
      dp[i][0] = parseInt(matrix[i][0]);
      max = Math.max(max, dp[i][0]);
    }
  }
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (dp[i - 1][j - 1] > 0 && matrix[i][j] == '1') {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
      } else {
        dp[i][j] = parseInt(matrix[i][j]);
      }
      max = Math.max(max, dp[i][j]);
    }
  }
  return max * max;
};
runTest(maximalSquare, [
  [
    ['0', '0', '0', '1'],
    ['1', '1', '0', '1'],
    ['1', '1', '1', '1'],
    ['0', '1', '1', '1'],
    ['0', '1', '1', '1']
  ]
]);
runTest(maximalSquare, [
  [
    ['1', '1', '1', '1'],
    ['1', '1', '1', '1'],
    ['1', '1', '1', '1']
  ]
]);

runTest(maximalSquare, [
  [
    ['1', '0', '1', '0', '0'],
    ['1', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '0', '0', '1', '0']
  ]
]);
