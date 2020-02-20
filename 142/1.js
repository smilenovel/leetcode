const { runTest } = require('../utils/runTest');

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  if (!head || !head.next) {
    return null;
  }
  let slowPtr = head;
  let fastPtr = head;
  let intersect;
  while (slowPtr && fastPtr) {
    if (slowPtr == fastPtr) {
      intersect = slowPtr;
    }
    if (fastPtr.next) {
      fastPtr = fastPtr.next.next;
    } else {
      fastPtr = fastPtr.next;
    }
    slowPtr = slowPtr.next;
  }
  if (intersect) {
    let headPtr = head;
    while (headPtr) {
      if (headPtr == intersect) {
        return headPtr;
      }
      headPtr = headPtr.next;
      intersect = intersect.next;
    }
  }
  return null;
};
