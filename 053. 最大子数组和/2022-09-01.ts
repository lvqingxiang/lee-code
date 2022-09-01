function maxSubArray(nums: number[]): number {
  let max = nums[0],
    pre = 0;
  for (let i of nums) {
    pre = Math.max(pre + i, i);
    max = Math.max(pre, max);
  }
  return max;
}
