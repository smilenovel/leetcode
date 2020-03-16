const { runTest } = require("../utils/runTest");
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
  let ret = [];
  let wordCount = 0;
  let start = 0;
  for (let i = 0; i < words.length; i++) {
    let space = wordCount > 0 ? 1 : 0;
    if (wordCount + words[i].length + space > maxWidth) {
      addRow(words, maxWidth, ret, start, i - 1, wordCount);
      start = i;
      wordCount = 0;
      i--;
    } else if (i == words.length - 1) {
      addLeftJustifyRow(
        words,
        maxWidth,
        ret,
        start,
        i,
        wordCount + words[i].length
      );
    } else {
      wordCount += words[i].length + space;
    }
  }
  return ret;
};
var addRow = function(words, maxWidth, ret, start, end, length) {
  if (start == end) {
    return addLeftJustifyRow(words, maxWidth, ret, start, end, length);
  }
  let count = end - start + 1;
  let gap = maxWidth - length + count - 1;
  let minSpace = Math.floor(gap / (count - 1));
  let spaceLeft = gap - minSpace * (count - 1);
  let space = "";
  let str = "";
  for (let i = 0; i < minSpace; i++) {
    space += " ";
  }
  for (let i = start; i <= end; i++) {
    str += words[i];
    if (i != end) {
      str = str + space + (spaceLeft-- > 0 ? " " : "");
    }
  }
  ret.push(str);
  // console.log(
  //   "add row",
  //   JSON.stringify({
  //     start,
  //     end,
  //     length,
  //     gap,
  //     minSpace,
  //     spaceLeft,
  //     space,
  //     words: words.slice(start, end + 1),
  //     str
  //   })
  // );
};
var addLeftJustifyRow = function(words, maxWidth, ret, start, end, length) {
  let str = "";
  for (let i = start; i <= end; i++) {
    str += words[i] + (i == end ? "" : " ");
  }
  for (let i = str.length; i < maxWidth; i++) {
    str += " ";
  }

  ret.push(str);
};
runTest(fullJustify, [
  ["This", "is", "an", "example", "of", "text", "justification."],
  16
]);

runTest(fullJustify, [
  ["What", "must", "be", "acknowledgment", "shall", "be"],
  16
]);

runTest(fullJustify, [
  [
    "Science",
    "is",
    "what",
    "we",
    "understand",
    "well",
    "enough",
    "to",
    "explain",
    "to",
    "a",
    "computer.",
    "Art",
    "is",
    "everything",
    "else",
    "we",
    "do",
    "next"
  ],
  20
]);
