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

function kthLargest(root: TreeNode | null, k: number): number {
  let res: number[] = [];
  const dfs = (root) => {
    if (!root) return;
    dfs(root.left);
    res.push(root.val);
    dfs(root.right);
  };
  dfs(root);
  return res[res.length - k];
}

function kthLargestTwo(root: TreeNode | null, k: number): number {
  let res: any = null;
  const dfs = (root) => {
    if (!root) return;
    dfs(root.right);
    if (k === 0) return;
    if (--k === 0) res = root.val;
    dfs(root.left);
  };
  dfs(root);
  return res;
}
