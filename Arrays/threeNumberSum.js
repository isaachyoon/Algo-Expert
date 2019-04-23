//Medium
function threeNumberSum(array, targetSum) {
  const res = [];
  array = array.sort((x,y) => x - y);
  for (let i = 0; i < array.length; i++) {
    j = i + 1;
    k = array.length - 1;
    while (j < k) {
      const sum = array[i] + array[j] + array[k];
      if (sum === targetSum) {
        res.push([array[i], array[j], array[k]]);
        j++; k--;
      } else if (sum < targetSum) {
        j++;
      } else {
        k--;
      }
    }
  }
  return res;
}

//[0, 0, 0, 0, 0, 0, 0];
// ^
//       ^
//                   ^

let res = threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0);
console.log(res)
