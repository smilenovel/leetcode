/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  if (!root) {
    return [];
  }
  let ret = [];
  let stack = [root];
  let direction = 0;
  while (stack.length > 0) {
    let newStack = [];
    let data = [];
    if (!direction) {
      for (let i = 0; i < stack.length; i++) {
        let node = stack[i];
        data.push(node.val);
        if (node.left) {
          newStack.push(node.left);
        }
        if (node.right) {
          newStack.push(node.right);
        }
      }
    } else {
      for (let i = stack.length - 1; i >= 0; i--) {
        let node = stack[i];
        data.push(node.val);
        if (node.right) {
          newStack.push(node.right);
        }
        if (node.left) {
          newStack.push(node.left);
        }
      }
      newStack.reverse();
    }
    ret.push(data);
    stack = newStack;
    direction = !direction;
  }
  return ret;
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
  JSON.stringify(zigzagLevelOrder(buildBTree([3, 9, 20, null, null, 15, 7])))
);
