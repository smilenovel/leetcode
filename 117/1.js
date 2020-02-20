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
  let leftMost = findNextNode(root);
  while (leftMost && (leftMost.left || leftMost.right)) {
    let head = leftMost;
    while (head) {
      if (head.left && head.right) head.left.next = head.right;
      let nextNode = findNextNode(head.next);
      if (nextNode != null) {
        let endNode = head.right || head.left;
        endNode.next = nextNode.left || nextNode.right;
      }
      head = nextNode;
    }
    leftMost = findNextNode(leftMost.left || leftMost.right);
  }
  return root;
};
var findNextNode = function(node) {
  while (node) {
    if (node.left || node.right) {
      return node;
    }
    node = node.next;
  }
  return null;
};
// let tree = {
//   $id: '1',
//   left: {
//     $id: '2',
//     left: { $id: '3', left: null, next: null, right: null, val: 4 },
//     next: null,
//     right: { $id: '4', left: null, next: null, right: null, val: 5 },
//     val: 2
//   },
//   next: null,
//   right: {
//     $id: '5',
//     left: null,
//     next: null,
//     right: { $id: '7', left: null, next: null, right: null, val: 7 },
//     val: 3
//   },
//   val: 1
// };

// runTest(connect, [tree]);

let tree1 = {
  left: {
    left: null,
    next: null,
    right: null,
    val: 9
  },
  next: null,
  right: {
    left: { left: null, next: null, right: null, val: 15 },
    next: null,
    right: { left: null, next: null, right: null, val: 7 },
    val: 20
  },
  val: 3
};

runTest(connect, [tree1]);
