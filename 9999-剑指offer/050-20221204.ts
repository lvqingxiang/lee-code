function minNumber(nums: number[]): string {
  const sortNum = nums
    .map((i) => String(i))
    .sort((a: any, b: any) => a + b - (b + a));
  return sortNum.join('');
}
