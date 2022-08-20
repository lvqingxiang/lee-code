function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let r = new ListNode();
  let q = r;
  let p = 0;
  let n = 0;
  while (l1 || l2) {
    n = (l1?.val ?? 0) + (l2?.val ?? 0) + p;
    if (n > 9) {
      n = n - 10;
      p = 1;
    } else {
      p = 0;
    }
    q.next = new ListNode(n);
    q = q.next;
    l1 = l1?.next;
    l2 = l2?.next;
  }
  if (p) {
    q.next = new ListNode(p);
  }

  return r.next;
}
