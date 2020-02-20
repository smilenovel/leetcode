const { runTest } = require('../utils/runTest');
const { makeListFromArray } = require('../utils/ListNode');
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  let list = [];
  let cur = head;
  if (!head || !head.next) {
    return head;
  }
  while (cur) {
    list.push(cur);
    cur = cur.next;
  }
  let lastNode = { next: null };
  let middle = Math.floor((list.length - 1) / 2);
  for (let i = 0; i <= middle; i++) {
    lastNode.next = list[i];
    list[i].next = list[list.length - 1 - i];
    lastNode = list[list.length - 1 - i];
  }
  lastNode.next = null;
  return list[0];
};
runTest(reorderList, [makeListFromArray([1, 2, 3, 4])]);
runTest(reorderList, [makeListFromArray([1, 2, 3, 4, 5])]);
