const { runTest } = require("../utils/runTest");
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  if (board.length == 0) {
    return;
  }
  let width = board[0].length;
  let height = board.length;
  for (let i = 0; i < height; i++) {
    if (i == 0 || i == height - 1) {
      for (var j = 0; j < width; j++) {
        if (board[i][j] == "O") {
          fillAdjacents(board, i, j);
        }
      }
    } else {
      if (board[i][0] == "O") {
        fillAdjacents(board, i, 0);
      }
      if (board[i][width - 1] == "O") {
        fillAdjacents(board, i, width - 1);
      }
    }
  }
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (board[i][j] == "O") {
        board[i][j] = "X";
      } else if (board[i][j] == "M") {
        board[i][j] = "O";
      }
    }
  }
};
var fillAdjacents = function(board, i, j) {
  board[i][j] = "M";
  if (i > 0 && board[i - 1][j] == "O") {
    fillAdjacents(board, i - 1, j);
  }
  if (i < board.length - 1 && board[i + 1][j] == "O") {
    fillAdjacents(board, i + 1, j);
  }
  if (j > 0 && board[i][j - 1] == "O") {
    fillAdjacents(board, i, j - 1);
  }
  if (j < board[0].length - 1 && board[i][j + 1] == "O") {
    fillAdjacents(board, i, j + 1);
  }
};
runTest(solve, [
  [
    ["X", "X", "X", "X"],
    ["X", "O", "X", "X"],
    ["X", "X", "O", "X"],
    ["X", "O", "O", "X"]
  ]
]);
