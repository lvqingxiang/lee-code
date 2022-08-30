function threeSumClosest(nums: number[], target: number): number {
  let sortNums = nums.sort((a, b) => a - b);
  let best = sortNums[0] + sortNums[1] + sortNums[2];
  if (sortNums.length === 3) return best;
  for (let i = 0; i < sortNums.length - 2; i++) {
    let j = i + 1,
      k = sortNums.length - 1;
    while (j < k) {
      let result = sortNums[i] + sortNums[j] + sortNums[k];
      if (Math.abs(target - result) < Math.abs(target - best)) {
        best = result;
      }
      if (result > target) {
        k--;
      } else if (result === target) {
        return result;
      } else {
        j++;
      }
    }
  }
  return best;
}
