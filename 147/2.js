const { runTest } = require('../utils/runTest');
const { makeListFromArray, listToArray } = require('../utils/ListNode');
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
var insertionSortList = function(head) {
  // 边界条件
  if (head === null) return head;
  // 哨兵节点
  let preHead = {};
  // 将要移动重新插入链表中的元素
  let curr = head;
  // 插入链表中的前驱位置 插入pre和pre.next之间
  let pre = preHead;
  // 下一个将要移动插入的元素
  let next = null;
  // 遍历
  while (curr) {
    // 保存下一个将要插入的元素
    next = curr.next;
    // 寻找插入的前驱位置
    while (pre.next && pre.next.val < curr.val) {
      pre = pre.next;
    }
    // 插入
    curr.next = pre.next;
    pre.next = curr;
    // 从头或者从左到右开始遍历
    pre = preHead;
    // 下一个
    curr = next;
  }
  return preHead.next;
};
runTest(insertionSortList, [makeListFromArray([3, 4, 1])]);

runTest(insertionSortList, [makeListFromArray([-1, 5, 3, 4, 0])]);

runTest(insertionSortList, [makeListFromArray([4, 2, 1, 3])]);
