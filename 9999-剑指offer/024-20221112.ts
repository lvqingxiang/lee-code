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

function reverseList(head: ListNode | null): ListNode | null {
  let pre: ListNode | null = null;
  while (head != null) {
    const temp = head.next;
    head.next = pre;
    pre = head;
    head = temp;
  }

  return pre;
}
