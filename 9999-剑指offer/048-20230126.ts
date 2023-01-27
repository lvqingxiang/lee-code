function lengthOfLongestSubstring(s: string): number {
  let res = 0,
    tmp = 0,
    m: any = {};
  for (let j = 0; j < s.length; j++) {
    const index = m[s[j]] ?? -1;
    m[s[j]] = j;
    tmp = tmp < j - index ? tmp + 1 : j - index;
    res = Math.max(tmp, res);
  }
  return res;
}
