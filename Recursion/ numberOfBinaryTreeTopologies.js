function numberOfBinaryTreeTopologies(n) {
  // Write your code here.
  let arr = [1, 1, 2];
  let arr2 = [1, 1, 1, 1, 2, 2];
  let res = helper(n-1, arr, arr, arr2);
  return res;
}

function helper(n, arr, arr1, arr2) {
  if (n === 0) {
    return 1;
  }
  let numTree = 0;
  for (let i = 0; i < arr.length; i++) {
    if (n - arr[i] >= 0) {
      if (arr[i] === 2) {
        numTree += helper(n - arr[i], arr2, arr1, arr2)
      } else {
        numTree += helper(n - arr[i], arr1, arr1, arr2);
      }
    }
  }
  return numTree;
}

let res = numberOfBinaryTreeTopologies(5);
console.log(res);