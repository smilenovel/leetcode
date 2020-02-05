/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  const ret = [];
  nums.sort();
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
    while (i < nums.length - 1 && nums[i + 1] == nums[i]) {
      i++;
    }
  }
};
console.log(JSON.stringify(permuteUnique([1, 1, 2])));
