/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  let length = intervals.length;
  intervals.sort(function(a, b) {
    return a[0] - b[0];
  });
  if (length <= 1) {
    return intervals;
  }
  let lastInterval = intervals[0];
  let ret = [];
  for (let i = 1; i < length; i++) {
    let interval = intervals[i];
    if (
      (interval[0] <= lastInterval[1] && interval[1] >= lastInterval[0]) ||
      (interval[0] >= lastInterval[1] && interval[1] <= lastInterval[0])
    ) {
      lastInterval[1] = Math.max(lastInterval[1], interval[1]);
      lastInterval[0] = Math.min(lastInterval[0], interval[0]);
    } else {
      ret.push(lastInterval);
      lastInterval = interval;
    }
    if (i == length - 1) {
      ret.push(lastInterval);
    }
  }
  return ret;
};
console.log(
  JSON.stringify(
    merge([
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18]
    ])
  )
);

console.log(
  JSON.stringify(
    merge([
      [1, 4],
      [4, 5]
    ])
  )
);

console.log(JSON.stringify(merge([[1, 3]])));
console.log(
  JSON.stringify(
    merge([
      [1, 4],
      [0, 1]
    ])
  )
);
console.log(
  JSON.stringify(
    merge([
      [1, 4],
      [0, 0]
    ])
  )
);
console.log(
  JSON.stringify(
    merge([
      [2, 3],
      [4, 5],
      [6, 7],
      [8, 9],
      [1, 10]
    ])
  )
);
