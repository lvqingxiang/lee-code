/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (!head) return head;
  let node = head;
  while (node) {
    node.next = new Node(node.val, node.next);
    node = node.next.next;
  }
  node = head;
  while (node) {
    if (node.random) node.next.random = node.random.next;
    node = node.next.next;
  }
  node = head;
  var newNode = head.next;
  var res = newNode;
  while (node && newNode && newNode.next) {
    node.next = node.next.next;
    newNode.next = newNode.next.next;
    node = node.next;
    newNode = newNode.next;
  }
  node.next = null;
  return res;
};
