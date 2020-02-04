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
var ListNode = function ListNode(val) {
  this.val = val;
  this.next = null;
};
var makeList = function(arr) {
  let root = new ListNode(arr[0]);
  let last = root;
  for (let i = 1; i < arr.length; i++) {
    let cur = new ListNode(arr[i]);
    last.next = cur;
    last = cur;
  }
  return root;
};
var swapPairs = function(head) {
  let root = { next: null };
  if (!head || !head.next) {
    return head;
  }
  let lastPair = root;
  let cur = head;
  let first;
  while (cur) {
    if (!first) {
      first = cur;
      cur = cur.next;
    } else {
      const next = cur.next;
      lastPair.next = cur;
      cur.next = first;
      first.next = next;
      cur = next;
      lastPair = first;
      first = null;
    }
  }
  return root.next;
};
let l1 = makeList([1, 2, 3, 4, 5]);
console.log(JSON.stringify(swapPairs(l1)));
l1 = makeList([1]);
console.log(JSON.stringify(swapPairs(l1)));
