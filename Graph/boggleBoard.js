function boggleBoard(board, words) {
  // Write your code here.
  let trieObj = {};
  for (let word of words) {
    constructTrie(word, trieObj);
  }
  let res = [];
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      const letter = board[r][c];
      if (trieObj[letter]) {
        // console.log(letter)
        let temp = board[r][c];
        board[r][c] = false;
        findWord(board, r, c, trieObj[letter], res, temp)
        board[r][c] = temp;
      }
    }
  }
  console.log(res)
  return res;
}

function findWord(board, r, c, trie, res, word = '') {
  if (trie['*']) {
    res.push(word);
    // return;
  }
  const startRow = (r - 1 < 0) ? 0 : r - 1;
  const endRow = (r + 1 > board.length - 1) ? board.length - 1 : r + 1;
  const startCol = (c - 1 < 0) ? 0 : c - 1;
  const endCol = (c + 1 > board[0].length - 1) ? board[0].length - 1 : c + 1;
  for (let row = startRow; row <= endRow; row++) {
    for (let col = startCol; col <= endCol; col++) {
      // console.log(board)
      if (row === r && col === c) continue;
      let letter = board[row][col];
      if (trie[letter]) {
        let temp = board[row][col];
        board[row][col] = false
        findWord(board, row, col, trie[letter], res, word + letter)
        board[row][col] = temp;
      }
    }
  }

}

function constructTrie(word, trie, ind = 0) {
  if (ind >= word.length) {
    trie['*'] = true;
    return;
  }
  const letter = word[ind];
  if (!trie[letter]) {
    trie[letter] = {};
  }
  constructTrie(word, trie[letter], ind + 1);
}


const board = [
  ["y", "g", "f", "y", "e", "i"],
  ["c", "o", "r", "p", "o", "u"],
  ["j", "u", "z", "s", "e", "l"],
  ["s", "y", "u", "r", "h", "p"],
  ["e", "a", "e", "g", "n", "d"],
  ["h", "e", "l", "s", "a", "t"],
];

const board2 = [
  ["a", "b", "c", "d", "e"],
  ["f", "g", "h", "i", "j"],
  ["k", "l", "m", "n", "o"],
  ["p", "q", "r", "s", "t"],
  ["u", "v", "w", "x", "y"],
];

const board3 = [
  ["f", "t", "r", "o", "p", "i", "k", "b", "o"],
  ["r", "w", "l", "p", "e", "u", "e", "a", "b"],
  ["j", "o", "t", "s", "e", "l", "f", "l", "p"],
  ["s", "z", "u", "t", "h", "u", "o", "p", "i"],
  ["k", "a", "e", "g", "n", "d", "r", "g", "a"],
  ["h", "n", "l", "s", "a", "t", "e", "t", "x"],
];

const words = ["san", "sana", "at", "vomit", "yours", "help", "end", "been", "bed", "danger", "calm", "ok", "chaos", "complete", "rear", "going", "storm", "face", "epual", "dangerous"];
const expected = ["yours", "help", "danger", "san", "at"];

const words2 = ["agmsy", "agmsytojed", "agmsytojedinhcbgl", "agmsytojedinhcbfl"];
const expected2 = ["agmsy", "agmsytojed", "agmsytojedinhcbfl"];
boggleBoard(board2, words2)