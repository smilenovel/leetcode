/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var backpack = function(obstacleGrid, m, n) {
  if (obstacleGrid[n][m]) {
    return 0;
  } else if (m == 0 && n == 0) {
    return 1;
  } else {
    let ret = 0;
    if (m > 0) {
      ret += backpack(obstacleGrid, m - 1, n);
    }
    if (n > 0) {
      ret += backpack(obstacleGrid, m, n - 1);
    }
    return ret;
  }
};
var uniquePathsWithObstacles = function(obstacleGrid) {
  let m = obstacleGrid[0].length;
  let n = obstacleGrid.length;
  return backpack(obstacleGrid, m - 1, n - 1);
};
console.log(
  JSON.stringify(
    uniquePathsWithObstacles([
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0]
    ])
  )
);
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
