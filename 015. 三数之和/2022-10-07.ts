function threeSum(nums: number[]): number[][] {
  const len = nums.length;
  let result: number[][] = [];
  const sortNums = nums.sort((a, b) => a - b);
  if (
    sortNums[0] > 0 ||
    sortNums[len - 1] < 0 ||
    len < 3 ||
    (len === 3 && nums[0] + nums[1] + nums[2] !== 0)
  ) {
    return result;
  }

  for (let i = 0; i < len - 2; i++) {
    if (i > 0 && sortNums[i] === sortNums[i - 1]) {
      continue;
    }
    for (let j = i + 1; j < len - 1; j++) {
      let k = len - 1;
      if (j > i + 1 && sortNums[j] === sortNums[j - 1]) {
        continue;
      }
      while (j < k && sortNums[i] + sortNums[j] + sortNums[k] > 0) {
        k--;
      }
      if (j === k) break;
      if (sortNums[i] + sortNums[j] + sortNums[k] === 0) {
        result.push([sortNums[i], sortNums[j], sortNums[k]]);
      }
    }
  }

  return result;
}
