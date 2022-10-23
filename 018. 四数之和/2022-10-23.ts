function fourSum(nums: number[], target: number): number[][] {
  let result: number[][] = [];
  let numArr: number[] = [];
  let len = nums.length;
  nums = nums.sort((a, b) => a - b);

  const dps = (index: number, target: number, slen: number) => {
    if (slen === 0) {
      if (target === 0) {
        result.push([...numArr]);
      }
      return;
    }
    for (let i = index; i <= len - slen && slen * nums[i] <= target; i++) {
      if (
        (i > index && nums[i] == nums[i - 1]) ||
        nums[i] + (slen - 1) * nums[len - 1] < target
      ) {
        continue;
      }
      numArr.push(nums[i]);
      dps(i + 1, target - nums[i], slen - 1);
      numArr.pop();
    }
  };
  dps(0, target, 4);
  return result;
}
