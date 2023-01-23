function cuttingRope(n: number): number {
  if (n <= 3) return n - 1;
  const a = Math.floor(n / 3) - 1,
    b = n % 3;
  let rem = 1;
  for (let i = 0; i < a; i++) {
    rem = (rem * 3) % 1000000007;
  }
  if (b === 0) return (rem * 3) % 1000000007;
  if (b === 1) return (rem * 4) % 1000000007;
  return (rem * 6) % 1000000007;
}
