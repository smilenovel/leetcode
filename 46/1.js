/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const ret = [];
  backpack(ret, nums, [], {});
  return ret;
};
var backpack = function(ret, nums, path, map) {
  if (nums.length == path.length) {
    ret.push([...path]);
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    if (map[i]) continue;
    let num = nums[i];
    path.push(num);
    map[i] = true;
    backpack(ret, nums, path, map);
    map[i] = false;
    path.pop();
  }
};
console.log(JSON.stringify(permute([1, 2, 3])));
