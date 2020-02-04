/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const ret = [];
  loop(ret, n, '', 0, n);
  return ret;
};
var loop = function(ret, n, str, level, left) {
  if (str.length == n * 2) {
    ret.push(str);
    return;
  }
  if (left > 0) {
    loop(ret, n + 1, str + '(', level + 1, left - 1);
  }
  if (level > 0) {
    loop(ret, n - 1, str + ')', level - 1, left);
  }
};
console.log(JSON.stringify(generateParenthesis(3)));
