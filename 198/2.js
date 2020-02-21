const { runTest } = require('../utils/runTest');

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let prevMax = 0;
  let currMax = 0;
  for (let i = 0; i < nums.length; i++) {
    let temp = currMax;
    currMax = Math.max(prevMax + nums[i], currMax);
    prevMax = temp;
  }
  return currMax;
};
runTest(rob, [[1, 2, 3, 1]]);
runTest(rob, [[2, 7, 9, 3, 1]]);
runTest(rob, [[]]);
runTest(rob, [[1]]);
runTest(rob, [[1, 2]]);
