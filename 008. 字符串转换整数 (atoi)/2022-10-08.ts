function myAtoi(s: string): number {
  let r = '';
  let o = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      if (r.length || (i - 1 >= 0 && s[i - 1] !== ' ')) {
        break;
      }
    } else if (s[i] === '+') {
      if (o === 1 || o === -1 || (i - 1 >= 0 && s[i - 1] !== ' ')) {
        break;
      }
      o = 1;
    } else if (s[i] === '-') {
      if (o === 1 || o === -1 || (i - 1 >= 0 && s[i - 1] !== ' ')) {
        break;
      }
      o = -1;
    } else {
      if (s[i] === '0') {
        if (r.length) r += s[i];
      } else if (Number(s[i])) {
        r += s[i];
      } else {
        break;
      }
    }
  }
  o = o === 0 ? (r.length ? 1 : o) : o;
  let result: number = Number(r) * o;
  result =
    result > Math.pow(2, 31) - 1
      ? Math.pow(2, 31) - 1
      : result < -Math.pow(2, 31)
      ? -Math.pow(2, 31)
      : result;
  return result;
}
