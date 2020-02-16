var ListNode = function ListNode(val) {
  this.val = val;
  this.next = null;
};
var makeList = function(n) {
  let root = new ListNode(1);
  let last = root;
  for (let i = 2; i <= n; i++) {
    let cur = new ListNode(i);
    last.next = cur;
    last = cur;
  }
  return root;
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
// export { makeList, ListNode };
exports.ListNode = ListNode;
exports.makeList = makeList;
exports.makeListFromArray = makeListFromArray;
