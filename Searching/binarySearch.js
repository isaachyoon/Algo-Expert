function binarySearch(array, target) {
  // Write your code here.
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (array[mid] === target){
      return mid;
    }
    if (array[mid] > target) {
      end = mid - 1;
    } else if (array[mid] < target) {
      start = mid + 1;
    }
  }
  return -1;
}

let res = binarySearch([0, 1, 21, 33, 34, 45, 61, 71, 72, 73], 33);
console.log(res);