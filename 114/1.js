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
const { buildBTree } = require('../utils/BTree');
const { runTest } = require('../utils/runTest');
var flatten = function(root) {
  if (!root) {
    return null;
  }
};

runTest(flatten, [3, 3, 3]);
