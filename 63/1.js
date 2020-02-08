/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  let m = obstacleGrid[0].length;
  let n = obstacleGrid.length;
  if (obstacleGrid[0][0]) {
    return 0;
  }
  obstacleGrid[0][0] = 1;

  for (let i = 1; i < n; i++) {
    obstacleGrid[i][0] =
      obstacleGrid[i][0] == 0 && obstacleGrid[i - 1][0] == 1 ? 1 : 0;
  }
  for (let j = 1; j < m; j++) {
    obstacleGrid[0][j] =
      obstacleGrid[0][j] == 0 && obstacleGrid[0][j - 1] == 1 ? 1 : 0;
  }
  // 动态规划
  for (let i = 1; i < n; i++)
    for (let j = 1; j < m; j++) {
      if (obstacleGrid[i][j] == 0) {
        obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1];
      } else {
        obstacleGrid[i][j] = 0;
      }
    }
  return obstacleGrid[n - 1][m - 1];
};
console.log(
  JSON.stringify(
    uniquePathsWithObstacles([
      [0, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 0]
    ])
  )
);
console.log(
  JSON.stringify(
    uniquePathsWithObstacles([
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0]
    ])
  )
);
console.log(JSON.stringify(uniquePathsWithObstacles([[0, 0, 0]])));
console.log(
  JSON.stringify(
    uniquePathsWithObstacles([
      [0, 0],
      [0, 1]
    ])
  )
);
console.log(
  JSON.stringify(
    uniquePathsWithObstacles([
      [0, 0, 0],
      [1, 1, 0],
      [0, 0, 0]
    ])
  )
);
console.log(JSON.stringify(uniquePathsWithObstacles([[1, 0]])));
console.log(JSON.stringify(uniquePathsWithObstacles([[1], [0]])));
