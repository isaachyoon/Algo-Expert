function iterativeInOrderTraversal(tree, callback) {
  // Write your code here.
  let tempStack = [];
  let resStack = [];
  tempStack.push(tree);
  while(tempStack.length > 0) {
    goLeftAndPush(tempStack);
    evaluate(tempStack, resStack);
  }
  // resStack.forEach((x) => {
    // callback(x);
  // })
  console.log(resStack)
}

function goLeftAndPush(stack) {
  let node = stack[stack.length - 1];
  while(node.left) {
    stack.push(node.left);
    node = node.left;
  }

}

function evaluate(tempStack, resStack) {
  resStack.push(tempStack.pop());
  let resStackNode = resStack[resStack.length - 1];
  if (!resStackNode.left && !resStackNode.right) {
    const parentNode = tempStack.pop();
    if (parentNode) {
      resStack.push(parentNode);
    }
    if (parentNode.right) {
      tempStack.push(parentNode.right);
    }
  } else {
    tempStack.push(resStackNode.right);
  }
}


function tree(val) {
  this.val = val;
  this.left = this.right = null;
}

let n1 = new tree(1);
let n2 = new tree(2);
let n4 = new tree(4);
// let n5 = new tree(5);
// let n9 = new tree(9);
// let n8 = new tree(8);
// let n7 = new tree(7);
let n3 = new tree(3);

n1.left = n2;
n1.right = n3;
n2.left = n4;
// n2.right = n5;
// n4.right = n9;
// n9.left = n8;
// n9.right = n7;
// n1.right = n;

iterativeInOrderTraversal(n1);
