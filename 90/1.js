/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  let ret = [[]];
  nums.sort();
  for (let i = 1; i <= nums.length; i++) {
    backtrack(ret, nums, [], 0, nums.length, i, 0);
  }
  return ret;
};
var backtrack = function(ret, nums, path, start, size, count, level) {
  if (count == 0) {
    ret.push([...path]);
    return;
  }
  for (let i = start; i < size; i++) {
    path.push(nums[i]);
    backtrack(ret, nums, path, i + 1, size, count - 1, level + 1);
    path.pop(nums[i]);
    while (i < size - 1 && nums[i] == nums[i + 1]) {
      i++;
    }
  }
};
console.log('ret', JSON.stringify(subsetsWithDup([1, 2, 3])));
