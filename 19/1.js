function ListNode(val) {
  this.val = val;
  this.next = null;
}
var removeNthFromEnd = function(head, n) {
  let fake = { next: head };
  let lastN = fake;
  let end = head;
  let distance = 0;
  while (end) {
    if (distance > n - 1) {
      lastN = lastN.next;
    } else {
      distance++;
    }
    end = end.next;
  }
  if (lastN != fake && lastN.next) {
    lastN.next = lastN.next ? lastN.next.next : null;
  } else {
    return head.next;
  }
  return head;
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
var list = makeList(5);
console.log(JSON.stringify(removeNthFromEnd(list, 2)));
var list = makeList(5);
console.log(JSON.stringify(removeNthFromEnd(list, 5)));
var list = makeList(1);
console.log(JSON.stringify(removeNthFromEnd(list, 1)));
