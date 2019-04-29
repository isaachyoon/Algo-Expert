function fourNumberSum(array, targetSum) {
  let res = [];
  fourNumberSumHelper(array, targetSum, [], 0, res);
  return res;
}

function fourNumberSumHelper(array, targetSum, subArr, ind, res) {
  if (targetSum === 0 && subArr.length === 4) {
    res.push(Array.from(subArr));
    return;
  }

  if (ind >= array.length) {
     return;
  };

  if (subArr.length > 4) {
    return;
  }

  subArr.push(array[ind])
  fourNumberSumHelper(array, targetSum - array[ind], subArr, ind + 1, res);
  subArr.pop();
  fourNumberSumHelper(array, targetSum, subArr, ind + 1, res);
}

let res = fourNumberSum([7, 6, 4, -1, 1, 2], 16);
console.log(res)//
