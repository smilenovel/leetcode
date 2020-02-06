/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  const ret = loop([], matrix);
  return ret;
};
var loop = function(ret, matrix) {
  if (matrix.length == 0) {
    return ret;
  }
  if (matrix.length == 1) {
    return ret.concat(matrix[0]);
  }
  let firstRow = matrix.shift();
  let lastRow = matrix.pop();
  let rightLine = [];
  let leftLine = [];
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i].length > 0) rightLine.push(matrix[i].pop());
    if (matrix[i].length > 0) leftLine.push(matrix[i].shift());
  }
  ret = ret.concat(firstRow, rightLine, lastRow.reverse(), leftLine.reverse());
  if (matrix.length > 0 && matrix[0].length > 0) {
    return loop(ret, matrix);
  } else {
    return ret;
  }
};
console.log(
  JSON.stringify(
    spiralOrder([
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12]
    ])
  )
);
console.log(JSON.stringify(spiralOrder([])));
console.log(JSON.stringify(spiralOrder([[7], [9], [6]])));

console.log(
  JSON.stringify(
    spiralOrder([[1], [2], [3], [4], [5], [6], [7], [8], [9], [10]])
  )
);
