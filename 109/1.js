/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
  if (!head) {
    return null;
  }
  let cur = head;
  let list = [];
  while (cur) {
    list.push({ val: cur.val, left: null, right: null });
    cur = cur.next;
  }
  return buildBST(list, 0, list.length - 1);
};
var buildBST = function(list, start, end) {
  // console.log(start, end);
  if (start == end) {
    return list[start];
  }
  let middle = Math.floor((end - start) / 2);
  let node = list[start + middle];
  if (middle > 0) {
    node.left = buildBST(list, start, start + middle - 1);
  }
  if (start + middle < end) {
    node.right = buildBST(list, start + middle + 1, end);
  }
  return node;
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
  JSON.stringify(sortedListToBST(makeListFromArray([-10, -3, 0, 5, 9])))
);
