function strToInt(str: string): number {
  let r = 0;
  const s = str.trim();
  if (!s.length) return 0;
  let q = 0;
  for (let i = 0; i < s.length; i++) {
    if ((s[i] === '+' || s[i] === '-') && (q !== 0 || i !== 0)) break;
    if (s[i] === '+') {
      q = 1;
    } else if (s[i] === '-') {
      q = -1;
    } else if (
      ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(s[i])
    ) {
      r = r * 10 + +s[i];
    } else {
      break;
    }
  }
  r = q !== 0 ? r * q : r;
  if (r > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;
  if (r < -Math.pow(2, 31)) return -Math.pow(2, 31);
  return r;
}
