function movingCount(m: number, n: number, k: number): number {
  let visited: boolean[][] = [...Array(m)].map(() => Array(n).fill(false));
  const dfs = (i, j, si, sj): number => {
    if (i >= m || j >= n || visited[i][j] || k < si + sj) return 0;
    visited[i][j] = true;
    return (
      1 +
      dfs(i + 1, j, (i + 1) % 10 !== 0 ? si + 1 : si - 8, sj) +
      dfs(i, j + 1, si, (j + 1) % 10 !== 0 ? sj + 1 : sj - 8)
    );
  };

  return dfs(0, 0, 0, 0);
}
