function findNumberIn2DArray(matrix: number[][], target: number): boolean {
  let n = matrix.length - 1;
  let m = 0;
  while (n >= 0 && m < matrix[0].length) {
    if (matrix[n][m] > target) {
      n--;
    } else if (matrix[n][m] < target) {
      m++;
    } else {
      return true;
    }
  }
  return false;
}
