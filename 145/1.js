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
var postorderTraversal = function(root) {
  let ret = [];
  if (!root) return ret;
  let stack = [root];
  while (stack.length > 0) {
    let node = stack.pop();
    ret.unshift(node.val);
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
  return ret;
};
runTest(postorderTraversal, [buildBTree([1, null, 2, 3])]);
