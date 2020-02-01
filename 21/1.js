/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
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
var mergeTwoLists = function(l1, l2) {
  let ret = new ListNode();
  let pointer1 = l1;
  let pointer2 = l2;
  let pointerRet = ret;
  while (pointer1 || pointer2) {
    const val1 = pointer1 ? pointer1.val : Number.MAX_SAFE_INTEGER;
    const val2 = pointer2 ? pointer2.val : Number.MAX_SAFE_INTEGER;
    if (val1 < val2) {
      pointerRet.next = pointer1;
      pointer1 = pointer1.next;
    } else {
      pointerRet.next = pointer2;
      pointer2 = pointer2.next;
    }
    pointerRet = pointerRet.next;
  }
  return ret.next;
};
const l1 = makeList([3, 4, 8]);
const l2 = makeList([1, 2, 5]);
console.log(JSON.stringify(mergeTwoLists(null, null)));
console.log(JSON.stringify(mergeTwoLists(l1, l2)));
