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
  let rob1 = _rob(nums, 0, nums.length - 1);
  let rob2 = _rob(nums, 1, nums.length);
  return Math.max(rob1, rob2);
};
var _rob = function(nums, start, end) {
  let prevMax = 0;
  let curMax = 0;
  for (let i = start; i < end; i++) {
    let temp = curMax;
    curMax = Math.max(prevMax + nums[i], curMax);
    prevMax = temp;
  }
  return curMax;
};
runTest(rob, [[2, 3, 2]]);
runTest(rob, [[2, 7, 9, 3, 1]]);
runTest(rob, [[]]);
runTest(rob, [[1]]);
runTest(rob, [[1, 2]]);
runTest(rob, [[1, 2, 3]]);
