var reverse = function(x) {
  if (x < Math.pow(-2, 31) || x > Math.pow(2, 31) - 1) {
    return 0;
  }
  let ret = 0;
  let neg = false;
  if (x < 0) {
    x = Math.abs(x);
    neg = true;
  }
  while (x > 0) {
    const n = x % 10;
    x = Math.floor(x / 10);
    ret = ret * 10 + n;
  }
  return neg ? -1 * ret : ret;
};
console.log(Math.pow(2, 31));
console.log(Math.pow(-2, 31));
console.log(reverse(1534236469));
console.log(reverse(123));
console.log(reverse(-123));
