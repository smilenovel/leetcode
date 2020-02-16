/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  let stack = [];
  let count = 0;
  let size = s.length;
  stack.push(0);
  while (stack.length > 0) {
    let start = stack.pop();
    if (s[start] == '0' || start > size) {
      continue;
    }
    if (start == size) {
      count++;
    }
    stack.push(start + 1);
    if (
      start < size - 1 &&
      (s[start] == '1' || (s[start] == '2' && parseInt(s[start + 1]) <= 6))
    ) {
      stack.push(start + 2);
    }
  }
  return count;
};
console.log(numDecodings('0'));
console.log(numDecodings('10'));
console.log(numDecodings('12'));
console.log(numDecodings('226'));
