function boggleBoard(board, words) {
  // Write your code here.
  let hasObj = {};
  for (word of words) {
    if (hashObj[word[0]]) {
      hashObj[word[0]].push(word);
    } else {
      hashObj[word[0]] = [word];
    }
  }
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      let currLetter = board[r][c];
      if (hashObj[currLetter]) {
        for (let word of arr) {
          findInBoggleBoard(board, r, c, word, 0);
        }
      }
    }
  }
}

function findInBoggleBoard(board, r, c, word, ind) {
  if (board[r][c] === word[ind]) {

  }
}


const board = [
  ["y", "g", "f", "y", "e", "i"],
  ["c", "o", "r", "p", "o", "u"],
  ["j", "u", "z", "s", "e", "l"],
  ["s", "y", "u", "r", "h", "p"],
  ["e", "a", "e", "g", "n", "d"],
  ["h", "e", "l", "s", "a", "t"],
];

const words = ["san", "sana", "at", "vomit", "yours", "help", "end", "been", "bed", "danger", "calm", "ok", "chaos", "complete", "rear", "going", "storm", "face", "epual", "dangerous"];
const expected = ["yours", "help", "danger", "san", "at"];