/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
  let head, pre;
  const dfs = (root) => {
    if (!root) return;
    dfs(root.left);
    if (pre) pre.right = root;
    else head = root;
    root.left = pre;
    pre = root;
    dfs(root.right);
  };
  if (!root) return null;
  dfs(root);
  head.left = pre;
  pre.right = head;
  return head;
};
