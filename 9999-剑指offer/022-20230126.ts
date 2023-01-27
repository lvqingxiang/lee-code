/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function getKthFromEnd(head: ListNode | null, k: number): ListNode | null {
  let len = 0,
    pre: any = head;
  while (head) {
    len++;
    head = head.next;
  }
  while (len - k >= 0) {
    len--;
    pre = pre.next;
  }
  return pre;
}

function getKthFromEndTwo(head: ListNode | null, k: number): ListNode | null {
  let former: any = head,
    latter: any = head;
  while (k > 0) {
    former = former.next;
    k--;
  }
  while (former) {
    former = former.next;
    latter = latter.next;
  }
  return latter;
}
