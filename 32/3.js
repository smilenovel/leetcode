/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let maxans = 0;
  let stack = [];
  stack.push(-1);
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) == '(') {
      stack.push(i);
    } else {
      stack.pop();
      if (stack.length == 0) {
        stack.push(i);
      } else {
        maxans = Math.max(maxans, i - stack[stack.length - 1]);
      }
    }
  }
  return maxans;
};
console.log(longestValidParentheses('()'));
console.log(longestValidParentheses(')(()())('));
console.log(longestValidParentheses(')(())('));
