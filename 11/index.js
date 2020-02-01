var maxArea = function(height) {
  let l = 0;
  let r = height.length - 1;
  let max = 0;
  while (r > l) {
    let lValue = height[l];
    let rValue = height[r];
    let area = Math.min(lValue, rValue) * (r - l);
    if (area > max) {
      max = area;
    }
    if (lValue > rValue) {
      r--;
    } else {
      l++;
    }
  }
  return max;
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
