//easy

function findClosestValueInBst(tree, target, closest = Infinity) {
  // Write your code here.
  if (!tree) {
    return closest;
  }
  if (Math.abs(target - tree.value) < Math.abs(target - closest)) {
    closest = tree.value;
  }

  if (target > tree.value) {
    return findClosestValueInBst(tree.right, target, closest);
  } else {
    return findClosestValueInBst(tree.left, target, closest)
  }
}

function Node(value) {
  this.value = value;
  this.left = this.right = null;
}

const n1 = new Node(10);
const n2 = new Node(5);
const n3 = new Node(2);
const n4 = new Node(5);
const n5 = new Node(1);
const n6 = new Node(15);
const n7 = new Node(13);
const n8 = new Node(14);
const n9 = new Node(22);


n1.left = n2;
n1.right = n6;
n2.left = n3;
n2.right = n4;
n3.left = n5;
n6.left = n7;
n6.right = n9;
n7.right = n8;

let res = findClosestValueInBst(n1, 12);
console.log(res)