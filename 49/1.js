/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let ret = [];
  let hash = {};
  for (let i = 0; i < strs.length; i++) {
    let str = strs[i];
    let key = str
      .split('')
      .sort()
      .join();
    if (!hash[key]) {
      hash[key] = [];
    }
    hash[key].push(str);
  }
  return Object.values(hash);
};
console.log(
  JSON.stringify(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))
);
