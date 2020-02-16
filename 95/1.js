/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */

var generate = function(start, end) {
  let allTrees = [];
  if (start > end) {
    allTrees.push(null);
    return allTrees;
  }

  // pick up a root
  for (let i = start; i <= end; i++) {
    // all possible left subtrees if i is choosen to be a root
    let leftTrees = generate(start, i - 1);

    // all possible right subtrees if i is choosen to be a root
    let rightTrees = generate(i + 1, end);

    // connect left and right trees to the root i
    for (let j = 0; j < leftTrees.length; j++) {
      for (let k = 0; k < rightTrees.length; k++) {
        let curNode = { val: i };
        curNode.left = leftTrees[j];
        curNode.right = rightTrees[k];
        allTrees.push(curNode);
      }
    }
  }
  return allTrees;
};
var generateTrees = function(n) {
  if (n == 0) {
    return [];
  }
  return generate(1, n);
};

console.log(JSON.stringify(generateTrees(3)));
