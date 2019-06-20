// this method doesn't account for negative numbers
function largestRange(array) {
  // Write your code here.
  let hash = {};
  array.forEach((x, i) => {
    hash[x] = true;
  });
  let potentialRes = [array[0], array[0]];
  let res = [array[0], array[0]];
  let findRange = false;
  for (let val in hash) {
    if (!findRange) {
      potentialRes[0] = parseInt(val);
      findRange = true;
    }
    if (hash[val + 1]) {
      continue;
    } else if (hash[parseInt(val)] < 0 && res[0] - 1 === parseInt(val)) {
      console.log('hi')
      res[0] = val;
    } else if (!hash[parseInt(val) + 1]) {
      potentialRes[1] = parseInt(val);
      if (potentialRes[1] - potentialRes[0] > res[1] - res[0]) {
        res[0] = potentialRes[0];
        res[1] = potentialRes[1];
      }
      findRange = false;
    }
  }
  return res;
}

function largestRange(array) {
  // Write your code here.
  let hash = {};
  array.forEach((x, i) => {
    hash[x] = true;
  });

  let res = [array[0], array[0]];
  let maxDiff = 0;
  let leftInd = 0;
  for (let i = 0; i < array.length; i++) {
    let leftInd = array[i];
    let rightInd = array[i];
    if (!hash[leftInd]) {
      continue;
    }
    while (hash[leftInd - 1]) {
      hash[leftInd - 1] = false;
      leftInd--;
    }

    while (hash[rightInd + 1]) {
      hash[rightInd + 1] = false;
      rightInd++;
    }
    let diff = rightInd  - leftInd;
    if (diff > maxDiff) {
      maxDiff = diff;
      res[0] = leftInd;
      res[1] = rightInd;
    }
  }
  return res;
}

const input1 = [1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6];
const input2 = [4, 2, 1, 3, 6];
const input3 = [0, 9, 19, -1, 18, 17, 2, 10, 3, 12, 5, 16, 4, 11, 8, 7, 6, 15, 12, 12, 2, 1, 6, 13, 14];
let res = largestRange(input3);
console.log(res)
