function minNumberOfCoinsForChange(n, denoms) {
  let res = changeHelper(n, denoms, {});
  if (res === Infinity) return -1;
  return res;
}

function changeHelper(n, denoms, memo) {
  // Write your code here.
  if (memo[n]) return memo[n];
  if (n === 0) {
    return 0;
  }
  let min = Infinity;
  for (let denom of denoms) {
    if (n - denom >= 0) {
      min = Math.min(changeHelper(n - denom, denoms, memo) + 1, min);
    }
  }
  memo[n] = min;
  return memo[n];
}

//dynamic programming
function minNumberOfCoinsForChange(n, denoms) {
  let dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0;

  for (let denom of denoms) {
    for (let i = 0; i < dp.length; i++) {
      if (denom <= i) {
        dp[i] = Math.min(dp[i - denom] + 1, dp[i]);
      }
    }
  }
  if (dp[n] === Infinity) return -1;
  return dp[n];
}


let res = minNumberOfCoinsForChange(7, [2,4]); //3
res
