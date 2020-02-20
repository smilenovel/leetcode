let { runTest } = require('../utils/runTest');

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  let memo = {};
  return backtrack(s, wordDict, 0, memo);
};
var backtrack = function(s, wordDict, start, memo) {
  if (start == s.length) {
    return true;
  }
  if (memo[start] != null) {
    return memo[start];
  }
  for (let end = start + 1; end <= s.length; end++) {
    if (
      wordDict.includes(s.substring(start, end)) &&
      backtrack(s, wordDict, end, memo)
    ) {
      return (memo[start] = true);
    }
  }
  return (memo[start] = false);
};
runTest(wordBreak, ['leetcode', ['leet', 'code']]);
runTest(wordBreak, [' ', ['leet', 'code']]);
runTest(wordBreak, ['applepenapple', ['apple', 'pen']]);
runTest(wordBreak, ['catsandog', ['cats', 'dog', 'sand', 'and', 'cat']]);
runTest(wordBreak, ['cars', ['car', 'ca', 'rs']]);
runTest(wordBreak, [
  'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab',
  [
    'a',
    'aa',
    'aaa',
    'aaaa',
    'aaaaa',
    'aaaaaa',
    'aaaaaaa',
    'aaaaaaaa',
    'aaaaaaaaa',
    'aaaaaaaaaa'
  ]
]);
