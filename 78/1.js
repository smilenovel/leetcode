/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let ret = [];
  for (let i = 0; i <= nums.length; i++) {
    backtrack(ret, nums, [], i, 0, nums.length);
  }
  return ret;
};
var backtrack = function(ret, nums, path, count, start, end) {
  if (count == 0) {
    ret.push([...path]);
    return;
  }
  if (start >= end) {
    return;
  }
  for (let i = start; i < end; i++) {
    path.push(nums[i]);
    backtrack(ret, nums, path, count - 1, i + 1, end);
    path.pop();
  }
};
console.log(JSON.stringify(subsets([1, 2, 3])));
