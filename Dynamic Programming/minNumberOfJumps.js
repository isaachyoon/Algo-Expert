function minNumberOfJumps(array) {
  // Write your code here.
  let res = new Array(array.length).fill(Infinity);
  res[res.length - 1] = 0;
  for (let i = array.length - 2; i >= 0; i--) {
    let steps = array[i];
    const min = findMin(res, i, steps);
    res[i] = min + 1;
  }
  return res[0];
}

function findMin(dpArray, i, steps) {
  let min = Infinity;
  for (let j = i; j <= Math.min(i + steps, dpArray.length - 1); j++) {
    console.log(dpArray[j])
    min = Math.min(dpArray[j], min);
  }
  return min;
}



function minNumberOfJumps(array) {
  // Write your code here.
  let res = new Array(array.length).fill(Infinity);
  res[0] = 0;
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (i <= array[j] + j) {
        res[i] = Math.min(res[j] + 1, res[i]);
      }
    }
  }
  return res[res.length -1];
}

let res = minNumberOfJumps([3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3]);
console.log(res);