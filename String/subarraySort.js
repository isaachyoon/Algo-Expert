function subarraySort(array) {
  // Write your code here.
  let p1 = 0;
  let p2 = array.length - 1;

  while (array[p1] <= array[p1 + 1]) {
    p1++;
  }
  while (array[p2 - 1] <= array[p2]) {
    p2--;
  }
  let leftTerm = p1;
  let rightTerm = p2;
  if (p1 === array.length -1) {
    return [-1, -1];
  }

  let min = array[leftTerm];
  let max = array[rightTerm];

  for (let i = leftTerm; i <= rightTerm; i++) {
    min = Math.min(min, array[i]);
    max = Math.max(max, array[i]);
  }

  if (min !== array[leftTerm]) {
    while (array[leftTerm] > min) {
      leftTerm--;
    }
  }

  if (max !== array[rightTerm]) {
    while (max >= array[rightTerm]) {
      rightTerm++;
    }
  }
  return [leftTerm + 1, rightTerm -1];
}

//solution:

/*
  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    if (isOutOfOrder(i, num, array)) {
      minOutOfOrder = Math.min(minOutOfOrder, num);
      maxOutOfOrder = Math.max(maxOutOfOrder, num); //this helps to find the min/max value of out of order;
    }
  }

  then you simply iterate and find where they fit.
*/

const input = [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19];
const input2 = [1, 2, 4, 6 ];
//                      ^
//                                           ^

// [1, 2, 4, 7, 10, 11, 7, 12]
let res = subarraySort(input2);
console.log(res);

<html>
  <head>
    <title>
      My Title
    </title>
  </head>
  <body>
    <a href="">My link</a>
    <h1>My header</h1>
    <p>this is the paragraph</p>
  </body>
</html>