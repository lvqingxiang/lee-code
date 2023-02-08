function isStraight(nums: number[]): boolean {
  const newNums = nums.sort((a, b) => a - b);
  let len = 0;
  for (let i = 0; i < 4; i++) {
    if (newNums[i] === 0) len++;
    else if (newNums[i] === newNums[i + 1]) return false;
  }
  console.log(len, newNums);
  return newNums[4] - newNums[len] < 5;
}
