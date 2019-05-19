function minNumberOfJumps(array) {
  // Write your code here.
  let res = new Array(array.length).fill(Infinity);
  res[res.length - 1] = 0;
  for (let i = array.length - 2; i >= 0; i--) {
    let steps = array[i];
    const min = findMin(res, i, steps);
    res[i] = min + 1;
  }
  return res[0];
}

function findMin(dpArray, i, steps) {
  let min = Infinity;
  for (let j = i; j <= Math.min(i + steps, dpArray.length - 1); j++) {
    console.log(dpArray[j])
    min = Math.min(dpArray[j], min);
  }
  return min;
}



function minNumberOfJumps(array) {
  // Write your code here.
  let res = new Array(array.length).fill(Infinity);
  res[0] = 0;
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (i <= array[j] + j) {
        res[i] = Math.min(res[j] + 1, res[i]);
      }
    }
  }
  return res[res.length -1];
}

//always keep track of the maximum and reduce the max by one, everytime it's moved over.
function minNumberOfJumps(array) {
  array[array.length - 1] = 0;
  for (let i = array.length - 2; i >= 0; i--) {
    let numSteps = array[i];
    let min = Infinity;
    for (let j = i + 1; j <= Math.min(i + numSteps, array.length -1); j++) {
      min = Math.min(min, array[j]);
    }
    array[i] = min + 1;
  } 
  return array[0];
}

//1st appraoch  (n x m x o) complexity ==> you can map out all possible outcome and recursively find the minimum number of steps
//2nd approach  use dynamic programing to see how many steps were taken so far (constant space + n^2 time complexity)
//3rd approach instead of storing all values, think about distance covering and use max distance to jump to farthest distance covered. reduce the number of steps as you take each step forward


function minNumberOfJumps(array) {
  // Write your code here.
  // Write your code here.
	if (array.length === 1) return 0;
  let jumps = 0;
  let maxReach = array[0];
  let steps = array[0];
  for (let i = 1; i < array.length -1; i++) {
		maxReach = Math.max(maxReach, i + array[i]);
    steps--;
		if (steps === 0) {
      steps = maxReach - i;
      jumps++;
    }
  }
	return jumps + 1;
}
let input1 = [3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3];
let input2 = [1, 1];
let input3 = [2, 1, 2, 3, 1, 1, 1];
let res = minNumberOfJumps(input3);
console.log(res);