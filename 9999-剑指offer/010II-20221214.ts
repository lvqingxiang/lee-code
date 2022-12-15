function numWays(n: number): number {
  let a = 1,
    b = 1;
  for (let i = 2; i <= n; i++) {
    let temp = (a + b) % 1000000007;
    a = b;
    b = temp;
  }
  return b;
}
