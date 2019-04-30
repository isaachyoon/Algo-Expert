function balancedBrackets(string) {
  // Write your code here.
  const bracketObj = {
    '}' : '{',
    ']' : '[',
    ')' : '('
  }
  const openBrackets = [];
  for (let i = 0; i < string.length; i++) {
    const l = string[i];
    if (l === '(' || l === '{' || l === '[') {
      openBrackets.push(l);
    } else if (l === '}' || l === ')' || l === ']') {
      if (bracketObj[l] === openBrackets[openBrackets.length - 1]) {
        openBrackets.pop();
      } else {
        return false;
      }
    }
  }
  return openBrackets.length === 0;
}

let res = balancedBrackets('([])(){}(())()()');
res