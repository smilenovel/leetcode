/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  if (postorder.length == 0) {
    return null;
  }
  return buildNode(postorder, inorder, 0, inorder.length - 1);
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
var buildNode = function(postorder, inorder, istart, iend) {
  // console.log(pstart, pend, istart, iend);
  let rootVal = postorder.pop();
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
  if (rootPosIn < iend) {
    node.right = buildNode(postorder, inorder, rootPosIn + 1, iend);
  }
  if (rootPosIn > istart) {
    //left end position in postorder
    node.left = buildNode(postorder, inorder, istart, rootPosIn - 1);
  }
  return node;
};
console.log(JSON.stringify(buildTree([], [])));
console.log(JSON.stringify(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3])));
