const { runTest } = require('../utils/runTest');

/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  let ret = [1],
    p2 = 0,
    p3 = 0,
    p5 = 0;
  while (n > 0) {
    let temp = Math.min(ret[p2] * 2, ret[p3] * 3, ret[p5] * 5);
    ret.push(temp);
    if (ret[p2] * 2 == temp) {
      p2++;
    }
    if (ret[p3] * 3 == temp) {
      p3++;
    }
    if (ret[p5] * 5 == temp) {
      p5++;
    }
    n--;
  }
  return ret[ret.length - 2];
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
