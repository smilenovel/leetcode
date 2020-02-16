/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  let result = -1;
  let start = 0;
  let end = nums.length - 1;
  if (nums.length == 0) {
    return false;
  }
  while (start <= end) {
    if (nums[start] == nums[end] && start != end) {
      start++;
      continue;
    }
    let first = nums[start];
    let last = nums[end];
    let middleIdx = Math.floor((end - start) / 2) + start;
    let middle = nums[middleIdx];
    let isLeftPart = first > last && middle >= first;
    if (target == middle) {
      return true;
    } else {
      if (start == end) {
        return false;
      }
      if (target > middle) {
        if (isLeftPart || target <= last) {
          start = middleIdx + 1;
        } else {
          end = middleIdx;
        }
      } else if (target < middle) {
        if (!isLeftPart || target >= first) {
          end = middleIdx;
        } else {
          start = middleIdx + 1;
        }
      }
    }
  }
  return false;
};
console.log(search([1], 1));
console.log(search([3, 1], 1));
console.log(search([3, 1], 2));
console.log(search([1, 1, 3, 1], 3));
console.log(search([1, 3, 1, 1, 1], 3));
console.log(search([2, 5, 6, 0, 0, 1, 2], 0));
console.log(search([2, 5, 6, 0, 0, 1, 2], 1));
console.log(search([2, 5, 6, 0, 0, 1, 2], 2));
console.log(search([2, 5, 6, 0, 0, 1, 2], 3));
console.log(search([2, 5, 6, 0, 0, 1, 2], 4));
console.log(search([2, 5, 6, 0, 0, 1, 2], 5));
console.log(search([2, 5, 6, 0, 0, 1, 2], 6));
