function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const n = nums1.concat(nums2).sort((a, b) => a - b);
  const l = n.length;
  if (l % 2) {
    return n[Math.floor(l / 2)];
  } else {
    return (n[l / 2 - 1] + n[l / 2]) / 2;
  }
}
