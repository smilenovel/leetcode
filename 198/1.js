const { runTest } = require('../utils/runTest');

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length == 0) {
    return 0;
  }
  if (nums.length == 1) {
    return nums[0];
  }
  let dp = [nums[0], nums[1], nums[0] + nums[2]];
  for (let i = 3; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 2], dp[i - 3]) + nums[i];
  }
  return Math.max(dp[nums.length - 1], dp[nums.length - 2]);
};
runTest(rob, [[1, 2, 3, 1]]);
runTest(rob, [[2, 7, 9, 3, 1]]);
runTest(rob, [[]]);
runTest(rob, [[1]]);
runTest(rob, [[1, 2]]);
