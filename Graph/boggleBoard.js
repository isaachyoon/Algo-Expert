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