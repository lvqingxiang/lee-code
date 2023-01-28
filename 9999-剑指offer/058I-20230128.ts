function reverseWords(s: string): string {
  let res = [],
    i = s.length - 1,
    j = s.length - 1;
  for (; j >= 0; ) {
    if (s[j] === ' ') {
      if (j + 1 < s.length && s[j + 1] !== ' ')
        res.push(s.substring(j + 1, i + 1));
      j--;
      i = j;
    } else {
      j--;
      if (j < 0 && i !== j) res.push(s.substring(j + 1, i + 1));
    }
  }
  return res.join(' ');
}
