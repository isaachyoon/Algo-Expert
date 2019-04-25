//medium
//if we are not able to modify the array, then we have to create a new array
//o(n) time o(n) space
function maxSubsetSumNoAdjacent(array) {
  // Write your code here.
  if (!array.length) return 0;
	if (array.length <= 2) {
		return Math.max(...array);
	}
  for (let i = 2;i < array.length; i++) {
    let prevPrev = array[i - 3] || 0;
    array[i] = Math.max(array[i] + array[i-2], array[i] + prevPrev);
  }
  console.log(array)
  return Math.max(array[array.length - 1], array[array.length - 2]);
}

//o(n) time o(1) space
function maxSubsetSumNoAdjacent(array) {
  // Write your code here.
  if (!array.length) return 0;
	if (array.length <= 2) {
		return Math.max(...array);
  }
  let prev = Math.max(array[0], array[1]);
  let prevPrev = array[0];

  for (let i = 2;i < array.length; i++) {
    const current = Math.max(array[i] + prevPrev, prev);
    prevPrev = prev;
    prev = current;
  }
  return Math.max(prev, prevPrev);
}

let res = maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135])
console.log(res)