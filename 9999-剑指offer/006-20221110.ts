class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reversePrint(head: ListNode | null): number[] {
  let result = [];
  while (head && head.val !== null) {
    result.unshift(head.val);
    head = head.next;
  }
  return result;
}
