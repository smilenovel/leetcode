const { runTest } = require("../utils/runTest");
const { buildMap, MapNode } = require("../utils/map");

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
  if (!node) {
    return null;
  }
  const hash = {};

  const newNode = cloneNode(hash, node.val, node.neighbors);
  return newNode;
};
var cloneNode = function(hash, val, neighbors) {
  const node = { val };
  hash[val] = node;
  node.neighbors = neighbors.map(function(n) {
    if (hash[n.val]) {
      return hash[n.val];
    } else {
      return cloneNode(hash, n.val, n.neighbors);
    }
  });
  return node;
};
runTest(
  cloneGraph,
  [
    buildMap([
      [2, 4],
      [1, 3],
      [2, 4],
      [1, 3]
    ])
  ],
  node => {
    console.log(node.val);
  }
);
