function validateBst(tree) {
  return validateBstHelper(tree, -Infinity, Infinity)
}

function validateBstHelper(tree, min, max) {
  if (!tree) return true;
  let left, right;

  if (min <= tree.value && tree.value < max) {
    left = validateBstHelper(tree.left, min, tree.value);
    right = validateBstHelper(tree.right, tree.value, max);
  } else {
    return false;
  }
  return left && right;
}