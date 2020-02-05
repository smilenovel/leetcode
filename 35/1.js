/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let pos = -1;
  let before = 0;
  while (nums.length > 0) {
    if (nums.length == 1 && nums[0] != target) {
      if (nums[0] > target) {
        pos = before < 0 ? 0 : before;
      } else {
        pos = before + 1;
      }
      nums.pop();
    }
    let middlePos = Math.round(nums.length / 2) - 1;
    let value = nums[middlePos];
    if (value > target) {
      nums = nums.slice(0, middlePos + 1);
    } else if (value == target) {
      pos = before + middlePos;
      break;
    } else {
      nums = nums.slice(middlePos + 1, nums.length);
      before += middlePos + 1;
    }
  }
  return pos;
};
console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));
console.log(searchInsert([1, 3, 5, 6], 0));
