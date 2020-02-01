const maps = {
  '2': 'abc',
  '3': 'def',
  '4': 'ghi',
  '5': 'jkl',
  '6': 'mno',
  '7': 'pqrs',
  '8': 'tuv',
  '9': 'wxyz'
};
var letterCombinations = function(digits) {
  if (digits.length == 0) {
    return [];
  }
  const ret = [];
  let count = 1;
  for (var i = 0; i < digits.length; i++) {
    count = count * maps[digits[i]].length;
  }
  console.log('count', count);
  for (var i = 0; i < count; i++) {
    let product = 1;
    let str = '';
    for (var j = 0; j < digits.length; j++) {
      const map = maps[digits[j]];
      console.log(map);
      str += map[Math.floor(i / product) % map.length];
      product *= map.length;
    }
    ret.push(str);
    console.log(ret);
  }
  return ret;
};
console.log(letterCombinations('323'));
