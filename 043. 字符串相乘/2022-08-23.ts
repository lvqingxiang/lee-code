function multiply(num1: string, num2: string): string {
  let arr: number[] = [];
  if (num1 === '0' || num2 === '0') return '0';
  for (let i = num2.length - 1; i >= 0; i--) {
    const n1 = Number(num2[i]);
    for (let j = num1.length - 1; j >= 0; j--) {
      const n2 = Number(num1[j]);
      const val = n1 * n2 + (arr[i + j + 1] ?? 0);
      arr[i + j + 1] = val % 10;
      arr[i + j] = Math.floor(val / 10) + (arr[i + j] ?? 0);
    }
  }
  return arr[0] === 0 ? arr.slice(1).join('') : arr.join('');
}
