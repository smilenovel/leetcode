/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (k == 0 || !head) {
    return head;
  }
  let list = [];
  let end;
  let cur = head;
  let length = 0;
  let ret;

  while (cur) {
    list.push(cur);
    length++;
    cur = cur.next;
  }
  let firstIndex = length - ((k - 1) % length) - 1;
  let firstNode = list[firstIndex];
  if (firstIndex > 0) {
    list[list.length - 1].next = list[0];
    list[firstIndex - 1].next = null;
  }
  return firstNode;
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
console.log(JSON.stringify(rotateRight(makeList([1, 2, 3, 4, 5]), 2)));
console.log(JSON.stringify(rotateRight(makeList([1]), 1)));
console.log(JSON.stringify(rotateRight(makeList([1, 2]), 2)));
