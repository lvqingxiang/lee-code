function letterCombinations(digits: string): string[] {
  let result: string[] = [];
  let str = '';
  const letterMap: Record<string, string> = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  };
  if (!digits.length) return result;

  const backTrack = (digits: string, index: number, str: string) => {
    if (index === digits.length) {
      result.push(str);
      return;
    }
    const strArr = letterMap[digits[index]];
    for (let i of strArr) {
      str += i;
      backTrack(digits, index + 1, str);
      str = str.slice(0, str.length - 1);
    }
  };
  backTrack(digits, 0, str);
  return result;
}
