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

function isSymmetric(root: TreeNode | null): boolean {
  const recur = (A: TreeNode | null, B: TreeNode | null) => {
    if (!A && !B) return true;
    if (!A || !B) return false;
    return A.val === B.val && recur(A.left, B.right) && recur(A.right, B.left);
  };
  if (!root) return false;
  return recur(root.left, root.right);
}
