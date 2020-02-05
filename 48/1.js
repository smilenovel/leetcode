/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  let n = matrix.length;
  let middle = Math.round(n / 2);
  let middleY = n % 2 == 0 ? middle : middle - 1;
  for (let i = 0; i < middle; i++) {
    for (let j = 0; j < middleY; j++) {
      let temp = matrix[n - 1 - j][i];
      matrix[n - 1 - j][i] = matrix[n - 1 - i][n - j - 1];
      matrix[n - 1 - i][n - j - 1] = matrix[j][n - 1 - i];
      matrix[j][n - 1 - i] = matrix[i][j];
      matrix[i][j] = temp;
    }
  }
  return matrix;
};
console.log(
  JSON.stringify(
    rotate([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ])
  )
);

console.log(
  JSON.stringify(
    rotate([
      [5, 1, 9, 11],
      [2, 4, 8, 10],
      [13, 3, 6, 7],
      [15, 14, 12, 16]
    ])
  )
);
