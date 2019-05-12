function diskStacking(disks) {
  // Write your code here.
  disks = disks.sort((x, y) => x[2] - y[2]);

  let dp = disks.map((x) => x[2]);

  let res = [disks[0]];
  let loc = [];
  for (let i = 1; i < disks.length; i++) {
    let max = [0, 0]; // [val, max]
    for (let j = 0; j < i; j++) {
      let prev = disks[j];
      let curr = disks[i];
      if (prev[0] < curr[0] && prev[1] < curr[1] && prev[2] < curr[2]) {
        max[0] = dp[j];
        max[1] = j;
      }
    }
    dp[i] = dp[i] + max[0];
    if (max[0] === 0) {
      loc[i] = -1;
    } else {
      loc[i] = max[1];
    }
  }
  console.log(loc);
  return res;
}

let input = [[2, 2, 1], [2, 1, 2], [2, 3, 4], [3, 2, 5], [4, 4, 5], [2, 2, 8]];
let res = diskStacking(input);
console.log(res)