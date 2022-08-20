function longestCommonPrefix(strs: string[]): string {
  let begin = 0;
  let end = 0;
  let i = 0;
  if (strs.length === 1) {
    return strs[0];
  }
  let result = twoStrCommonPrefix1(strs[0], strs[1]);
  for (let i = 2; i < strs.length; i++) {
    result = twoStrCommonPrefix1(result, strs[i]);
    if (!result) break;
  }
  return result;
}

function twoStrCommonPrefix1(str1, str2): string {
  let prefix = '';
  for (let i = 0, j = 0; i < str1.length && j < str2.length; i++, j++) {
    if (str1[i] === str2[j]) {
      prefix += str2[i];
    } else {
      break;
    }
  }
  return prefix;
}

function longestCommonPrefix2(strs: string[]): string {
  let begin = 0;
  let end = 0;
  let i = 0;
  if (strs.length === 1) {
    return strs[0];
  }
  let result = strs[0];
  for (let i = 1; i < strs.length; i++) {
    result = twoStrCommonPrefix2(result, strs[i]);
    if (!result) break;
  }
  return result;
}

function twoStrCommonPrefix2(str1, str2): string {
  let index = 0;
  let len = Math.min(str1.length, str2.length);
  while (index < len && str1[index] === str2[index]) {
    index++;
  }
  return str1.substring(0, index);
}
