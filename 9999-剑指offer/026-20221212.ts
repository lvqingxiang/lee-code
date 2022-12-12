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

function isSubStructure(A: TreeNode | null, B: TreeNode | null): boolean {
  if (!B || !A) return false;
  const recur = (l: TreeNode | null, r: TreeNode | null) => {
    if (!r) return true;
    if (!l || l.val !== r.val) return false;
    return recur(l.left, r.left) && recur(l.right, r.right);
  };
  return recur(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B);
}
