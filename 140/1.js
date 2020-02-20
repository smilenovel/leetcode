const { runTest } = require('../utils/runTest');

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
  let memo = {};
  if (s.length == 0) {
    return [];
  }
  return _wordBreak(s, wordDict, memo, 0);
};
var _wordBreak = function(s, wordDict, memo, start) {
  // console.log('start', start);
  let strs = [];
  if (s.length == start) {
    return [''];
  }
  if (memo[start] != null) {
    return memo[start];
  }
  let word;
  for (let i = start + 1; i <= s.length; i++) {
    // console.log('test', s.substring(start, i));
    if (wordDict.includes((word = s.substring(start, i)))) {
      // console.log('word', word, i);
      let ret = _wordBreak(s, wordDict, memo, i);
      if (ret.length > 0) {
        for (let j = 0; j < ret.length; j++) {
          strs.push(ret[j] == '' ? word : word + ' ' + ret[j]);
        }
      }
    }
  }
  memo[start] = strs;
  return strs;
};
runTest(wordBreak, ['ab', ['a', 'b']]);

runTest(wordBreak, ['catsanddog', ['cat', 'cats', 'and', 'sand', 'dog']]);
