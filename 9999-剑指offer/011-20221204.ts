function minArray(numbers: number[]): number {
  for (
    let i = 0, j = 1;
    i < numbers.length - 1 && j < numbers.length;
    j++, i++
  ) {
    if (numbers[i] > numbers[j]) return numbers[j];
  }
  return numbers[0];
}
