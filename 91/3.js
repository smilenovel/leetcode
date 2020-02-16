/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  let n = s.length;
  if (n == 0) return 0;
  if (s[0] == '0') return 0;
  let dpShort = [];
  let dpLong = [];
  dpShort[0] = 1;
  dpLong[0] = 0;
  for (let i = 1; i < n; i++) {
    if (s[i] == '0') {
      if (s[i - 1] == '1' || s[i - 1] == '2') {
        dpShort[i] = 0;
        dpLong[i] = dpShort[i - 1];
      } else return 0;
    } else if (s[i - 1] == '1' || (s[i - 1] == '2' && s[i] <= '6')) {
      dpShort[i] = dpShort[i - 1] + dpLong[i - 1];
      dpLong[i] = dpShort[i - 1];
    } else {
      dpShort[i] = dpShort[i - 1] + dpLong[i - 1];
      dpLong[i] = 0;
    }
  }
  return dpLong[n - 1] + dpShort[n - 1];
};
console.log(numDecodings('0'));
console.log(numDecodings('10'));
console.log(numDecodings('12'));
console.log(numDecodings('226'));
