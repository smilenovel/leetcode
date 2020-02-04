/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  let divide = 0;
  let isNeg = dividend * divisor < 0 ? true : false;
  dividend = Math.abs(dividend) * -1;
  divisor = Math.abs(divisor) * -1;
  if (divisor != -1) {
    while (dividend <= divisor) {
      let multi = -1;
      let num = divisor;
      while (dividend < num << 1) {
        num = num << 1;
        multi = multi << 1;
      }
      dividend -= num;
      divide += multi;
    }
  } else {
    divide = dividend;
  }
  if (!isNeg && divide == -2147483648) {
    divide++;
  }
  return isNeg ? divide : divide * -1;
};
console.log(divide(-2147483648, -1));
console.log(divide(10, 3));
console.log(divide(10, 1));
console.log(divide(-10, 1));
console.log(divide(10, -3));
