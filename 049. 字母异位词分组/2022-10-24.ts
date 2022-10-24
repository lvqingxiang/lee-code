function groupAnagrams(strs: string[]): string[][] {
  if (strs.length <= 1) return [strs];
  let strMap: Record<string, string[]> = {};
  for (let i = 0; i < strs.length; i++) {
    let item = strs[i].split('').sort().toString();
    strMap[item] = strMap[item] ? strMap[item].concat(strs[i]) : [strs[i]];
  }
  return Object.values(strMap);
}
