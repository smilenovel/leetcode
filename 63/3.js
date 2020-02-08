/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  let m = obstacleGrid[0].length;
  let n = obstacleGrid.length;
  let dep = [[]];
  for (let i = 0; i < m; i++) {
    if (i > 0) {
      dep[0][i] = obstacleGrid[0][i] ? 0 : dep[0][i - 1];
    } else {
      dep[0][i] = obstacleGrid[0][i] ? 0 : 1;
    }
  }
  for (let j = 1; j < n; j++) {
    dep[j] = obstacleGrid[j][0] ? [0] : [dep[j - 1][0]];
  }
  // 动态规划
  for (let i = 1; i < m; i++)
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[j][i]) {
        dep[j][i] = 0;
      } else {
        dep[j][i] =
          (obstacleGrid[j - 1][i] ? 0 : dep[j - 1][i]) +
          (obstacleGrid[j][i - 1] ? 0 : dep[j][i - 1]);
      }
    }

  return dep[n - 1][m - 1];
};
// console.log(
//   JSON.stringify(
//     uniquePathsWithObstacles([
//       [0, 0, 0],
//       [0, 1, 0],
//       [0, 0, 0]
//     ])
//   )
// );
// console.log(
//   JSON.stringify(
//     uniquePathsWithObstacles([
//       [0, 0],
//       [0, 1]
//     ])
//   )
// );
console.log(
  JSON.stringify(
    uniquePathsWithObstacles([
      [0, 0],
      [1, 1],
      [0, 0]
    ])
  )
);
console.log(JSON.stringify(uniquePathsWithObstacles([[1, 0]])));
console.log(JSON.stringify(uniquePathsWithObstacles([[1], [0]])));
