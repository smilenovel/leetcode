/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (preorder.length == 0) {
    return null;
  }
  return buildNode(preorder, inorder, 0, inorder.length - 1);
};
var find = function(arr, val, start, end) {
  for (let i = start; i <= end; i++) {
    let num = arr[i];
    if (num == val) {
      return i;
    }
  }
  return -1;
};
var buildNode = function(preorder, inorder, istart, iend) {
  // console.log(pstart, pend, istart, iend);
  let rootVal = preorder.shift();
  if (istart == iend) {
    return {
      val: rootVal,
      left: null,
      right: null
    };
  }

  let node = {
    val: rootVal,
    left: null,
    right: null
  };
  //root position in inorder
  let rootPosIn = find(inorder, rootVal, istart, iend);
  if (rootPosIn > istart) {
    //left end position in preorder
    node.left = buildNode(preorder, inorder, istart, rootPosIn - 1);
  }
  if (rootPosIn < iend) {
    node.right = buildNode(preorder, inorder, rootPosIn + 1, iend);
  }
  return node;
};
console.log(JSON.stringify(buildTree([], [])));
console.log(JSON.stringify(buildTree([1, 2, 3], [3, 2, 1])));
console.log(JSON.stringify(buildTree([4, 1, 3, 2], [1, 2, 3, 4])));

console.log(
  JSON.stringify(buildTree([3, 9, 2, 4, 20, 15, 7], [2, 9, 4, 3, 15, 20, 7]))
);
