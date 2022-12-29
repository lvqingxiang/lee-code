function isNumber(s: string): boolean {
  const n = s.trim();
  let hasDot = false,
    hasE = false,
    hase = false,
    addNum = 0,
    minusNum = 0;
  const arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const AfterArr = arr.concat('.');
  const beforeArr = ['e', 'E'];
  const strArr = ['e', 'E', '+', '-'];
  const othArr = arr.concat(beforeArr);
  if (!n.length || (n.length === 1 && strArr.includes(n[0]))) return false;
  for (let i = 0; i < n.length; i++) {
    if (
      i + 1 === n.length &&
      (strArr.includes(n[i]) || (n[i] === '.' && strArr.includes(n[i - 1])))
    )
      return false;
    if (n[i] === '.') {
      if (hasDot || hasE || hase) return false;
      if (
        (i === 0 && !arr.includes(n[i + 1])) ||
        (i > 0 && !arr.concat(['+', '-']).includes(n[i - 1]))
      )
        return false;
      hasDot = true;
    } else if (n[i] === '+') {
      addNum += 1;
      if (
        addNum > 2 ||
        !AfterArr.includes(n[i + 1]) ||
        (i !== 0 && !beforeArr.includes(n[i - 1]))
      )
        return false;
    } else if (n[i] === '-') {
      minusNum += 1;
      if (
        minusNum > 2 ||
        !AfterArr.includes(n[i + 1]) ||
        (i !== 0 && !beforeArr.includes(n[i - 1]))
      )
        return false;
    } else if (n[i] === 'E') {
      if (hasE || i - 1 < 0 || !othArr.concat(['.']).includes(n[i - 1]))
        return false;
      hasE = true;
    } else if (n[i] === 'e') {
      if (hase || i - 1 < 0 || !othArr.concat(['.']).includes(n[i - 1]))
        return false;
      hase = true;
    } else if (!arr.includes(n[i])) {
      return false;
    }
  }
  return true;
}
