/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let p0 = 1;
  let p1 = 1;
  let count = 1;
  let length = nums.length;
  if (nums.length < 2) {
    return nums.length;
  }
  while (p1 < length) {
    if (nums[p1] == nums[p1 - 1]) {
      count++;
    } else {
      count = 1;
    }
    if (count <= 2) {
      nums[p0] = nums[p1];
      p0++;
      p1++;
    } else {
      let num = nums[p1];
      while (nums[p1] == num && p1 < length) {
        p1++;
      }
    }
  }
  return p0;
};
let nums = [1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3];
console.log(removeDuplicates(nums), nums);
nums = [1, 1, 1, 2];
console.log(removeDuplicates(nums), nums);
