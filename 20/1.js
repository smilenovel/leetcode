/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i);
    if (stack.length == 0) {
      stack.push(c);
    } else {
      switch (c) {
        case ')':
          if (stack.pop() != '(') return false;
          break;
        case '}':
          if (stack.pop() != '{') return false;
          break;
        case ']':
          if (stack.pop() != '[') return false;
          break;
        default:
          stack.push(c);
      }
    }
  }
  return stack.length == 0;
};
console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
console.log(isValid('['));
console.log(isValid('([)]'));
console.log(isValid('{[]}'));
