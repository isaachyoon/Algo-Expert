function topologicalSort(jobs, deps) {
  // Write your code here.
  let hashObj = {};
  jobs.forEach((job) => {
    hashObj[job] = new Node(job);
  })
  deps.forEach((dep) => {
    hashObj[dep[0]].dependency.push(hashObj[dep[1]]);
  });
  let res = [];
  let visited = new Set();
  for (let i = 0; i < jobs.length; i++) {
    if (visited[jobs[i]]) {
      continue;
    } else {
      helper(hashObj[jobs[i]], res, visited);
    }
  }
  return res;
}

function helper(node, res, visited) {
  if (visited.has(node.val)) return;
  visited.add(node.val);
  if (!node.dependency.length) {
    res.push(node.val);
    return;
  }
  for (let i = 0; i < node.dependency.length; i++) {
    helper(node.dependency[i], res, visited)
  }
  res.push(node.val)
}

function Node(val) {
  this.val = val;
  this.dependency = [];
}

let jobs = [1, 2, 3, 4];
let deps = [[1, 2], [1, 3], [3, 2], [4, 2], [4, 3]];

let jobs2 = [1, 2, 3, 4, 5, 6, 7, 8];
let deps2 = [[3, 1], [8, 1], [8, 7], [5, 7], [5, 2], [1, 4], [1, 6], [1, 2], [7, 6], [4, 6], [6, 2], [2, 3]];

let res = topologicalSort(jobs2, deps2).reverse();
console.log(res)