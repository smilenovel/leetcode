/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  let ret = [];
  let nums = [];
  for (let i = 0; i < n; i++) {
    nums.push(i + 1);
  }
  backtrack(ret, nums, [], k, 0, nums.length);
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
console.log(JSON.stringify(combine(5, 3)));
