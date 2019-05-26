//time complexity: O(n) where n is the number of people in the org
//space compleity: O(d) where d is the depth/height of the org chart

function getLowestCommonManager(topManager, reportOne, reportTwo) {
  // Write your code here.
  let res = getLowestHelper(topManager, reportOne, reportTwo);
  return res;
}

function getLowestHelper(topManager, reportOne, reportTwo) {
  let count = 0;
  if (topManager.name === reportOne.name || topManager.name === reportTwo.name) {
    count += 1;
  }
  for (let i = 0; i < topManager.directReports.length; i++) {
    let curr = topManager.directReports[i];
    let found = getLowestHelper(curr, reportOne, reportTwo);
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