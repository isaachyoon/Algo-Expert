//easy
function twoNumberSum(array, targetSum) {
  array = array.sort((a, b) => a - b);
  let p1 = 0,
      p2 = array.length - 1;
  while (p1 < p2) {
    let sum = array[p1] + array[p2];
    if (sum === targetSum) {
      return [array[p1], array[p2]];
    } else if (sum < targetSum){
      p1++;
    } else {
      p2--;
    }
  }
  return [];
}


let res = twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10);
console.log(res);

