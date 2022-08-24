function removeDuplicatesOne(nums: number[]): number {
  let i = 0;
  for (let j = 0; i < nums.length && nums[i] !== undefined; i++, j = i) {
    while (nums[i - 1] !== undefined && nums[j] === nums[i - 1]) {
      j++;
    }
    if (i !== j) {
      for (let m = i; m < j; m++) {
        delete nums[m];
      }
      for (
        let k = j, m = i;
        k < nums.length && nums[k] !== undefined;
        k++, m++
      ) {
        if (nums[k] !== undefined) {
          nums[m] = nums[k];
          delete nums[k];
        }
      }
    }
  }
  return nums.slice(0, i).filter((i) => i !== undefined).length;
}

function removeDuplicatesTwo(nums: number[]): number {
  let fast = 1,
    slow = 1;
  while (fast < nums.length) {
    if (nums[fast] !== nums[fast - 1]) {
      nums[slow] = nums[fast];
      slow++;
    }
    fast++;
  }
  return slow;
}
