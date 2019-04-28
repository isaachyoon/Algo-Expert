//medium
function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
  arrayOne = arrayOne.sort((x,y) => x - y);
  arrayTwo = arrayTwo.sort((x,y) => x - y);

  let p1 = 0;
  let p2 = 0;
  let val1, val2;
  let smallestDifference = Infinity;
  while (p1 < arrayOne.length && p2 < arrayTwo.length) {
    let diff = Math.abs(arrayOne[p1] - arrayTwo[p2]);
    if (diff < smallestDifference) {
      smallestDifference  = diff;
      val1 = arrayOne[p1];
      val2 = arrayTwo[p2];
    }
    if (arrayOne[p1] < arrayTwo[p2]) {
      p1++;
    } else if (arrayOne[p1] > arrayTwo[p2]) {
      p2++;
    } else {
      return [arrayOne[p1], arrayTwo[p2]]
    }
  }
  return [val1, val2];
}

let a1 = [-1, 5, 10, 20, 28, 3];
let l2 = [26, 134, 135, 15, 17];
let res = smallestDifference(a1, l2);
console.log(res);

// let a1 = [-1, 3, 5, 10, 20, 28]  [15, 17, 26, 134, 135]
//                      ^                     ^
//13 3
