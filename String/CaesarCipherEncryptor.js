function caesarCipherEncryptor(string, key) {
  // Write your code here.
  let res = '';
  key = key % 52;
  for (let i = 0; i < string.length; i++) {
    let ascii = string[i].charCodeAt() + key;
    if (ascii > 122) {
      res += String.fromCharCode(ascii - 122 + 96)
    } else {
      res += String.fromCharCode(ascii);
    }
  }
  return res;
}
//a - z => 97 - 122

let res = caesarCipherEncryptor('xyz', 52);
console.log(res)
