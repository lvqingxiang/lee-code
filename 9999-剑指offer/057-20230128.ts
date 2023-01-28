function twoSum(nums: number[], target: number): number[] {
  let i = 0,
    j = nums.length - 1,
    res: number[] = [];
  while (i < j) {
    const sum = nums[i] + nums[j];
    if (sum === target) {
      res = [nums[i], nums[j]];
      break;
    } else if (sum < target) {
      i++;
    } else {
      j--;
    }
  }
  return res;
}
