function combinationSum(candidates: number[], target: number): number[][] {
  let result: number[][] = [],
    sumArr: number[] = [];
  const sortCandidates = candidates.sort((a, b) => a - b);
  const len = sortCandidates.length;
  if (target < sortCandidates[0]) return result;

  const dfs = (arr: number[], target: number, index: number) => {
    if (index === len) return;
    if (target === 0) {
      result.push(sumArr);
      return;
    }
    dfs(sortCandidates, target, index + 1);
    if (target - sortCandidates[index] >= 0) {
      sumArr.push(sortCandidates[index]);
      dfs(sortCandidates, target - sortCandidates[index], index);
      sumArr = sumArr.slice(0, sumArr.length - 1);
    }
  };

  dfs(sortCandidates, target, 0);

  return result;
}
