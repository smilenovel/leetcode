const a = {
  a: 1,
  b: 2
};
console.log(
  Object.keys({
    ...a,
    b: undefined
  })
);
