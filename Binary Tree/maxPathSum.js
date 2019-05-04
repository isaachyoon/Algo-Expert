function maxPathSum(tree) {
  // Write your code here.
  let res = maxPathHelper(tree);
  return Math.max(res[0], res[1]);
}

function maxPathHelper(tree) {
  if (!tree) {
    return [0, 0];
  }

  let left = maxPathHelper(tree.left);
  let right = maxPathHelper(tree.right);


  let pathVal = Math.max(tree.value + left[1], tree.value + right[1], tree.value);
  let stopVal = Math.max(left[0], right[0], left[1] + right[1] + tree.value);

  return [stopVal, pathVal];
}


function node(value) {
  this.value = value;
  this.left = this.right = null;
}

let n1 = new node(1);
let n2 = new node(2);
let n3 = new node(3);
let n4 = new node(4);
let n5 = new node(5);
let n6 = new node(6);
let n7 = new node(7);
let n8 = new node(8);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n3.left = n6;
n3.right = n7;

let res = maxPathSum(n1);
console.log(res)
