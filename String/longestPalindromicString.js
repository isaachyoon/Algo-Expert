function longestPalindromicSubstring(string) {
  // Write your code here.
  let max = string[0];
  if (string.length)
  for (let i = 1; i < string.length-1; i++) {
    if (string[i-1] === string[i+1]) {
      let str = countIt(string, i-1, i+1, string[i]);
      if (str.length > max.length) {
        max = str;
      }
    }
    if (string[i] === string[i+1]) {
      let str = countIt(string, i-1, i+2, string[i] + string[i+1]);
      if (str.length > max.length) {
        max = str;
      }
    }
  }
  return max;
}

function countIt(string, ind1, ind2, start) {
  let str = start;
  let count = 0;
  while (ind1 >= 0 && ind2 < string.length && string[ind1] === string[ind2]) {
    count += 2;
    str = string[ind1] + str + string[ind2];
    ind1--;
    ind2++;
  }
  return str;
}

let res = longestPalindromicSubstring('aa');
console.log(res);