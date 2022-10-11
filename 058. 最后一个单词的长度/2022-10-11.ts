function lengthOfLastWord(s: string): number {
  let end = s.length - 1;
  while (end >= 0) {
    if (s[end] === ' ') {
      end--;
    } else {
      break;
    }
  }
  let start = end;
  for (; start >= 0; ) {
    if (s[start] === ' ') {
      break;
    } else {
      start--;
    }
  }
  return end - start;
}
