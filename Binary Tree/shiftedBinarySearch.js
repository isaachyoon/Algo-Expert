function shiftedBinarySearch(array, target) {
  // Write your code here.
  let rotatedInd = getStartInd(array);
  let start, end;
  if (array[rotatedInd] < target && target < array[array.length - 1]) {
    start = rotatedInd;
    end = array.length -1;
  } else {
    start = 0;
    end = rotatedInd - 1;
  }
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (array[mid] === target) {
      return mid;
    } else if (array[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

function getStartInd(array) {
  let start = 0,
  end = array.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (array[start] <= array[mid]) {
      if (array[mid] >= array[end]) {
        start = mid + 1;
      } else if (array[mid] <= array[end]) {
        end = mid;
      }
    } else if (array[start] >= array[mid]) {
      end = mid
    }
  }
  return (array[start] > array[start - 1]) ? start - 1: start;
}
let input = [61, 71, 72, 73, 0, 1, 21, 33, 45, 45];
let input2 = [111, 1, 5, 23];
const res = shiftedBinarySearch([111, 1, 5, 23] , 5);
console.log(res)