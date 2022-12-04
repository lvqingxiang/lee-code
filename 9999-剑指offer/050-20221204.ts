function firstUniqChar(s: string): string {
  let map: any = {};
  for (let i of s) {
    map[i] = (map?.[i] ?? 0) + 1;
  }
  for (let i of Object.entries(map)) {
    if (i[1] === 1) return i[0];
  }
  return ' ';
}
