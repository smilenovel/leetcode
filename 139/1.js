let { runTest } = require('../utils/runTest');

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  if (s.length == 0) {
    return false;
  }
  let history = {};
  // console.log(wordDict);
  return backtrack(s, history, wordDict, 0);
};
var backtrack = function(s, history, wordDict, start) {
  if (start == s.length) {
    return true;
  }
  if (history[start]) {
    return true;
  }
  for (let i = 0; i < wordDict.length; i++) {
    let word = wordDict[i];
    // console.log('check', word);
    let startWithWord = true;
    for (let j = 0; j < word.length; j++) {
      if (word[j] != s[start + j]) {
        startWithWord = false;
        break;
      }
    }
    if (startWithWord && backtrack(s, history, wordDict, start + word.length)) {
      history[start] = true;
      return true;
    }
  }
  history[start] = false;
  return false;
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
