/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  return searchFirst(nums, nums.length - 1);
};
var searchFirst = function(nums, count) {
  if (count == 0) {
    return true;
  }
  for (let i = 0; i < count; i++) {
    if (count - i <= nums[i]) {
      if (i == 0) {
        return true;
      } else {
        return searchFirst(nums, i);
      }
    }
  }
  return false;
};
console.log(JSON.stringify(canJump([0])));
console.log(JSON.stringify(canJump([2, 3, 1, 1, 4])));
console.log(JSON.stringify(canJump([3, 2, 1, 0, 4])));
