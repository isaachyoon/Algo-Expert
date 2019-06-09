function patternMatcher(pattern, string) {
  // Write your code here.
  let patternHash = {};
  for (let i = 0; i < pattern.length; i++) {
    if (!patternHash[pattern[i]]) {
      patternHash[pattern[i]] = 1;
    } else {
      patternHash[pattern[i]] += 1;
    }
  }
  let num_x = patternHash.x;
  let num_y = patternHash.y;
  for (let i = 0; i < string.length; i++) {
    let x_char = i;
    let y_char = (string.length - (x_char * num_x)) / num_y;
    findPattern(x_char, y_char, pattern, string)
  }
}

function findPattern(x_char, y_char, pattern, string) {


}
