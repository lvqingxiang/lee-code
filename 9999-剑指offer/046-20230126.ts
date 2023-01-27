function translateNum(num: number): number {
  const calculate = (s: string): number => {
    let result = 0;
    if (s.length <= 2) {
      if (Number(s) > 25 || s[0] === '0') result = 1;
      else result = s.length;
    } else {
      return s.slice(0, 1) === '0'
        ? calculate(s.slice(1))
        : calculate(s.slice(1)) +
            (Number(s.slice(0, 2)) <= 25 ? calculate(s.slice(2)) : 0);
    }
    return result;
  };
  return calculate(String(num));
}
