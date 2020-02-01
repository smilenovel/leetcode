// const citations = [0, 4, 4, 5, 6];
const citations = [11, 15];
var hIndex = function(citations) {
  if (citations.length == 0) {
    return 0;
  }
  let queue = citations;
  let other = 0;
  let count = 0;
  while (true) {
    const middle =
      queue.length % 2 == 0 ? queue.length / 2 : Math.floor(queue.length / 2);
    const distanceToEnd = queue.length - middle + other;
    if (queue[middle] > distanceToEnd) {
      other = other + queue.length - middle;
      queue.splice(middle, queue.length - middle);
    } else if (queue[middle] < distanceToEnd) {
      queue.splice(0, middle - 1 <= 0 ? 1 : middle - 1);
    } else {
      return distanceToEnd;
    }
    if (count++ > 10) {
      break;
    }
    if (queue.length == 0) {
      return other;
    }
  }
};
const h = hIndex(citations);
console.log('end', h);
