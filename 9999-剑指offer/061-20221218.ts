function isStraight(nums: number[]): boolean {
  const sortNum = nums.sort((a, b) => a - b);
  const zeroNums = nums.filter((i) => i === 0);
  if (nums[nums.length - 1] - nums[zeroNums.length] > 4) return false;
  for (
    let i = zeroNums.length, j = zeroNums.length + 1;
    j < nums.length;
    i++, j++
  ) {
    if (sortNum[i] === sortNum[j]) return false;
  }
  return true;
}
