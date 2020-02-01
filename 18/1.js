/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  let res = [];
  let length = nums.length;
  nums.sort((a, b) => a - b); // 先排个队，最左边是最弱（小）的，最右边是最强(大)的
  console.log(nums);
  // 优化1: 整个数组同符号，则无解
  for (let i = 0; i < length - 3; ) {
    for (let j = i + 1; j < length - 2; ) {
      let first = j + 1;
      let last = length - 1;
      do {
        if (first >= last) break; // 两人选相遇，或者三人同符号，则退出
        let result = nums[i] + nums[j] + nums[first] + nums[last];
        let diff = result - target;
        if (diff === 0) {
          // 如果可以组队
          res.push([nums[i], nums[j], nums[first], nums[last]]);
          while (first < last && nums[first] === nums[++first]) {}
        } else if (diff < 0) {
          // 实力太弱，把菜鸟那边右移一位
          while (first < last && nums[first] === nums[++first]) {} // 如果相等就跳过
        } else {
          // 实力太强，把大神那边右移一位
          while (first < last && nums[last] === nums[--last]) {}
        }
      } while (first < last);
      while (nums[j] === nums[++j]) {}
    }
    while (nums[i] === nums[++i]) {}
  }
  console.log('return');
  return res;
};
console.log(JSON.stringify(fourSum([1, 0, -1, 0, -2, 2], 0)));

// console.log(JSON.stringify(fourSum([-1, -5, -5, -3, 2, 5, 0, 4], -7)));
// console.log(JSON.stringify(fourSum([-3, -2, -1, 0, 0, 1, 2, 3], 0)));
