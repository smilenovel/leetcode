const { runTest } = require("../utils/runTest");
/**
 * @param {string}
 * @return {string}
 */
var longestPalindrome = function(s) {
  let revert = "";
  for (var i = s.length - 1; i >= 0; i--) {
    revert += s[i];
  }
  let longest = "";
  for (var i = 0; i < s.length; i++) {
    for (j = i; j < s.length; j++) {
      const substr1 = s.substring(i, j + 1);
      const substr2 = revert.substring(s.length - j - 1, s.length - i);
      if (substr1 == substr2) {
        if (substr1.length > longest.length) {
          longest = substr1;
        }
      }
    }
  }
  return longest;
};

runTest(longestPalindrome, ["babad"]);
