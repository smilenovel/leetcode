/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  let m = grid[0].length;
  let n = grid.length;
  let dep = [[grid[0][0]]];
  for (let i = 1; i < n; i++) {
    dep[i] = [dep[i - 1][0] + grid[i][0]];
  }
  for (let j = 1; j < m; j++) {
    dep[0][j] = dep[0][j - 1] + grid[0][j];
  }
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      dep[i][j] = Math.min(dep[i - 1][j], dep[i][j - 1]) + grid[i][j];
    }
  }
  return dep[n - 1][m - 1];
};
console.log(
  JSON.stringify(
    minPathSum([
      [1, 3, 1],
      [1, 5, 1],
      [4, 2, 1]
    ])
  )
);
