//med
// this approach is convoluted
function searchInSortedMatrix(matrix, target) {
  // Write your code here.
  let res = goVert(matrix, target, matrix.length - 1, 0);
  console.log(res)
  if (!Array.isArray(res)) {
    return [-1, -1];
  }
  return res;

}

function goVert(matrix, target, row, col) {
  for (let r = matrix.length - 1; r >= 0; r--) {
    if (matrix[r][col] === target) {
      return [r, col]
    } else if (matrix[r][col] < target) {
      console.log(matrix[r][col], r, col);
      return goHor(matrix, target, r, col);
    }
  }
  return -1;
}

function goHor(matrix, target, row, col) {
  for (let c = col; c < matrix[row].length; c++) {
    if (matrix[row][c] === target) {
      return [row, c];
    } else if (matrix[row][c] > target) {
      return goVert(matrix, target, row, c);
    }
  }
  return -1;
}



// const res = searchInSortedMatrix(input, 106);

function searchInSortedMatrix(matrix, target) {
  // Write your code here.
  let row = matrix.length - 1;
  let col = 0;

  while (row >= 0 && col < matrix[0].length) {
    let value = matrix[row][col];
    if(value > target) {
      row--;
    } else if (value < target) {
      col++;
    } else if (value === target) {
      return [row, col];
    }
  }
  return [-1, -1];
}

let input = [
  [1, 4, 7, 12, 15, 1000],
  [2, 5, 19, 31, 32, 1001],
  [3, 8, 24, 33, 35, 1002],
  [40, 41, 42, 44, 45, 1003],
  [99, 100, 103, 106, 128, 1004]
]

let p = searchInSortedMatrix(input, 45);
console.log(p)