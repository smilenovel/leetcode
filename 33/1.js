/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let result = -1;
  let head = 0;
  while (nums.length > 0) {
    let first = nums[0];
    let last = nums[nums.length - 1];
    let middleIdx = Math.round(nums.length / 2) - 1;
    let middle = nums[middleIdx];
    let isLeftPart = first > last && middle >= first;
    if (target > middle) {
      if (isLeftPart || target <= last) {
        nums = nums.slice(middleIdx + 1, nums.length);
        head += middleIdx + 1;
      } else {
        nums = nums.slice(0, middleIdx);
      }
    } else if (target < middle) {
      if (!isLeftPart || target >= first) {
        nums = nums.slice(0, middleIdx);
      } else {
        nums = nums.slice(middleIdx + 1, nums.length);
        head += middleIdx + 1;
      }
    } else {
      return head + middleIdx;
    }
  }
  return result;
};
console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search([3, 1], 1));
console.log(search([1, 3, 5], 1));
console.log(search([3, 5, 1], 3));
