class MedianFinder {
  contents: number[] = [];
  constructor() {
    this.contents = [];
  }

  addNum(num: number): void {
    this.contents.push(num);
  }

  findMedian(): number {
    this.contents.sort((a, b) => a - b);
    const length = this.contents.length;
    if (this.contents.length % 2) {
      return this.contents[Math.floor(length / 2)];
    } else {
      return (this.contents[length / 2 - 1] + this.contents[length / 2]) / 2;
    }
  }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
