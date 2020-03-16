const { runTest } = require('../utils/runTest');
const { buildBTree } = require('../utils/BTree');
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var swap = function(x, y) {};
var recoverTree = function(root) {
  let stack = [];
  let x = null,
    y = null,
    pred = null;

  while (stack.length > 0 || root != null) {
    while (root != null) {
      stack.push(root);
      root = root.left;
    }
    root = stack.removeLast();
    if (pred != null && root.val < pred.val) {
      y = root;
      if (x == null) x = pred;
      else break;
    }
    pred = root;
    root = root.right;
  }

  swap(x, y);
};

runTest(recoverTree, [buildBTree([1, 3, null, null, 2])]);
runTest(recoverTree, [[3, 1, 4, null, null, 2]]);
