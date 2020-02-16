/**
 * @param {number} n
 * @return {number[]}
 */
let nums = [0, 1, 3, 2];
var grayCode = function(n) {
  let ret = [];
  let num = 0;
  let levelsPos = [];
  for (let i = 0; i < Math.floor(n / 2); i++) {
    levelsPos[i] = 0;
  }
  backtrack(ret, levelsPos, 0, n, num);
  return ret;
};
var backtrack = function(ret, levelsPos, level, n, num) {
  if (n == 0) {
    ret.push(num);
    return;
  }
  if (n % 2 == 0) {
    num = num << 2;
    backtrack(
      ret,
      levelsPos,
      level + 1,
      n - 2,
      num + nums[levelsPos[level] % 4]
    );
    backtrack(
      ret,
      levelsPos,
      level + 1,
      n - 2,
      num + nums[(levelsPos[level] + 1) % 4]
    );
    backtrack(
      ret,
      levelsPos,
      level + 1,
      n - 2,
      num + nums[(levelsPos[level] + 2) % 4]
    );
    backtrack(
      ret,
      levelsPos,
      level + 1,
      n - 2,
      num + nums[(levelsPos[level] + 3) % 4]
    );
    levelsPos[level] = levelsPos[level] + 3;
  } else {
    num = num << 1;
    backtrack(ret, levelsPos, level, n - 1, num);
    backtrack(ret, levelsPos, level, n - 1, num + 1);
  }
};

console.log(JSON.stringify(grayCode(3)));
console.log(JSON.stringify(grayCode(0)));
