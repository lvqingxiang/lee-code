/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  let i = 0,
    j = nums.length - 1,
    tmp;
  while (i < j) {
    while (i < j && nums[j] % 2 === 0) j--;
    while (i < j && nums[i] % 2 === 1) i++;
    tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
  }
  return nums;
};
