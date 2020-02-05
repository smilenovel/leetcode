/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  let ret = [];
  candidates.sort();
  backtrack(candidates, target, ret, [], 0, candidates.length);
  return ret;
};
var backtrack = function(candidates, target, ret, path, begin, size) {
  if (target < 0) return;
  if (target == 0) ret.push([...path]);
  for (let i = begin; i < size; i++) {
    path.push(candidates[i]);
    backtrack(candidates, target - candidates[i], ret, path, i + 1, size);
    path.pop();
    while (i < size && candidates[i] == candidates[i + 1]) {
      i++;
    }
  }
};

console.log(
  'result',
  JSON.stringify(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8))
);
console.log('result', JSON.stringify(combinationSum2([2, 3, 5], 8)));
console.log(JSON.stringify(combinationSum2([2, 5, 2, 1, 2], 5)));
