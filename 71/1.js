/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  const list = path.split('/');
  const stack = [];
  for (var i = 0; i < list.length; i++) {
    const frag = list[i];
    if (frag == '' || frag == '.') {
      continue;
    }
    if (frag == '..') {
      if (stack.length > 0) stack.pop();
    } else {
      stack.push(frag);
    }
  }
  return '/' + stack.join('/');
};
console.log(simplifyPath('/home/'));
console.log(simplifyPath('/../'));
console.log(simplifyPath('/home//foo/'));
console.log(simplifyPath('/a/./b/../../c/'));
console.log(simplifyPath('/a/../../b/../c//.//'));
console.log(simplifyPath('/a//b////c/d//././/..'));
