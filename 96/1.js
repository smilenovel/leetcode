/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  if (n == 0) {
    return 0;
  }
  return countTree(1, n);
};
var countTree = function(start, n) {
  let count = 0;
  if (start < 1 || start >= n) {
    return 1;
  }
  for (let i = start; i <= n; i++) {
    let leftCount = 1;
    let rightCount = 1;
    if (i > start) {
      leftCount = countTree(start, i - 1);
    }
    if (i < n) {
      rightCount = countTree(i + 1, n);
    }
    count += leftCount * rightCount;
  }
  return count;
};
console.log(numTrees(3));
