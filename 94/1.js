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
  if (!root) {
    return [];
  }
  let ret = [];
  travelNode(ret, root);
  return ret;
};
var travelNode = function(ret, node) {
  if (node.left) {
    travelNode(ret, node.left);
  }
  ret.push(node.val);
  if (node.right) {
    travelNode(ret, node.right);
  }
};
var buildNode = function(input, index) {
  const val = input[index];
  if (!val) {
    return null;
  }
  if (index == 0) {
    const left = 1;
    const right = 2;
    return {
      val,
      left: buildNode(input, left),
      right: buildNode(input, right)
    };
  } else {
    const left = Math.pow(2, index) + 1;
    const right = Math.pow(2, index) + 2;
    return {
      val,
      left: buildNode(input, left),
      right: buildNode(input, right)
    };
  }
};
var buildBTree = function(input) {
  return buildNode(input, 0);
};
console.log(
  JSON.stringify(inorderTraversal(buildBTree([1, null, 2, null, null, 3])))
);
