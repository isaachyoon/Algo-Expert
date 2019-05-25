function getLowestCommonManager(topManager, reportOne, reportTwo) {
  // Write your code here.
  let res = getLowestHelper(topManager, reportOne, reportTwo);
  return res;
}

function getLowestHelper(topManager, reportOne, reportTwo) {
  if (topManager.name === reportOne.name || topManager.name === reportTwo.name) {
    return 1;
  }
	let count = 0;
  for (let i = 0; i < topManager.directReports.length; i++) {
    let curr = topManager.directReports[i];
    let found getLowestHelper(curr, reportOne, reportTwo);
		if (typeof found === 'number') {
			count += found;
		} else {
			return found;
		}
    if (count === 2) {
      return topManager;
		}
  }
	return count;
}