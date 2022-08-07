function lengthOfLongestSubstring(s: string): number {
  let l = 0;
  let j = 0;
  let t = '';
  let h = s.length;
  let m = 0;
  while (l < h && j < h) {
    if (h - l <= m) {
      break;
    }
    if (!t.includes(s[j])) {
      t += s[j];
      j++;
    } else {
      m = Math.max(m, t.length);
      t = '';
      l++;
      j = l;
    }
  }
  return Math.max(m, t.length);
}
