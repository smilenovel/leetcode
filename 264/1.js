const { runTest } = require('../utils/runTest');

/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  let hash = { 1: true };
  let last = 1;
  for (let i = 1; i < n; i++) {
    let num = last + 1;
    do {
      if (num / 2 == Math.floor(num / 2) && hash[num / 2]) {
        last = num;
        break;
      }
      if (num / 3 == Math.floor(num / 3) && hash[num / 3]) {
        last = num;
        break;
      }
      if (num / 5 == Math.floor(num / 5) && hash[num / 5]) {
        last = num;
        break;
      }
      num++;
    } while (true);
    hash[last] = true;
  }
  return last;
};
runTest(nthUglyNumber, [1]);
runTest(nthUglyNumber, [2]);
runTest(nthUglyNumber, [3]);
runTest(nthUglyNumber, [4]);
runTest(nthUglyNumber, [5]);
runTest(nthUglyNumber, [6]);
runTest(nthUglyNumber, [7]);
runTest(nthUglyNumber, [10]);
runTest(nthUglyNumber, [1352]);
