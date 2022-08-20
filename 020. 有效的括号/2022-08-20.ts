function isValid(s: string): boolean {
  let arr: string[] = [];
  if (s.length % 2) return false;
  const strMap = { ']': '[', '}': '{', ')': '(' };
  for (let c of s) {
    if (strMap[c]) {
      if (arr.length === 0 || arr[0] !== strMap[c]) {
        return false;
      }
      arr.shift();
    } else {
      arr.unshift(c);
    }
  }
  return arr.length === 0;
}
