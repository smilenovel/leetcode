const { runTest } = require('../utils/runTest');

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let start = 0;

  for (let i = m; i < m + n; i++) {
    nums1[i] = nums2[i - m];
  }
  return nums1.sort((a, b) => (a > b ? 1 : -1));
};
runTest(merge, [[-1, -2, 1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3]);
