function getLeastNumbersOne(arr: number[], k: number): number[] {
  return arr.sort((a, b) => a - b).slice(0, k);
}

function getLeastNumbersTwo(arr: number[], k: number): number[] {
  const quickSelect = (l: number, r: number): number[] => {
    let i = l,
      j = r;
    while (i < j) {
      while (i < j && arr[j] >= arr[l]) j--;
      while (i < j && arr[i] <= arr[l]) i++;
      const t = arr[i];
      arr[i] = arr[j];
      arr[j] = t;
    }
    const m = arr[l];
    arr[l] = arr[i];
    arr[i] = m;
    if (k < i) return quickSelect(l, i - 1);
    if (k > i) return quickSelect(i + 1, r);
    return arr.slice(0, k);
  };
  return quickSelect(0, arr.length - 1);
}
