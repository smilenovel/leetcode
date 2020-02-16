/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  let leftHead = { next: null };
  let rightHead = { next: null };
  let leftEnd = leftHead;
  let rightEnd = rightHead;
  let cur = head;
  while (cur) {
    if (cur.val < x) {
      leftEnd.next = cur;
      leftEnd = cur;
    } else {
      rightEnd.next = cur;
      rightEnd = cur;
    }
    cur = cur.next;
  }
  leftEnd.next = rightHead.next;
  rightEnd.next = null;
  return leftHead.next;
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
  JSON.stringify(partition(makeListFromArray([1, 4, 3, 2, 5, 2]), 3))
);
