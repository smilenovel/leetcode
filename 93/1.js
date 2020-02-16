/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  let ret = [];
  if (s.length < 4 || s.length > 12) {
    return [];
  }
  backtrack(s, ret, '', 0, s.length, 4);
  return ret;
};
var backtrack = function(s, ret, str, start, size, left) {
  if ((size - start) / left > 3 || size - start < left) {
    return;
  }
  if (start == size) {
    ret.push(str.substr(0, str.length - 1));
    return;
  }
  let num = s[start];
  backtrack(s, ret, str + num + '.', start + 1, size, left - 1);
  if (start < size - 1 && s[start] != '0') {
    num += s[start + 1];
    backtrack(s, ret, str + num + '.', start + 2, size, left - 1);
  }
  if (start < size - 2) {
    num += s[start + 2];
    if (num >= '100' && num <= '255') {
      backtrack(s, ret, str + num + '.', start + 3, size, left - 1);
    }
  }
};
console.log(JSON.stringify(restoreIpAddresses('22222211135')));
console.log(JSON.stringify(restoreIpAddresses('0000')));
console.log(JSON.stringify(restoreIpAddresses('010010')));
