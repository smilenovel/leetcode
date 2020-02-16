/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  if (!root) {
    return true;
  }
  return validNode(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};
var validNode = function(node, min, max) {
  let { left, right } = node;
  if (left) {
    let val = left.val;
    if (val >= node.val || val <= min || val >= max) {
      return false;
    }
    if (!validNode(left, min, node.val)) {
      return false;
    }
  }
  if (right) {
    let val = right.val;
    if (val <= node.val || val <= min || val >= max) {
      return false;
    }
    if (!validNode(right, node.val, max)) {
      return false;
    }
  }
  return true;
};
let tree = {
  val: 3,
  left: { val: 1, left: { val: 0 }, right: { val: 2 } },
  right: { val: 5, left: { val: 4 }, right: { val: 6 } }
};
console.log(isValidBST(tree));
tree = {
  val: 10,
  left: { val: 5 },
  right: { val: 15, left: { val: 6 }, right: { val: 20 } }
};
console.log(isValidBST(tree));
tree = { val: 1, left: { val: 1 } };
console.log(isValidBST(tree));
tree = { val: 2, left: { val: 1 }, right: { val: 3 } };
console.log(isValidBST(tree));
tree = {
  val: 5,
  left: { val: 1 },
  right: { val: 4, left: { val: 3 }, right: { val: 6 } }
};
console.log(isValidBST(tree));
