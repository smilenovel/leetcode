const { buildBTree } = require('../utils/BTree');
const { runTest } = require('../utils/runTest');
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if (!root) {
    return root;
  }
  let stack = [root];
  while (stack.length > 0) {
    let newStack = [];
    for (let i = 0; i < stack.length; i++) {
      stack[i].next = stack[i + 1] || null;
      if (stack[i].left) {
        newStack.push(stack[i].left);
        newStack.push(stack[i].right);
      }
    }
    stack = newStack;
  }
  return root;
};
let tree = {
  $id: '1',
  left: {
    $id: '2',
    left: { $id: '3', left: null, next: null, right: null, val: 4 },
    next: null,
    right: { $id: '4', left: null, next: null, right: null, val: 5 },
    val: 2
  },
  next: null,
  right: {
    $id: '5',
    left: { $id: '6', left: null, next: null, right: null, val: 6 },
    next: null,
    right: { $id: '7', left: null, next: null, right: null, val: 7 },
    val: 3
  },
  val: 1
};

runTest(connect, [tree]);
