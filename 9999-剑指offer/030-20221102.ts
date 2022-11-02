class MinStack {
  minArr: number[];
  arr: number[];
  constructor() {
    this.minArr = [];
    this.arr = [];
  }

  push(x: number): void {
    this.arr.push(x);
    this.minArr.push(
      this.minArr.length
        ? x > this.minArr[this.minArr.length - 1]
          ? this.minArr[this.minArr.length - 1]
          : x
        : x
    );
  }

  pop(): void {
    this.arr.pop();
    this.minArr.pop();
  }

  top(): number {
    return this.arr[this.arr.length - 1];
  }

  min(): number {
    return this.minArr[this.minArr.length - 1];
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
