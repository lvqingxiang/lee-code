function reverse(x: number): number {
  let result = 0;
  while (x !== 0) {
    if (result > 214748364 || result < -214748364) {
      return 0;
    }
    const n = x % 10;
    x = ~~(x / 10);
    result = result * 10 + n;
  }

  return result;
}
