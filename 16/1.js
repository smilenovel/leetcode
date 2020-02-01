/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  let length = nums.length;
  let min = Number.MAX_SAFE_INTEGER;

  nums.sort((a, b) => a - b);
  console.log(nums);
  for (let i = 0; i < length - 2; ) {
    let first = i + 1;
    let last = length - 1;
    let diff;
    do {
      if (first >= last) break;
      let result = nums[i] + nums[first] + nums[last];
      diff = target - result;
      if (diff === 0) {
        return target;
      }
      if (Math.abs(diff) < Math.abs(min)) {
        min = diff;
      }
      if (diff > 0) {
        while (first < last && nums[first] === nums[++first]) {}
      } else {
        while (first < last && nums[last] === nums[--last]) {}
      }
    } while (first < last);
    while (nums[i] === nums[++i]) {}
  }
  return target - min;
};
console.log(threeSumClosest([1, 2, 5, 10, 11], 12));

// console.log(threeSumClosest([0, 2, 1, -3], 1));
// console.log(threeSumClosest([-1, 2, 1, -4], 1));
