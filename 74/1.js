/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  while (matrix.length > 0) {
    let middle = Math.floor(matrix.length / 2);
    let middleRow = matrix[middle];
    if (middleRow[0] > target) {
      matrix = matrix.slice(0, middle);
    } else if (middleRow[middleRow.length - 1] < target) {
      matrix = matrix.slice(middle + 1);
    } else {
      return searchInRow(middleRow, target);
    }
  }
  return false;
};
var searchInRow = function(row, target) {
  while (row.length > 0) {
    let middle = Math.floor(row.length / 2);
    let value = row[middle];
    if (value > target) {
      row = row.slice(0, middle);
    } else if (value < target) {
      row = row.slice(middle + 1);
    } else {
      return true;
    }
  }
  return false;
};

console.log(
  JSON.stringify(
    searchMatrix(
      [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 50]
      ],
      13
    )
  )
);
