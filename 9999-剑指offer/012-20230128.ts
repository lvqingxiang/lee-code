function exist(board: string[][], word: string): boolean {
  const dfs = (
    board: string[][],
    words: string[],
    i: number,
    j: number,
    k: number
  ): boolean => {
    if (
      i < 0 ||
      i >= board.length ||
      j < 0 ||
      j >= board[0].length ||
      board[i][j] !== words[k]
    )
      return false;
    if (k === words.length - 1) return true;
    board[i][j] = ' ';
    let res =
      dfs(board, words, i + 1, j, k + 1) ||
      dfs(board, words, i - 1, j, k + 1) ||
      dfs(board, words, i, j + 1, k + 1) ||
      dfs(board, words, i, j - 1, k + 1);
    board[i][j] = word[k];
    return res;
  };
  const words = word.split('');
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (dfs(board, words, i, j, 0)) return true;
    }
  }
  return false;
}
