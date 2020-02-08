/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  let dep = [];
  for (let j = 0; j < n; j++) {
    dep[j] = [1];
  }
  for (let i = 0; i < m; i++) {
    dep[0][i] = 1;
  }
  // 动态规划
  for (let i = 1; i < m; i++)
    for (let j = 1; j < n; j++) {
      dep[j][i] = dep[j - 1][i] + dep[j][i - 1];
    }

  return dep[n - 1][m - 1];
};
console.log(uniquePaths(3, 2));
console.log(uniquePaths(3, 1));
console.log(uniquePaths(7, 3));
console.log(uniquePaths(51, 9));
