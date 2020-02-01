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
// export { makeList, ListNode };
export default ListNode;
