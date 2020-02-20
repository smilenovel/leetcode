/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.cache = {};
  this.index = [];
  this.capacity = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  let data = this.cache[key] != null ? this.cache[key] : -1;
  this.index = this.index.filter(idx => idx != key);
  this.index.push(key);
  // console.log(JSON.stringify(this.index));
  return data;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (!this.cache[key]) {
    this.index.push(key);
  }
  if (!this.cache[key] && this.index.length > this.capacity) {
    let lruKey = this.index.shift();
    this.cache[lruKey] = null;
  }
  this.cache[key] = value;
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
