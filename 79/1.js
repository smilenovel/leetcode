/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  if (board.length == 0) {
    return false;
  }
  let h = board.length;
  let w = board[0].length;
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (board[i][j] == word[0]) {
        if (backtrack(board, h, w, word, i, j, 0, word.length)) {
          return true;
        }
      }
    }
  }
  return false;
};

var backtrack = function(board, h, w, word, i, j, start, size) {
  if (
    i < 0 ||
    j < 0 ||
    i >= h ||
    j >= w ||
    board[i][j] != word[start] ||
    start == size
  ) {
    return false;
  }
  if (board[i][j] == word[start]) {
    if (start == size - 1) {
      return true;
    } else {
      board[i][j] = '#';
      let ret =
        backtrack(board, h, w, word, i - 1, j, start + 1, size) ||
        backtrack(board, h, w, word, i + 1, j, start + 1, size) ||
        backtrack(board, h, w, word, i, j - 1, start + 1, size) ||
        backtrack(board, h, w, word, i, j + 1, start + 1, size);

      board[i][j] = word[start];
      return ret;
    }
  }
};
const board = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['E', 'D', 'E', 'E']
];
console.log(JSON.stringify(exist(board, 'SEE')));
console.log(JSON.stringify(exist(board, 'ABCCED')));
console.log(JSON.stringify(exist(board, 'ABCB')));
