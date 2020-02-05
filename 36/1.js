/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  let rowMap = {};
  let colMap = {};
  let squreMap = {};
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let num = board[i][j] == '.' ? 0 : parseInt(board[i][j]);
      let squreI = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      // let squreJ = (i % 3) * 3 + (j % 3);
      if (!rowMap[i]) {
        rowMap[i] = {};
      }
      if (!colMap[j]) {
        colMap[j] = {};
      }
      if (!squreMap[squreI]) {
        squreMap[squreI] = {};
      }
      if (rowMap[i][num]) {
        return false;
      }
      if (colMap[j][num]) {
        return false;
      }
      if (squreMap[squreI][num]) {
        return false;
      }
      if (num > 0) {
        rowMap[i][num] = true;
        colMap[j][num] = true;
        squreMap[squreI][num] = true;
      }
    }
  }
  return true;
};
console.log(
  isValidSudoku([
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '1', '.', '2', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '3', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9']
  ])
);
