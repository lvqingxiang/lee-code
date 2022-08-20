function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 1) {
    return strs[0];
  }
  let result = strs[0];
  for (let i = 1; i < strs.length; i++) {
    result = twoStrCommonPrefix(result, strs[i]);
    if (!result) break;
  }
  return result;
}

function twoStrCommonPrefix(str1, str2): string {
  let index = 0;
  let len = Math.min(str1.length, str2.length);
  while (index < len && str1[index] === str2[index]) {
    index++;
  }
  return str1.substring(0, index);
}
