var threeSum = function(nums) {
  const index = {};
  const ret = [];
  nums = nums
    .filter(function(num) {
      if (index[num]) {
        index[num] = index[num] + 1;
        return false;
      } else {
        index[num] = 1;
        return true;
      }
    })
    .sort(function(a, b) {
      return Math.abs(b) - Math.abs(a);
    });
  // console.log('before compute', index, nums, zeroCount);
  for (var i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num == 0 && index[num] > 2) {
      ret.push([0, 0, 0]);
    }
    const isNeg = num < 0;
    for (var j = i + 1; j < nums.length; j++) {
      const num1 = nums[j];
      if (num * num1 > 0) {
        continue;
      }
      const gap = -1 * num - num1;
      if (Math.abs(gap) > Math.abs(num1)) {
        continue;
      } else if (gap == num1) {
        if (index[gap] > 1) {
          ret.push([num, num1, num1]);
        }
      } else {
        if (index[gap] > 0) {
          ret.push([num, gap, num1]);
        }
      }
    }
  }
  return ret;
};
console.log(
  'result1',
  JSON.stringify(threeSum([-1, -5, 0, 0, 0, 1, 2, -1, -4]))
);

console.log('result2', JSON.stringify(threeSum([3, -2, 1, 0])));
console.log('result3', JSON.stringify(threeSum([3, 0, -2, -1, 1, 2])));
