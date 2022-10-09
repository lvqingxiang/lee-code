function searchInsert(nums: number[], target: number): number {
  let end = nums.length - 1;
  let start = 0;
  if (target < nums[start]) return 0;
  if (target > nums[end]) return nums.length;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let num = nums[mid];
    if (num === target) return mid;
    if (num < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return end + 1;
}
