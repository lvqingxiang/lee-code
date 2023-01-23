function maxValue(grid: number[][]): number {
  const i = grid.length,
    j = grid[0].length;
  for (let k = 1; k < i; k++) {
    grid[k][0] += grid[k - 1][0];
  }
  for (let k = 1; k < j; k++) {
    grid[0][k] += grid[0][k - 1];
  }
  for (let k = 1; k < i; k++) {
    for (let m = 1; m < j; m++) {
      grid[k][m] += Math.max(grid[k - 1][m], grid[k][m - 1]);
    }
  }
  return grid[i - 1][j - 1];
}
