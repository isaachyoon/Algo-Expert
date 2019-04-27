function findThreeLargestNumbers(array) {
  // Write your code here.
  let res = new Array(3).fill(-Infinity);
  for (let i = 0; i < array.length; i++) {
    let ind = 2;
    let currVal = array[i];
    while(ind >= 0) {
      if (currVal > res[ind]) {
        let temp = res[ind];
        res[ind] = currVal;
        currVal = temp;
      }
      ind--;
    }
  }
  return res;
}

let res = findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]); // [18, 141, 541]

//[17, 18, 541]