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
  let leftMost = root;
  while (leftMost.left) {
    let head = leftMost;
    while (head) {
      head.left.next = head.right;
      if (head.next != null) {
        head.right.next = head.next.left;
      }
      head = head.next;
    }
    leftMost = leftMost.left;
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
