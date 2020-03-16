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
  let dict = {};
  let l = beginWord.length;
  wordList.forEach(word => {
    for (let i = 0; i < l; i++) {
      let newWord = word.substring(0, i) + "*" + word.substring(i + 1, l);
      transformations = dict[newWord] || [];
      transformations.push(word);
      dict[newWord] = transformations;
    }
  });
  while (stack.length > 0) {
    let newStack = [];
    while (stack.length > 0) {
      let word = stack.pop();
      for (let i = 0; i < l; i++) {
        let newWord = word.substring(0, i) + "*" + word.substring(i + 1, l);
        if (!dict[newWord]) {
          continue;
        }
        let adjacentWords = dict[newWord];
        for (let j = 0; j < adjacentWords.length; j++) {
          if (endWord == adjacentWords[j]) {
            return distance + 1;
          }
          if (!hash[adjacentWords[j]]) {
            hash[dict[newWord]] = true;
            newStack.push(adjacentWords[j]);
          }
        }
      }
    }
    stack = newStack;
    distance++;
  }
  return 0;
};

runTest(ladderLength, [
  "hit",
  "cog",
  ["hot", "dot", "dog", "lot", "log", "cog"]
]);

runTest(ladderLength, ["hit", "cog", ["hot", "dot", "dog", "lot", "log"]]);
