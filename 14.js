var longestCommonPrefix = function(strs) {
  if (strs.length == 0) {
    return '';
  } else if (strs.length == 1) {
    return strs[0];
  }
  let ret = '';
  for (var i = 0; i < strs[0].length; i++) {
    let c = strs[0][i];
    for (var j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j][i] != c) {
        return ret;
      }
    }
    ret += c;
  }
  return ret;
};
console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
