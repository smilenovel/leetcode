var convert = function(s, numRows) {
  if (numRows == 1) {
    return s;
  }
  const frag = numRows * 2 - 2;
  const strs = [];
  for (var i = 0; i < s.length; i++) {
    const index = i % frag;
    let row = 0;
    if (index < numRows) {
      row = index;
    } else {
      row = 2 * numRows - index - 2;
    }
    if (!strs[row]) {
      strs[row] = '';
    }
    strs[row] += s[i];
  }
  return strs.join('');
};
console.log(convert('LEETCODEISHIRING', 3));
console.log(convert('LEETCODEISHIRING', 4));
console.log(convert('AB', 1));
console.log(convert('AB', 2));
console.log(convert('PAYPALISHIRING', 4));
