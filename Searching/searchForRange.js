function searchForRange(array, target) {
  // Write your code here.
  let start = 0;
  let end = array.length - 1;
  let startInd, endInd;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if ((mid === 0 && array[mid] === target) || (array[mid] === target && array[mid - 1] !== target)) {
      startInd = mid;
      break;
    } else if (array[mid] !== target && array[mid + 1] === target) {
      startInd = mid + 1;
      break;
    } else if (array[mid] === target) {
      end = mid - 1;
    } else if (array[mid] < target) {
      start = mid + 1;
    } else if (array[mid] > target) {
      end = mid - 1;
    }
  }
  if (startInd === undefined) {
    return [-1, -1];
  }
  start = startInd;
  end = array.length - 1;
  if (start === end) return [start, end];
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if ((mid === array.length - 1 && array[mid] === array.length - 1) || (array[mid] === target && array[mid + 1] !== target)) {
      endInd = mid;
      break;
    } else if (array[mid] !== target && array[mid - 1] === target) {
      endInd = mid - 1;
      break;
    } else if (array[mid] === target) {
      start = mid + 1;
    } else if (array[mid] < target) {
      start = mid + 1;
    } else if (array[mid] > target) {
      end = mid - 1;
    }
  }
  return [startInd, endInd]
}

let input = [0, 1, 21, 33, 45, 45, 45, 45, 45, 45, 61, 71, 73];
let res = searchForRange(input, 0);
console.log(res)

