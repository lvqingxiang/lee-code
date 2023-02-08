/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;
  let num = 1,
    max = 0;
  const recur = (root, n) => {
    let t = n;
    if (root.left) t = recur(root.left, n + 1);
    max = Math.max(t, max);
    if (root.right) t = recur(root.right, n + 1);
    return t;
  };
  recur(root, num);
  return max;
}
