/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let left = 0;
  let right = 0;
  let count = 0;
  let length = nums.length;
  while (right < length) {
    if (nums[right] == val) {
      right++;
    } else {
      nums[left++] = nums[right++];
      count++;
    }
  }
  console.log(nums);
  return count;
};
// console.log(JSON.stringify(removeElement([1, 1, 2, 3, 4, 4, 5, 5, 6], 4)));
console.log(JSON.stringify(removeElement([4], 4)));
