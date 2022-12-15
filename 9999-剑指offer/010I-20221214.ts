let map: any = { '0': 0, '1': 1 };
function fib(n: number): number {
  if (n == 0 || n == 1) return n;
  map[String(n)] =
    (map[String(n - 1)] ?? fib(n - 1)) + (map[String(n - 2)] ?? fib(n - 2));
  console.log(map);
  return map[String(n)] % 1000000007;
}
