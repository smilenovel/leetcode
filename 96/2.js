/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  let G = [];
  G[0] = 1;
  G[1] = 1;

  for (let i = 2; i <= n; ++i) {
    G[i] = 0;
    for (let j = 1; j <= i; ++j) {
      G[i] = (G[i] || 0) + G[j - 1] * G[i - j];
    }
  }
  return G[n];
};
console.log(numTrees(3));
