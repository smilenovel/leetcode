/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  let m = matrix[0].length;
  let n = matrix.length;
  let rows = {};
  let cols = {};

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] == 0) {
        rows[i] = true;
        cols[j] = true;
      }
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (rows[i] || cols[j]) {
        matrix[i][j] = 0;
      }
    }
  }
};
let matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1]
];
setZeroes(matrix);
console.log(JSON.stringify(matrix));
matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5]
];

setZeroes(matrix);
console.log(JSON.stringify(matrix));
