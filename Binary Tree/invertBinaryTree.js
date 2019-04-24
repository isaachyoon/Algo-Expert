//medium

function invertBinaryTree(tree) {
  // Write your code here.
  invertBinaryTreeHelper(tree)
  return tree;
}

function invertBinaryTreeHelper(tree) {
  if (!tree) {
    return;
  }
  if (tree.left || tree.right) {
    let temp = tree.left;
    tree.left = tree.right;
    tree.right = temp;
  }
  if (tree.left) {
    invertBinaryTree(tree.left);
  }
  if (tree.right) {
    invertBinaryTree(tree.right);
  }
}