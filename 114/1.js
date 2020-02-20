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
  return __flatten(root).root;
};
var __flatten = function(root) {
  let { left, right } = root;
  root.left = null;
  root.right = null;
  if (!left && !right) {
    return { root, end: root };
  }
  let end = root;
  if (left) {
    let leftFlatten = __flatten(left);
    root.right = leftFlatten.root;
    end = leftFlatten.end;
  }
  if (right) {
    let rightFlatten = __flatten(right);
    end.right = rightFlatten.root;
    end = rightFlatten.end;
  }
  end.right = null;
  return { root, end };
};

runTest(flatten, [buildBTree([1, 2, 3, 4, null, 6])]);
