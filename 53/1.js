const { runTest } = require('../utils/runTest');

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let max = Number.MIN_SAFE_INTEGER;
  let imax = 0;
  for (let i = 1; i <= nums.length; i++) {
    imax = Math.max(imax + nums[i - 1], nums[i - 1]);
    max = Math.max(max, imax);
  }
  return max;
};
runTest(maxSubArray, [[-2, 1, -3, 4, -1, 2, 1, -5, 4]]);
runTest(maxSubArray, [[-2, 1]]);
runTest(maxSubArray, [[1]]);
