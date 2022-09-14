function singleNumberOne(nums: number[]): number {
  let map = {};
  for (let i of nums) {
    if (map[i]) {
      map[i] = map[i] + 1;
    } else {
      map[i] = 1;
    }
  }
  for (let i in map) {
    if (map[i] === 1) return Number(i);
  }
  return 0;
}

function singleNumberTwo(nums: number[]): number {
  let result = 0;
  for (let i of nums) {
    result ^= i;
  }
  return result;
}
