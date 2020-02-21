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

var detectCycle = function(head) {
  if (!head || !head.next) {
    return null;
  }
  let slowPtr = head;
  let fastPtr = head;
  let intersect;
  while (slowPtr && fastPtr) {
    if (slowPtr == fastPtr) {
      return true;
    }
    if (fastPtr.next) {
      fastPtr = fastPtr.next.next;
    } else {
      fastPtr = fastPtr.next;
    }
    slowPtr = slowPtr.next;
  }
  return false;
};

var listToArray = function(head) {
  let cur = head;
  let ret = [];
  let maxCount = -1;
  if (detectCycle(head)) {
    console.log('cycle refer');
    maxCount = 10;
  }
  let count = 0;
  while (cur) {
    ret.push(cur.val);
    count++;
    if (maxCount != -1 && count > maxCount) {
      break;
    }
    cur = cur.next;
  }
  return ret;
};
// export { makeList, ListNode };
exports.ListNode = ListNode;
exports.makeList = makeList;
exports.makeListFromArray = makeListFromArray;
exports.listToArray = listToArray;
