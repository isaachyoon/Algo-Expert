function riverSizes(matrix) {
  // Write your code here.
  let res = [];
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      if (matrix[r][c] === 1) {
        let val = riverSizeTraverse(matrix, r, c);
        res.push(val);
      }
    }
  }
  return res;
}

function riverSizeTraverse(matrix, r, c)00 {
  if (r < 0 || r >= matrix.length || c < 0 || c >= matrix[0].length) {
    return 0;
  }
  let count = 1;
  matrix[r][c] = 0;
  if (matrix[r - 1] && matrix[r - 1][c] === 1) { //up
    count += riverSizeTraverse(matrix, r - 1, c);
  }

  if (matrix[r + 1] && matrix[r + 1][c] === 1) { // down
    count += riverSizeTraverse(matrix, r + 1, c);
  }

  if (matrix[r][c - 1] === 1) { //left
    count += riverSizeTraverse(matrix, r, c - 1);
  }

  if (matrix[r][c + 1] === 1) {
    count += riverSizeTraverse(matrix, r, c + 1);
  }
  return count;
}

let river = [
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0]
]

let res = riverSizes(river);
console.log(res);

