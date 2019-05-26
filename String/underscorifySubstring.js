//Time complexity
//Space complexity: O(n) - at most O(n) where n is the number of letters in the string

function underscorifySubstring(string, substring) {
  // Write your code here.
  let substrIndArr = findSubstrInd(string, substring);  //O(n) * m (number of characters in substring)
  console.log(substrIndArr)
  if (!substrIndArr.length) return string;
  let combinedArr = [substrIndArr[0]];
  for (let i = 1; i < substrIndArr.length; i++) { //O(o)
    let lastInd = combinedArr.length - 1;
    if (combinedArr[lastInd][1] >= substrIndArr[i][0]) {
      combinedArr[lastInd][1] = Math.max(combinedArr[lastInd][1] , substrIndArr[i][1]);
    } else {
      combinedArr.push(substrIndArr[i]);
    }
  }
  let ind = 0;
  let resStr = ''
  for (let i = 0; i < combinedArr.length; i++) {
    if (ind < combinedArr[i][0]) {
      resStr += string.slice(ind, combinedArr[i][0]);
      ind = combinedArr[i][0];
    }
    if (ind === combinedArr[i][0]) {
      resStr += `_${string.slice(combinedArr[i][0], combinedArr[i][1])}_`;
      ind = combinedArr[i][1];
    }
  }
  resStr += string.slice(ind);
  return resStr;
  // console.log(resStr)
}

function findSubstrInd(string, substring) {
  let res = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === substring[0] && string.slice(i, i + substring.length) === substring) {
      res.push([i, i + substring.length]);
    }
  }
  return res;
}

// let res = underscorifySubstring('testthis is a testtest to see if testestest it works', 'bfjawkfja');
let res = underscorifySubstring('abababababababababababababaababaaabbababaa', 'a');
console.log(res)