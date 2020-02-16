/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  // 对于所有 idx < i : nums[idx < i] = 0
  // j是当前考虑元素的下标
  let p0 = 0,
    curr = 0;
  // 对于所有 idx > k : nums[idx > k] = 2
  let p2 = nums.length - 1;

  let tmp;
  while (curr <= p2) {
    if (nums[curr] == 0) {
      // 交换第 p0个和第curr个元素
      // i++，j++
      tmp = nums[p0];
      nums[p0++] = nums[curr];
      nums[curr++] = tmp;
    } else if (nums[curr] == 2) {
      // 交换第k个和第curr个元素
      // p2--
      tmp = nums[curr];
      nums[curr] = nums[p2];
      nums[p2--] = tmp;
    } else curr++;
  }
};
let nums = [2, 0, 2, 1, 1, 0];
sortColors(nums);
console.log(JSON.stringify(nums));
