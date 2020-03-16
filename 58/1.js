const { runTest } = require("../utils/runTest");
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let i;
  let end = s.length - 1;
  while (end >= 0 && s[end] == " ") {
    end--;
  }
  if (end < 0) return 0;
  for (i = end; i >= 0; i--) {
    if (s[i] == " ") {
      break;
    }
  }
  return end - i;
};
runTest(lengthOfLastWord, ["HelloWorld   "]);
runTest(lengthOfLastWord, ["Hello World"]);
runTest(lengthOfLastWord, ["HelloWorld"]);
runTest(lengthOfLastWord, [""]);
