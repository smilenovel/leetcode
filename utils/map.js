var MapNode = function(val, neighbors) {
  this.val = val;
  this.neighbors = neighbors;
};
const buildMap = function(list) {
  if (list.length == 0) {
    return null;
  }
  let nodes = [];
  for (let i = 0; i < list.length; i++) {
    nodes.push(new MapNode(i + 1));
  }
  for (let i = 0; i < nodes.length; i++) {
    nodes[i].neighbors = list[i].map(idx => nodes[idx - 1]);
  }
  return nodes[0];
};
exports.buildMap = buildMap;
exports.MapNode = MapNode;
