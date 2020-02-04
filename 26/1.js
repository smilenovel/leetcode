/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length <= 1) {
    return nums.length;
  }
  let left = 0;
  let cur = 1;
  let count = 1;
  while (cur < nums.length) {
    if (nums[left] != nums[cur]) {
      nums[++left] = nums[cur++];
      count++;
    } else {
      cur++;
    }
  }
  // console.log(nums);
  return count;
};
console.log(JSON.stringify(removeDuplicates([1, 1, 2, 3, 4, 4, 5, 5, 6])));
