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
  let cur = head;
  if (!head || !head.next) {
    return head;
  }
  let last;
  while (cur) {
    let next = cur.next;
    if (next) {
      next.prev = cur;
    } else {
      last = cur;
    }
    cur = cur.next;
  }
  let first = head;
  let lastNode = { next: null };
  while (last != first && last.next != first) {
    lastNode.next = first;
    let next = first.next;
    let prev = last.prev;
    lastNode = last;
    first.next = last;
    last.prev = null;
    first = next;
    last = prev;
  }
  if (last == first) {
    last.prev = null;
  }
  return head;
};
runTest(reorderList, [makeListFromArray([1, 2, 3, 4])]);
runTest(reorderList, [makeListFromArray([1, 2, 3, 4, 5])]);
