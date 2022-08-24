function intToRomanOne(num: number): string {
  const romanMap = {
    0: ['I', 'V', 'X'],
    1: ['X', 'L', 'C'],
    2: ['C', 'D', 'M'],
    3: ['M', 'M', 'M'],
  };
  let result = '';
  const len = String(num).length;
  for (let i = 0; i < len; i++) {
    let n = num % 10;
    const [min, middle, max] = romanMap[i];
    num = Math.floor(num / 10);
    if (n == 0) {
      continue;
    } else if (n < 4) {
      const s = new Array(n).fill(min).join('');
      result = s + result;
    } else if (n === 4) {
      result = min + middle + result;
    } else if (n < 9) {
      const s = new Array(n - 5).fill(min).join('');
      result = middle + s + result;
    } else {
      result = min + max + result;
    }
  }
  return result;
}

function intToRomanTwo(num: number): string {
  const romanMap = {
    1000: 'M',
    900: 'CM',
    500: 'D',
    400: 'CD',
    100: 'C',
    90: 'XC',
    50: 'L',
    40: 'XL',
    10: 'X',
    9: 'IX',
    5: 'V',
    4: 'IV',
    1: 'I',
  };
  let result = '';
  while (num > 0) {
    for (let [key, value] of Object.entries(romanMap).reverse()) {
      const val = Number(key);
      if (num >= val) {
        num -= val;
        result += value;
        break;
      }
    }
    if (num === 0) {
      break;
    }
  }

  return result;
}
