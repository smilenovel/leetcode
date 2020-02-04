/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let start = 0;
  let end = 0;
  let max = 0;
  while (start < s.length) {
    while (start < s.length && s[start] == ')') {
      start++;
    }
    let level = 1;
    let i;
    let lastMatch = -1;
    for (i = start + 1; i < s.length; i++) {
      if (s[i] == '(') {
        level++;
      } else {
        level--;
      }
      if (level < 0) {
        let length = i - start;
        if (length > max) {
          max = length;
        }
        start = i + 1;
        break;
      } else if (level == 0) {
        lastMatch = i;
      }
    }
    if (level == 0) {
      let length = i - start;
      if (length > max) {
        max = length;
      }
      break;
    } else if (lastMatch > 0) {
      let length = lastMatch - start + 1;
      if (length > max) {
        max = length;
      }
    }
    if (level > 0) start++;
  }
  return max;
};
console.log(longestValidParentheses('()'));
console.log(longestValidParentheses(')(())))(())())'));
console.log(longestValidParentheses(')(())('));
