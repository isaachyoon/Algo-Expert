//medium
function kadanesAlgorithm(array) {
  // Write your code here.
  let max = -Infinity;
  let totalSum = 0;
  array.forEach((num) => {
    if (totalSum + num > 0) {
      totalSum += num;
      max = Math.max(totalSum, max);
    } else {
      max = Math.max(max, num);
      totalSum = 0;
    }
  })
  return max;
}

function kadanesAlgorithm(array) {
  // Write your code here.
  let max = array[0];
  let totalSum = array[0];
  for (let i = 1; i < array.length; i++) {
    totalSum = Math.max(totalSum + array[i], array[i]);
    max = Math.max(totalSum, max);
  }
  return max;
}

let input = [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4];
// let input2 = [-1, -2]
let res = kadanesAlgorithm(input);
res

