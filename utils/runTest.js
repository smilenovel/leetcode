function runTest(func, args, postProcess) {
  let ret = func.apply(null, args);
  if (postProcess) {
    ret = postProcess(ret);
  }
  console.log(JSON.stringify(ret), null, '  ');
}
exports.runTest = runTest;
