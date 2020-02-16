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
var deleteDuplicates = function(head) {
  if (!head || !head.next) {
    return head;
  }
  let root = { next: null };
  let p0 = root;
  let p1 = head.next;
  let lastNode = head;
  let count = 0;
  while (p1) {
    if (p1.val == lastNode.val) {
      count++;
    } else {
      if (count == 0) {
        p0.next = { val: lastNode.val, next: null };
        p0 = p0.next;
      }
      lastNode = p1;
      count = 0;
    }
    p1 = p1.next;
  }
  if (count == 0 && p0.val != lastNode.val) {
    p0.next = { val: lastNode.val, next: null };
  }
  return root.next;
};
var ListNode = function ListNode(val) {
  this.val = val;
  this.next = null;
};
var makeList = function(nums) {
  let root = new ListNode(nums[0]);
  let last = root;
  for (let i = 1; i < nums.length; i++) {
    let cur = new ListNode(nums[i]);
    last.next = cur;
    last = cur;
  }
  return root;
};
console.log(JSON.stringify(deleteDuplicates(makeList([1, 1, 2, 3, 3, 4, 5]))));
console.log(JSON.stringify(deleteDuplicates(makeList([1, 2, 3, 3, 4, 4, 5]))));
