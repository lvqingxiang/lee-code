function twoSum(nums: number[], target: number): number[] {
  const newNums = nums.slice().sort((a, b) => a - b);
  let l = 0;
  let r = nums.length - 1;
  while (l !== r) {
    const result = newNums[l] + newNums[r];
    if (result < target) {
      l++;
    } else if (result > target) {
      r--;
    } else {
      break;
    }
  }
  if (l == r) return [];
  l = nums.findIndex((v) => v === newNums[l]);
  r = nums.findIndex((v, i) => v === newNums[r] && i !== l);
  return [l, r].sort((a, b) => a - b);
}
