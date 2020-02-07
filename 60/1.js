/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  let nums = [];
  let ret = '';
  let count = 1;
  for (let i = 1; i <= n; i++) {
    nums.push(i);
    count *= i;
  }
  for (let i = 0; i < n; i++) {
    let fragSize = count / nums.length;
    let index = Math.floor((k - 1) / fragSize);
    let num = nums[index];
    count = count / nums.length;
    k = ((k - 1) % fragSize) + 1;
    nums.splice(index, 1);
    ret += num;
  }
  return ret;
};
console.log(getPermutation(1, 1));
console.log(getPermutation(3, 1));
console.log(getPermutation(3, 2));
console.log(getPermutation(3, 3));
console.log(getPermutation(3, 4));
console.log(getPermutation(4, 1));
console.log(getPermutation(4, 2));
console.log(getPermutation(4, 3));
console.log(getPermutation(4, 4));
