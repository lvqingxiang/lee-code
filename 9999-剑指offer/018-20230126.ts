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

function deleteNode(head: ListNode | null, val: number): ListNode | null {
  let l: any = head,
    r: any = null,
    flag = false;
  while (head && !flag) {
    if (head.val === val) {
      if (!r) {
        l = head.next;
      } else {
        r.next = head.next;
      }
      flag = true;
    }
    r = head;
    head = head.next;
  }
  return l;
}
