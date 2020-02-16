/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  let i = 1;
  let root = { next: head };
  let preMNode = root;
  let reverseHead, reverseEnd;
  let cur = head;
  while (cur) {
    let next = cur.next;
    if (i == m - 1) {
      preMNode = cur;
      cur = next;
      i++;
      continue;
    }
    if (i == m) {
      reverseHead = cur;
      reverseEnd = cur;
      cur.next = null;
    }
    if (i == n) {
      cur.next = reverseHead;
      reverseHead = cur;
      reverseEnd.next = next;
      if (m == 1) {
        root.next = reverseHead;
      } else {
        preMNode.next = reverseHead;
      }
    }
    if (i > m && i < n) {
      cur.next = reverseHead;
      reverseHead = cur;
    }
    cur = next;
    i++;
  }
  return root.next;
};
var ListNode = function ListNode(val) {
  this.val = val;
  this.next = null;
};
var makeListFromArray = function(nums) {
  let root = new ListNode(nums[0]);
  let last = root;
  for (let i = 1; i < nums.length; i++) {
    let cur = new ListNode(nums[i]);
    last.next = cur;
    last = cur;
  }
  return root;
};
console.log(
  JSON.stringify(reverseBetween(makeListFromArray([1, 2, 3, 4, 5]), 2, 4))
);

console.log(JSON.stringify(reverseBetween(makeListFromArray([3, 5]), 1, 2)));
