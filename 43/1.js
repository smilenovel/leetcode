/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const zero = '0'.charCodeAt(0);
var multiply = function(num1, num2) {
  let zero = '0'.charCodeAt(0);
  let n1 = num1.length;
  let n2 = num2.length;
  let res = [];
  for (let i = n2 - 1; i >= 0; i--) {
    for (let j = n1 - 1; j >= 0; j--) {
      let temp =
        parseInt(res[i + j + 1] || '0') + parseInt(num1[j]) * parseInt(num2[i]);
      res[i + j + 1] = (temp % 10) + ''; //当前位
      res[i + j] = parseInt(res[i + j] || '0') + Math.floor(temp / 10) + '';
    }
  }

  //去除首位'0'
  let result = res.join('');
  for (let i = 0; i < n1 + n2; i++) {
    if (result[i] != '0' || i == n1 + n2 - 1) return result.substr(i);
  }
  return result;
};
console.log(multiply('123', '456'));
console.log(multiply('0', '0'));
