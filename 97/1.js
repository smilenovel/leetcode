const { runTest } = require('../utils/runTest');
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
  return backtrack(s1, s2, s3, 0, 0, 0);
};
var backtrack = function(s1, s2, s3, start1, start2, start3) {
  // if (s1.length == start1 && s2.length == start2 && s3.length == start3) {
  //   return true;
  // }
  for (let i = start3; i < s3.length; i++) {
    if (s3[i] == s1[start1] && s1[start1] == s2[start2]) {
      return (
        backtrack(s1, s2, s3, start1 + 1, start2, i + 1) ||
        backtrack(s1, s2, s3, start1, start2 + 1, i + 1)
      );
    } else if (s3[i] == s1[start1]) {
      start1++;
    } else if (s3[i] == s2[start2]) {
      start2++;
    } else {
      return false;
    }
  }
  return start1 == s1.length && start2 == s2.length;
};
runTest(isInterleave, ['aabcc', 'dbbca', 'aadbbcbcac']);
runTest(isInterleave, ['aabcc', 'dbbca', 'aadbbbaccc']);
