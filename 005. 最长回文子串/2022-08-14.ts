function longestPalindromeOne(s: string): string {
  const len = s.length;
  let maxNum = 0;
  let begin = 0;
  for (let i = 0; i < len; i++) {
    let max = 1;
    let left = i - 1;
    while (s[i] === s[i + 1]) {
      i++;
      max++;
    }
    let right = i + 1;
    while (left >= 0 && right < len && s[left] === s[right]) {
      left--;
      right++;
      max += 2;
    }
    if (max > maxNum) {
      maxNum = max;
      begin = left + 1;
    }
  }

  return s.slice(begin, begin + maxNum);
}

function longestPalindromeTwo(s: string): string {
  if (s.length < 2) return s;
  let dp: Boolean[][] = new Array(s.length).fill(0).map((i) => []);
  let max = 1;
  let begin = 0;
  for (let i = 0; i < s.length; i++) {
    dp[i][i] = true;
  }
  for (let L = 2; L <= s.length; L++) {
    for (let i = 0; i < s.length; i++) {
      let j = i + L - 1;
      if (j >= s.length) {
        break;
      }
      if (s[i] === s[j]) {
        if (L <= 3) {
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }
      } else {
        dp[i][j] = false;
      }
      if (dp[i][j] && j - i + 1 > max) {
        max = j - i + 1;
        begin = i;
      }
    }
  }
  return s.slice(begin, begin + max);
}
