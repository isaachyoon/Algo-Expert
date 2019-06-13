function patternMatcher(pattern, string) {
  // Write your code here.
  let patternHash = {};
  for (let i = 0; i < pattern.length; i++) { //O(n)
    if (!patternHash[pattern[i]]) {
      patternHash[pattern[i]] = 1;
    } else {
      patternHash[pattern[i]] += 1;
    }
  }
  let num_x = patternHash.x || 0;
  let num_y = patternHash.y || 0;
  let start = 1
  if (num_x === 0 || num_y === 0) {
    start = 0;
  }
  for (let i = start; i < string.length; i++) { //O(m)
    let x_char = i;
    let y_char = (string.length - (x_char * num_x)) / num_y;
    if (x_char < 0 || y_char < 0) continue;
    let res = findPattern(x_char, y_char, pattern, string)
    if (res.length) return res;
  }
  return [];
}

function findPattern(x_char, y_char, pattern, string) {
  console.log(x_char, y_char)
  let hash = {};
  let totalStr = '';
  let currInd = 0;
  for (let i = 0; i < pattern.length; i++) {
    let currChar = pattern[i]; //x
    if (currChar === 'x') {
      if (hash.x) {
        totalStr += hash.x;
      } else {
        hash.x = string.slice(currInd, currInd + x_char);
        totalStr += hash.x;
      }
      currInd += x_char
    } else if (currChar === 'y') {
      if (hash.y) {
        totalStr += hash.y;
      } else {
        hash.y = string.slice(currInd, currInd + y_char)
        totalStr += hash.y;
      }
      currInd += y_char
    }
  }
  if (totalStr === string) {
    return [hash.x || '', hash.y || '']
  } else {
    return [];
  }
}


// let res = patternMatcher('xxyxxy', 'gogopowerrangergogopowerranger');
let res2 = patternMatcher('yyyy', "testtesttesttest")
console.log(res2)