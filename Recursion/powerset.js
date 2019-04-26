function powerset(array, ind = 0, set = [], res = []) {
  // Write your code here.
  if (ind > array.length) {
    return;
  }
  if (ind === array.length) {
    res.push(set.slice());
    return res;
  }
  set.push(array[ind]);
  powerset(array, ind + 1, set, res);
  set.pop();
  powerset(array, ind + 1, set, res);
  return res;
}

let res = powerset([1, 2, 3]);
res