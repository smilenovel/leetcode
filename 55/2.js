/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let last = nums.length - 1; //last possible end
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] >= last - i) {
      last = i;
    }
    if (i == 0 && last != 0) {
      return false;
    }
  }
  return true;
};
console.log(JSON.stringify(canJump([0])));
console.log(JSON.stringify(canJump([2, 3, 1, 1, 4])));
console.log(JSON.stringify(canJump([3, 2, 1, 0, 4])));
