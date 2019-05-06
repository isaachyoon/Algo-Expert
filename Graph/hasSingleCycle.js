function hasSingleCycle(array) {
  // Write your code here.
	let visited = new Array(array.length).fill(false);
  let ind = 0;
  let searching = true
	while (searching) {
    let jump = array[ind];
    if (Math.abs(jump) > array.length) {
      jump = jump % array.length;
    }
    ind += jump;
    if (ind < 0) {
      ind = array.length - Math.abs(ind);
    } else if (ind >= array.length) {
      ind = ind - array.length;
    }
		if (visited[ind]) {
      searching = false;
			break;
		} else {
      visited[ind] = true;
		}
  }
	return visited.reduce((x,y) => x && y, true);

}

let res = hasSingleCycle([1, 2, 3, 4, -2, 3, 7, 8, -26]);
console.log(res)

// let arr = [1, 2, 3]
// console.log(arr[-1])