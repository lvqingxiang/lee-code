function search(nums: number[], target: number): number {
  const len = nums.length;
  let num = 0;
  if (target < nums[0] || target > nums[len - 1]) return num;
  for (let i = 0; i < len; ) {
    if (nums[i] < target) {
      i++;
    } else if (nums[i] === target) {
      num++;
      i++;
    } else {
      return num;
    }
  }
  return num;
}
