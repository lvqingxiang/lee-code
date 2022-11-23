function findRepeatNumber(nums: number[]): number {
  let m: any = {};
  for (let i of nums) {
    if (m[i] !== undefined) return i;
    m[i] = i;
  }
}
