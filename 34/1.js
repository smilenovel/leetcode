/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let arrs = nums;
  let before = 0;
  let pos = -1;
  while (arrs.length > 0) {
    if (arrs.length == 1 && arrs[0] != target) break;
    let middlePos = Math.round(arrs.length / 2) - 1;
    let value = arrs[middlePos];
    if (value > target) {
      arrs = arrs.slice(0, middlePos + 1);
    } else if (value == target) {
      pos = before + middlePos;
      break;
    } else {
      arrs = arrs.slice(middlePos + 1, arrs.length);
      before += middlePos + 1;
    }
  }
  let first = pos;
  let end = pos;
  while (first > 0 && nums[first - 1] == target) {
    first--;
  }
  while (end < nums.length - 1 && nums[end + 1] == target) {
    end++;
  }
  return [first, end];
};
console.log(searchRange([1, 4], 1));
console.log(searchRange([1, 4], 4));
console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([5, 5, 7, 7, 8, 8, 9, 9, 10, 10], 5));
console.log(searchRange([5, 5, 7, 7, 8, 8, 9, 9, 10, 10], 7));
console.log(searchRange([5, 5, 7, 7, 8, 8, 9, 9, 10, 10], 8));
console.log(searchRange([5, 5, 7, 7, 8, 8, 9, 9, 10, 10], 9));
console.log(searchRange([5, 5, 7, 7, 8, 8, 9, 9, 10, 10], 10));
