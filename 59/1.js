/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  let l = 0,
    r = n - 1,
    t = 0,
    b = n - 1;
  let mat = [];
  let num = 1,
    tar = n * n;
  for (let i = 0; i < n; i++) {
    mat[i] = [];
  }
  while (num <= tar) {
    for (let i = l; i <= r; i++) mat[t][i] = num++; // left to right.
    t++;
    for (let i = t; i <= b; i++) mat[i][r] = num++; // top to bottom.
    r--;
    for (let i = r; i >= l; i--) mat[b][i] = num++; // right to left.
    b--;
    for (let i = b; i >= t; i--) mat[i][l] = num++; // bottom to top.
    l++;
  }
  return mat;
};
console.log(JSON.stringify(generateMatrix(3)));
