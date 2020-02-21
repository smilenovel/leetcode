/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.cache = {};
  this.size = 0;
  this.head = new DLinkedNode();
  this.tail = new DLinkedNode();
  this.head.next = this.tail;

  this.capacity = capacity;
};

var DLinkedNode = function() {};
LRUCache.prototype.addNode = function(node) {
  /**
   * Always add the new node right after head.
   */
  let { head } = this;
  node.prev = head;
  node.next = head.next;

  head.next.prev = node;
  head.next = node;
};

LRUCache.prototype.removeNode = function(node) {
  /**
   * Remove an existing node from the linked list.
   */
  prev = node.prev;
  next = node.next;

  prev.next = next;
  next.prev = prev;
};

LRUCache.prototype.moveToHead = function(node) {
  /**
   * Move certain node in between to the head.
   */
  this.removeNode(node);
  this.addNode(node);
};
LRUCache.prototype.popTail = function() {
  /**
   * Pop the current tail.
   */
  res = this.tail.prev;
  this.removeNode(res);
  return res;
};
/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (this.cache[key]) {
    this.moveToHead(this.cache[key]);
    return this.cache[key].val;
  } else {
    return -1;
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.cache[key]) {
    this.moveToHead(this.cache[key]);
    this.cache[key].val = value;
  } else {
    let node = new DLinkedNode();
    node.val = value;
    node.key = key;
    this.addNode(node);
    this.cache[key] = node;
    this.size++;
    if (this.size > this.capacity) {
      // pop the tail
      let tail = this.popTail();
      this.cache[tail.key] = null;
      this.size--;
    }
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
let cache = new LRUCache(2 /* 缓存容量 */);
console.log(cache.put(1, 1));
console.log(cache.put(2, 2));
console.log(cache.get(1)); // 返回  1
console.log(cache.put(3, 3)); // 该操作会使得密钥 2 作废
console.log(cache.get(2)); // 返回 -1 (未找到)
console.log(cache.put(4, 4)); // 该操作会使得密钥 1 作废
console.log(cache.get(1)); // 返回 -1 (未找到)
console.log(cache.get(3)); // 返回  3
console.log(cache.get(4)); // 返回  4
