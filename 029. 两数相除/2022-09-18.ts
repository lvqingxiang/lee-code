function divide(dividend: number, divisor: number): number {
  if (dividend === -(2 ** 31) && divisor === -1) return 2 ** 31 - 1;
  if (dividend === 0 || divisor === 0) return 0;

  let flag: boolean = dividend > 0 !== divisor > 0,
    count = 0,
    dividendTemp = Math.abs(dividend),
    divisorTemp = Math.abs(divisor);

  while (dividendTemp >= divisorTemp) {
    let c = 1;
    let value = divisorTemp;
    while (dividendTemp >= value + value) {
      c += c;
      value += value;
    }
    count += c;
    dividendTemp -= value;
  }
  return flag ? count * -1 : count;
}
