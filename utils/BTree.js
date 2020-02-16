var buildNodes = function(input, level, start, count) {
  if (start >= input.length) {
    return [];
  }
  let leafNodeCount = 0;
  let ret = [];

  for (let i = start; i < start + count; i++) {
    if (input[i]) {
      leafNodeCount++;
    }
  }
  const childNodes = buildNodes(
    input,
    level + 1,
    start + count,
    leafNodeCount * 2
  );
  for (let i = start; i < start + count; i++) {
    let val = input[i];
    if (!val) {
      ret.push(null);
    } else {
      let left = childNodes.shift() || null;
      let right = childNodes.shift() || null;
      ret.push({ val, left, right });
      leafNodeCount++;
    }
  }
  return ret;
};
var buildBTree = function(input) {
  return buildNodes(input, 0, 0, 1)[0];
};
exports.buildBTree = buildBTree;
