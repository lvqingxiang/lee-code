function missingNumber(nums: number[]): number {
  let len = nums.length;
  const sum = nums.reduce((pre, cur) => pre + cur, 0);
  const total = (len * (len + 1)) / 2;
  return total - sum;
}
