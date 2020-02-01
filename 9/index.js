var isPalindrome = function(x) {
  if (x < 0) {
    return false;
  }
  const nums = [];
  while (x > 0) {
    nums[nums.length] = x % 10;
    x = Math.floor(x / 10);
  }
  while (nums.length > 0) {
    if (nums.length == 1) return true;
    const left = nums.shift();
    const right = nums.pop();
    if (left != right) {
      return false;
    }
  }
  return true;
};
console.log(isPalindrome('11'));
console.log(isPalindrome('1'));
console.log(isPalindrome('212121'));
console.log(isPalindrome('-1'));
