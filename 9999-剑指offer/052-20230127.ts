/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;
  if (headA == headB) return headA;
  let l1 = headA,
    l2 = headB,
    len1 = 0,
    len2 = 0,
    node = null;
  while (l1) {
    len1++;
    l1 = l1.next;
  }
  while (l2) {
    len2++;
    l2 = l2.next;
  }
  if (len1 > len2) {
    for (let i = 0; i < len1 - len2; i++) headA = headA.next;
  } else {
    for (let i = 0; i < len2 - len1; i++) headB = headB.next;
  }
  for (let i = 0; i < Math.min(len1, len2); i++) {
    if (headA == headB) {
      node = headA;
      break;
    } else if (headA.next == headB) {
      node = headB;
      break;
    } else if (headB.next == headA) {
      node = headA;
      break;
    } else if (headA.next == headB.next && headA.next) {
      node = headA.next;
      break;
    }
    headA = headA.next;
    headB = headB.next;
  }
  return node;
};

var getIntersectionNodeTwo = function (headA, headB) {
  let A = headA,
    B = headB;
  while (A != B) {
    A = A ? A.next : headB;
    B = B ? B.next : headA;
  }
  return A;
};
