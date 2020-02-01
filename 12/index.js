/**
 * @param {number} num
 * @return {string}
 */
var multipleChar = function(c, n) {
  let ret = '';
  for (var i = 0; i < n; i++) {
    ret += c;
  }
  return ret;
};
var intToRoman = function(num) {
  const chars = [['I', 'V'], ['X', 'L'], ['C', 'D'], ['M']];
  let ret = '';
  let level = 0;
  while (num > 0) {
    let cur = '';
    const single = num % 10;
    num = Math.floor(num / 10);
    if (single < 4) {
      cur += multipleChar(chars[level][0], single);
    } else if (single == 4) {
      cur += chars[level][0] + chars[level][1];
    } else if (single < 9) {
      cur += chars[level][1] + multipleChar(chars[level][0], single - 5);
    } else {
      cur += chars[level][0] + chars[level + 1][0];
    }
    ret = cur + ret;
    level++;
  }
  return ret;
};
console.log(intToRoman(3));
console.log(intToRoman(4));
console.log(intToRoman(7));
console.log(intToRoman(9));
console.log(intToRoman(13));
console.log(intToRoman(40));
