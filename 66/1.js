const { runTest } = require("../utils/runTest");

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let hasExtra = true;
  let value;

  for (let i = digits.length - 1; i >= 0 && hasExtra; i--) {
    hasExtra = digits[i] + 1 > 9;
    digits[i] = (digits[i] + 1) % 10;
  }
  if (hasExtra) {
    digits.unshift(1);
  }
  return digits;
};
runTest(plusOne, [[0]]);
runTest(plusOne, [[9, 9, 9]]);
runTest(plusOne, [[1, 2, 3]]);
