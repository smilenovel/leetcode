/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let list = [];
  let size = candidates.length;
  backtrack(list, candidates, 0, size, target, []);
  return list;
};
var backtrack = function(list, candidates, start, size, target, path) {
  if (target < 0) {
    return;
  }
  if (target == 0) {
    list.push([...path]);
  }
  for (let i = start; i < size; i++) {
    path.push(candidates[i]);
    backtrack(list, candidates, i, size, target - candidates[i], path);
    path.pop();
  }
};
console.log('result', JSON.stringify(combinationSum([2, 3, 6, 7], 8)));
console.log('result', JSON.stringify(combinationSum([2, 3, 5], 8)));
console.log(JSON.stringify(combinationSum([2, 3, 5], 7)));
