function mySqrtOne(x: number): number {
  if (x === 0) return 0;
  if (x < 4) return 1;
  for (let i = 1; i <= Math.round(x / 2); i++) {
    if (i * i === x) return i;
    if (i * i > x) return i - 1;
  }
  return 0;
}

function mySqrtTwo(x: number): number {
  if (x === 0) return 0;
  let ans = -1,
    l = 0,
    r = x;
  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);
    if (mid * mid <= x) {
      ans = mid;
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return ans;
}
