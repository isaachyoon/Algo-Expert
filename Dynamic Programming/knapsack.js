function knapsackProblem(items, capacity) {
  // Write your code here.
  let hash = {};
  items.forEach((x) => {
      hash[x[1]] = x[0]; // {weight: value}
  })
  let dp = new Array(capacity + 1); //index represents weight
  dp[0] = 0;
  for (let i = 0; i < dp.length; i++) {
    let max = 0;
    for (let j = 1; j < i; j++) {
      max = Math.max(dp[i - j] + dp[j], max, (hash[i] || 0));
    }
    dp[i] = max;
  }
  console.log(dp);
}

knapsackProblem([[1, 2], [4, 3], [5, 6], [6, 7]], 10);
