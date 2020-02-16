function runTest(func, args) {
  console.log(JSON.stringify(func.apply(null, args)));
}
exports.runTest = runTest;
