function maxSubArray(nums: number[]): number {
  let profit = nums[0];
  for (let i = 1; i < nums.length; i++) {
    nums[i] += Math.max(nums[i - 1], 0);
    profit = Math.max(profit, nums[i]);
  }
  return profit;
}
