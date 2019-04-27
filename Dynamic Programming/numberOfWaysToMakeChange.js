//brute force

function numberOfWaysToMakeChange(n, denoms, ind = 0) {
  // Write your code here.
  if (n < 0) {
    return 0;
  }
  if (n === 0) {
    return 1;
  }
  let numWays = 0;
  for (let i = ind; i < denoms.length; i++) {
    numWays += numberOfWaysToMakeChange(n - denoms[i], denoms, i);
  }
  return numWays
}


function numberOfWaysToMakeChange(n, denoms, ind = 0) {
let res = numberOfWaysToMakeChange(6, [1, 5]) // 2

}


function numberOfWaysToMakeChange(n, denoms, ind = 0) {
  // Write your code here.
  let dp = new Array(n + 1).fill(0);
  dp[0] = 1;

  for (let denom of denoms) {
    for (let i = 1; i <= n; i++) {
      if (i >= denom) {
        dp[i] += dp[i - denom]; // index represents the amount. value in the index is how many ways that amount can be created.
      }
    }
  }
  return dp[n];
}

let res = numberOfWaysToMakeChange(10, [1, 5, 10]) // 2
res

