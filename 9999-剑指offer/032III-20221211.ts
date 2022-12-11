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

function levelOrder(root: TreeNode | null): number[][] {
  let res: number[][] = [];
  if (!root) return res;
  let stack = [{ node: root, index: 0 }];

  while (stack.length) {
    let value = stack.shift(),
      node = value?.node,
      index = value?.index ?? 0;
    if (index % 2) {
      res[index] = [node.val].concat(res?.[index] ?? []);
    } else {
      res[index] = (res?.[index] ?? []).concat(node.val);
    }
    if (node.left) {
      stack.push({ node: node.left, index: index + 1 });
    }
    if (node.right) {
      stack.push({ node: node.right, index: index + 1 });
    }
  }
  return res;
}
