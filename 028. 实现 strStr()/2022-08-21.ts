function strStrOne(haystack: string, needle: string): number {
  if (!needle) return 0;
  if (haystack.length < needle.length) return -1;
  for (let i = 0, j = 0; i < haystack.length && j < needle.length; ) {
    if (haystack[i] === needle[j]) {
      if (haystack.length - i < needle.length - j) {
        return -1;
      } else {
        j++;
        let flag = true;
        for (
          let k = i + 1;
          k < haystack.length && j < needle.length;
          k++, j++
        ) {
          if (haystack[k] !== needle[j]) {
            flag = false;
          }
        }
        if (flag) {
          return i;
        } else {
          i++;
          j = 0;
        }
      }
    } else {
      i++;
      j = 0;
    }
  }
  return -1;
}

function strStrTwo(haystack: string, needle: string): number {
  const m = haystack.length,
    n = needle.length;
  for (let i = 0; i + n <= m; i++) {
    let flag = true;
    for (let j = 0; j < n; j++) {
      if (haystack[i + j] !== needle[j]) {
        flag = false;
      }
    }
    if (flag) return i;
  }
  return -1;
}
