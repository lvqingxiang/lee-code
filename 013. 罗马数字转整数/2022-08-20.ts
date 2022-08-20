function romanToInt(s: string): number {
  let result = 0;
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  for (let i = 0; i < s.length; i++) {
    const srNum = romanMap[s[i]];
    const nextSrNum = romanMap[s[i + 1]];
    if (i < s.length - 1 && srNum < nextSrNum) {
      result -= srNum;
    } else {
      result += srNum;
    }
  }
  return result;
}
