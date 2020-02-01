const input = [3, 9, 20, null, null, 15, 7];
var buildNode = function(index) {
  const val = input[index];
  if (!val) {
    return null;
  }
  if (index == 0) {
    const left = 1;
    const right = 2;
    return {
      val,
      left: buildNode(left),
      right: buildNode(right)
    };
  } else {
    const left = Math.pow(2, index) + 1;
    const right = Math.pow(2, index) + 2;
    return {
      val,
      left: buildNode(left),
      right: buildNode(right)
    };
  }
};
var buildBTree = function() {
  return buildNode(0);
};
export default buildBTree;
