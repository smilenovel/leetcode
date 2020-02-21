/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  return s
    .split(/\s+/)
    .filter(function(s) {
      return s != '';
    })
    .reverse()
    .join(' ');
};
