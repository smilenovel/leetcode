const { runTest } = require("../utils/runTest");
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  let len = s.length;
  let res = [];
  if (len == 0) {
    return res;
  }
  let dp = [];
  for (let left = len - 1; left >= 0; left--) {
    dp[left] = [];
    // 注意：left <= right 取等号表示 1 个字符的时候也需要判断
    for (let right = len - 1; right >= left; right--) {
      if (
        s.charAt(left) == s.charAt(right) &&
        (right - left <= 2 || (dp[left + 1] && dp[left + 1][right - 1]))
      ) {
        dp[left][right] = true;
      }
    }
  }
  let stack = [];
  backtrack(s, 0, len, dp, stack, res);
  return res;
};
var backtrack = function(s, start, len, dp, path, res) {
  if (start == len) {
    res.push([...path]);
    return;
  }

  for (let i = start; i < len; i++) {
    // 剪枝
    if (!dp[start][i]) {
      continue;
    }
    path.push(s.substring(start, i + 1));
    backtrack(s, i + 1, len, dp, path, res);
    path.pop();
  }
};
// runTest(partition, ["aab"]);
runTest(partition, ["abbab"]);
