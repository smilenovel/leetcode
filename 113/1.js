/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
const { buildBTree } = require('../utils/BTree');
var pathSum = function(root, sum) {
  let ret = [];
  if (!root) {
    return ret;
  }
  backtrack(ret, [], root, sum);
  return ret;
};
var backtrack = function(ret, path, node, sum) {
  // console.log(node.val, sum);
  if (sum == node.val && !node.left && !node.right) {
    ret.push([...path, node.val]);
  }
  path.push(node.val);
  if (node.left) {
    backtrack(ret, path, node.left, sum - node.val);
  }
  if (node.right) {
    backtrack(ret, path, node.right, sum - node.val);
  }
  path.pop();
};

console.log(
  JSON.stringify(
    pathSum(buildBTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]), 22)
  )
);
console.log(JSON.stringify(pathSum(buildBTree([5, 4, 8]), 13)));
