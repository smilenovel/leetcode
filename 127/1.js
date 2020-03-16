const { runTest } = require("../utils/runTest");
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  let hash = {};
  let stack = [beginWord];
  let distance = 1;
  while (stack.length > 0) {
    let newStack = [];
    while (stack.length > 0) {
      let word = stack.pop();
      for (let i = 0; i < wordList.length; i++) {
        if (!hash[wordList[i]] && isLadder(word, wordList[i])) {
          if (endWord == wordList[i]) {
            return distance + 1;
          }
          hash[wordList[i]] = distance;
          newStack.push(wordList[i]);
        }
      }
    }
    stack = newStack;
    distance++;
  }
  return 0;
};

var isLadder = function(a, b) {
  let diffCount = 0;
  if (a.length != b.length || a == b) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] != b[i]) {
      diffCount++;
    }
    if (diffCount > 1) {
      return false;
    }
  }
  return true;
};
runTest(ladderLength, [
  "hit",
  "cog",
  ["hot", "dot", "dog", "lot", "log", "cog"]
]);

runTest(ladderLength, ["hit", "cog", ["hot", "dot", "dog", "lot", "log"]]);
