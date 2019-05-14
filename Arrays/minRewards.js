function minRewards(scores) {
  // Write your code here.
  let res = new Array(scores.length).fill(1);
  for (let i = 1; i < scores.length; i++) {
    if (scores[i - 1] < scores[i]) {
      res[i] = res[i - 1] + 1;
    }
  }
  for (let j = scores.length - 2; j >= 0; j--) {
    if (scores[j] >  scores[j + 1]) {
      res[j] = Math.max(res[j], res[j + 1] + 1);
    }
  }
  return res.reduce((x,y) => x + y);
}

let input = [8, 4, 2, 1, 3, 6, 7, 9, 5];
let input2 = [8, 4, 2, 1, 4, 1,3, 1, 2];
let input3 = [2, 6, 5, 4, 7, 8, 9, 1];
// let input4 =
let input4 = [10, 5]
let res = minRewards(input4);
console.log(res)

/*
  [8, 4, 2, 1, 3, 6, 7, 9, 5]
  [1, 1, 1, 1, 2, 3, 4, 5, 1]
*/

