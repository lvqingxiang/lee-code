function replaceSpace(s: string): string {
  let res = '';
  for (let i of s) {
    res += i === ' ' ? '%20' : i;
  }
  return res;
}
