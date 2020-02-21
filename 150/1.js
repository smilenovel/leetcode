const { runTest } = require('../utils/runTest');

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  let stack = [];
  for (let i = 0; i < tokens.length; i++) {
    let s = tokens[i];
    let l, r;
    switch (s) {
      case '+':
        r = stack.pop();
        l = stack.pop();
        stack.push(l + r);
        break;
      case '-':
        r = stack.pop();
        l = stack.pop();
        stack.push(l - r);
        break;
      case '*':
        r = stack.pop();
        l = stack.pop();
        stack.push(l * r);
        break;
      case '/':
        r = stack.pop();
        l = stack.pop();
        let ret = l / r;
        stack.push(ret > 0 ? Math.floor(ret) : Math.ceil(ret));
        break;
      default:
        stack.push(parseInt(s));
    }
  }
  return stack.pop();
};
// runTest(evalRPN, [['2', '1', '+', '3', '*']]);
runTest(evalRPN, [
  ['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']
]);
