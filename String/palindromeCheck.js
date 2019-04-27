function isPalindrome(string) {
  // Write your code here.
  let start = 0,
      end = string.length - 1;
  while (start <= end) {
    if (string[start] === string[end]) {
      start++;
      end--;
    } else {
      return false;
    }
  }
  return true;
}

let res = isPalindrome('abcdcba');
console.log(res)