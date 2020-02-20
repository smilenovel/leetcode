const { runTest } = require('../utils/runTest');
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let ret = nums[0];
  return nums;
};
runTest(singleNumber, [[2, 2, 3, 2]]);
