INT_MAX = Math.pow(2, 31) - 1;
INT_MIN = Math.pow(-2, 31);
function isMinus(code) {
  return code == 0x2d;
}
function isPlus(code) {
  return code == 0x2b;
}
function isNumber(code) {
  return code >= 0x30 && code <= 0x39;
}
function toNumber(code) {
  return code - 0x30;
}
function isSpace(code) {
  return code == 0x20;
}
var myAtoi = function(str) {
  var numStarted = false;
  let ret = 0;
  let neg = false;
  for (var i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);
    if (numStarted) {
      if (isNumber(code)) {
        ret = ret * 10 + toNumber(code);
      } else {
        break;
      }
    } else {
      if (isMinus(code)) {
        neg = true;
        numStarted = true;
      } else if (isPlus(code)) {
        numStarted = true;
      } else if (isNumber(code)) {
        ret = ret * 10 + toNumber(code);
        numStarted = true;
      } else if (isSpace(code)) {
        continue;
      } else {
        break;
      }
    }
  }
  if (neg) {
    ret = ret * -1;
  }
  if (ret > INT_MAX) {
    return (ret = INT_MAX);
  }
  if (ret < INT_MIN) {
    return (ret = INT_MIN);
  }
  return ret;
};
// console.log(myAtoi('42'));
console.log(myAtoi('+1'));
console.log(myAtoi('    -42'));
console.log(myAtoi('4193 with words'));
console.log(myAtoi('words and 987'));
console.log(myAtoi('-91283472332'));
