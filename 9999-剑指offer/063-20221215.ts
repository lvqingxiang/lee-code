function maxProfit(prices: number[]): number {
  let cost = Infinity,
    profit = 0;
  for (let i of prices) {
    cost = Math.min(cost, i);
    profit = Math.max(profit, i - cost);
  }
  return profit;
}
