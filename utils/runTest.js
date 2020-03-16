function runTest(func, args, postProcess, printFunc) {
  let ret = func.apply(null, args);
  if (postProcess) {
    ret = postProcess(ret);
  }
  if (printFunc) {
    printFunc(ret);
  } else {
    console.log(JSON.stringify(ret), null, '  ');
  }
}
var printMatrix = function(matrix) {
  let str = '[\n';
  for (let i = 0; i < matrix.length; i++) {
    str = str + '  ' + matrix[i].join('\t') + '\n';
  }
  str += ']';
  console.log(str);
};
exports.runTest = runTest;
exports.printMatrix = printMatrix;
