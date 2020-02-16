/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  return backtrack(s, 0, s.length);
};
var backtrack = function(s, start, size) {
  if (s[start] == '0') {
    return 0;
  }
  if (start == size) {
    return 1;
  }
  let count = backtrack(s, start + 1, size);
  if (
    start < size - 1 &&
    (s[start] == '1' || (s[start] == '2' && s[start + 1] <= '6'))
  ) {
    count += backtrack(s, start + 2, size);
  }
  return count;
};
console.log(numDecodings('0'));
console.log(numDecodings('10'));
console.log(numDecodings('12'));
console.log(numDecodings('226'));
