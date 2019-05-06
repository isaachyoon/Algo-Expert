function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
  // Write your code here.
  let countOne = getYoungestCommonAncestorHelper(descendantOne);
  let countTwo = getYoungestCommonAncestorHelper(descendantTwo);
  let diff = 0;
  if (countOne > countTwo) {
    diff = countOne - countTwo;
    descendantOne = equalizeLevel(descendantOne, diff);
  } else {
    diff = countTwo - countOne;
    descendantTwo = equalizeLevel(descendantTwo, diff);
  }

  while ((descendantOne && descendantTwo) && descendantOne.name !== descendantTwo.name) {
    descendantOne = descendantOne.ancestor;
    descendantTwo = descendantTwo.ancestor;
  }
  return descendantOne;
}

function equalizeLevel(node, diff) {
  while (diff > 0) {
    node = node.ancestor;
    diff--;
  }
	return node;
}

function getYoungestCommonAncestorHelper(node) {
  let count = 0;

  while (node) {
    node = node.ancestor;
    count++;
  }
  return count;
}



// Do not edit the line below.
exports.getYoungestCommonAncestor = getYoungestCommonAncestor;
