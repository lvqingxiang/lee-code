function isPalindromeOne(x: number): boolean {
  let result = true;
  if (x < 0) return false;
  const str = x.toString();
  const len = str.length;
  let l = Math.floor(len / 2 - 1);
  let r = len % 2 ? Math.floor(len / 2 + 1) : len / 2;
  for (; r < len && l >= 0; l--, r++) {
    if (str[l] !== str[r]) {
      result = false;
      break;
    }
  }
  return result;
}

function isPalindromeTwo(x: number): boolean {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
  let revertNumber = 0;
  while (x > revertNumber) {
    revertNumber = revertNumber * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return x === revertNumber || x === Math.floor(revertNumber / 10);
}
