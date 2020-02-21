const { runTest } = require('../utils/runTest');

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let max = Number.MIN_SAFE_INTEGER;
  // 由于存在负数，所以需要维护两个数组
  // dp_max[i] 指的是以第 i 个数结尾的 乘积最大 的连续子序列
  // dp_min[i] 指的是以第 i 个数结尾的 乘积最小 的连续子序列
  let imin = 1;
  let imax = 1;
  for (let i = 1; i <= nums.length; i++) {
    // 如果数组的数是负数，那么会导致 max 变成 min，min 变成 max
    // 故需要交换dp
    if (nums[i - 1] < 0) {
      let temp = imin;
      imin = imax;
      imax = temp;
    }
    imax = Math.max(nums[i - 1], imax * nums[i - 1]);
    imin = Math.min(nums[i - 1], imin * nums[i - 1]);
    max = Math.max(max, imax);
  }
  return max;
};
runTest(maxProduct, [[2, 3, -2, 4, 8, 1]]);
runTest(maxProduct, [[-2, 0, -1]]);
runTest(maxProduct, [[2, 3, -2, 4, 7, 8]]);
