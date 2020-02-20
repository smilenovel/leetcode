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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  let stack = [root];
  let ret = [];
  while (stack.length > 0) {
    let node = stack.pop();
    ret.push(node.val);
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }
  return ret;
};
runTest(preorderTraversal, [buildBTree([1, null, 2, 3])]);
