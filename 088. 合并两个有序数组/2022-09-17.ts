/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let result: number[] = [];
  for (let i = 0, j = 0, k = 0; i < m || j < n; k++) {
    if (i >= m) {
      result[k] = nums2[j];
      j++;
    } else if (j >= n) {
      result[k] = nums1[i];
      i++;
    } else if (nums1[i] <= nums2[j]) {
      result[k] = nums1[i];
      i++;
    } else if (nums1[i] > nums2[j]) {
      result[k] = nums2[j];
      j++;
    }
  }
  for (let i = 0; i < m + n; i++) {
    nums1[i] = result[i];
  }
}
