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
var inorderTraversal = function(root) {
  let res = [];
  let stack = [];
  let curr = root;
  while (curr != null || !stack.length == 0) {
    while (curr != null) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    res.push(curr.val);
    curr = curr.right;
  }
  return res;
};
var buildBTree = function(input) {
  return buildNode(input, 0);
};
console.log(
  JSON.stringify(inorderTraversal(buildBTree([1, null, 2, null, null, 3])))
);
