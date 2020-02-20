const { runTest } = require('../utils/runTest');
const { ListNode, makeListFromArray } = require('../utils/ListNode');

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  if (head == null) {
    return head;
  }
  let cur = head;
  while (cur) {
    let next = cur.next;
    let newNode = { val: cur.val, random: null };
    cur.next = newNode;
    newNode.next = next;
    cur = next;
  }
  cur = head;
  while (cur) {
    let newNode = cur.next;
    if (cur.random) {
      newNode.random = cur.random.next;
    }
    cur = newNode.next;
  }
  cur = head;
  let retHead = head.next;
  while (cur) {
    let nextNode = cur.next.next;
    if (nextNode) {
      cur.next.next = nextNode.next;
    } else {
      cur.next.next = null;
    }
    cur.next = nextNode;
    cur = nextNode;
  }
  return retHead;
};
var buildList = function(arr) {
  let head = makeListFromArray();
  let cur = head;
  while (cur) {}
};
var buildParam = function(arr) {
  let nodes = [];
  for (var i = 0; i < arr.length; i++) {
    nodes.push(new ListNode(arr[i][0]));
  }
  for (var i = 0; i < nodes.length; i++) {
    nodes[i].next = nodes[i + 1] || null;
    if (arr[i][1] !== null) {
      nodes[i].random = nodes[arr[i][1]];
    } else {
      nodes[i].random = null;
    }
  }
  return [nodes[0]];
};
runTest(
  copyRandomList,
  buildParam([
    [7, null],
    [13, 0],
    [11, 4],
    [10, 2],
    [1, 0]
  ]),
  head => {
    let cur = head;
    let ret = [];
    while (cur) {
      let randomVal = cur.random ? cur.random.val : null;
      ret.push([cur.val, randomVal]);
      cur = cur.next;
    }
    return ret;
  }
);
