//easy
//o(n) time o(n) space

function getNthFib(n, memo = {}) {
  if (memo[n]) return memo[n]
  if (n === 1) {
    return 0;
  } else if (n === 2) {
    return 1;
  }

  let res = getNthFib(n - 1, memo) + getNthFib(n - 2, memo);
  memo[n] = res;
  return memo[n];
}

function getNthFib(n) {
  let first = 0;
  let second = 1;

  if (n === 1) return first;
  for (let i = 2; i < n; i++) {
    let temp = first + second;
    first = second;
    second = temp;
  }
  return second

}


let res = getNthFib(6);
console.log(res);