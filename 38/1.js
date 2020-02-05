/**
 * @param {number} n
 * @return {string}
 */
var getSayNum = function(n) {
  let count = 1;
  let ret = '';
  for (var i = 0; i < n.length; i++) {
    if (i == n.length - 1 || n[i + 1] != n[i]) {
      ret = ret + String(count) + n[i];
      count = 1;
    } else {
      count++;
    }
  }
  console.log(ret);
  return ret;
};
var countAndSay = function(n) {
  let num = '1';
  for (let i = 1; i < n; i++) {
    num = getSayNum(num);
  }
  return num;
};
// console.log(countAndSay(3));
// console.log(countAndSay(4));
// console.log(countAndSay(5));
console.log(countAndSay(30));
