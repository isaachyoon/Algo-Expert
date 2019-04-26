function getPermutations(array, ind = 0, res = []) {
  if (!array.length) {
    return array;
  }
  if (ind >= array.length - 1) {
    res.push(array.slice());
    return res;
  }

  for (let i = ind; i < array.length; i++) {
    swap(array, i, ind);
    getPermutations(array, ind + 1, res);
    swap(array, i, ind);
  }
  return res;
}

function swap(arr, x, y) {
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}

let res =  getPermutations([]);