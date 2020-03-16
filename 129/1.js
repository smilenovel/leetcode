const { runTest } = require("../utils/runTest");
const { buildBTree } = require("../utils/BTree");
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
  if (!root) {
    return 0;
  }
  const ret = { sum: 0 };
  console.log(JSON.stringify(root));
  backtrack(root, ret, 0);
  return ret.sum;
};
var backtrack = function(node, ret, sum) {
  sum = sum * 10 + node.val;
  if (!node.left && !node.right) {
    console.log(sum);
    ret.sum = ret.sum + sum;
    return;
  }
  if (node.left) {
    backtrack(node.left, ret, sum);
  }
  if (node.right) {
    backtrack(node.right, ret, sum);
  }
};
runTest(sumNumbers, [buildBTree([1, 2, 3])]);
runTest(sumNumbers, [buildBTree([4, 9, 0, 5, 1])]);
