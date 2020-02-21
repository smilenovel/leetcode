const { runTest } = require('../utils/runTest');
const { makeListFromArray, listToArray } = require('../utils/ListNode');
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
var insertionSortList = function(head) {
  if (!head) {
    return head;
  }
  let _head = { next: head };
  let cur = head;
  let sortedEnd = head;

  while (cur) {
    let next = cur.next;
    let searchPtr = _head.next;
    let lastNode = _head;
    while (searchPtr != cur) {
      if (searchPtr.val > cur.val) {
        lastNode.next = cur;
        cur.next = searchPtr;
        sortedEnd.next = next;
        break;
      }
      lastNode = searchPtr;
      searchPtr = searchPtr.next;
    }
    if (searchPtr == cur) {
      sortedEnd = cur;
    }
    // console.log('end', sortedEnd.val);
    // console.log(JSON.stringify(listToArray(head)));
    cur = next;
  }
  // console.log('set null');

  return _head.next;
};
runTest(insertionSortList, [makeListFromArray([3, 4, 1])]);

runTest(insertionSortList, [makeListFromArray([-1, 5, 3, 4, 0])]);

runTest(insertionSortList, [makeListFromArray([4, 2, 1, 3])]);
