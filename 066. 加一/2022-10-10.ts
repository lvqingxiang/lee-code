function plusOneOne(digits: number[]): number[] {
  let result = [];
  let op = 0;
  if (digits[0] === 0) return [1];
  for (let i = digits.length - 1; i >= 0; i--) {
    const num = (i === digits.length - 1 ? digits[i] + 1 : digits[i]) + op;
    if (num > 9) {
      op = 1;
      result.unshift(0);
    } else {
      op = 0;
      result.unshift(num);
    }
  }
  if (op) result.unshift(1);
  return result;
}

function plusOneTwo(digits: number[]): number[] {
  let op = 0;
  if (digits[0] === 0) return [1];
  for (let i = digits.length - 1; i >= 0; i--) {
    const num = (i === digits.length - 1 ? digits[i] + 1 : digits[i]) + op;
    if (num > 9) {
      op = 1;
      digits[i] = 0;
    } else {
      op = 0;
      digits[i] = num;
      break;
    }
  }
  if (op) digits.unshift(1);
  return digits;
}
