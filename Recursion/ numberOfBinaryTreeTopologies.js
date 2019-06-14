function numberOfBinaryTreeTopologies(n) {
  // Write your code here.
  let memo = {};
  return helper(n-1, memo) + 1;
}

function helper(n, memo, leftInd = 0) {
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= i; j++) {
      memo[]
    }
  }
}

function Node(val) {
  this.val = val;
  this.left = this.right = null
}

let res = numberOfBinaryTreeTopologies(3);

console.log(res);