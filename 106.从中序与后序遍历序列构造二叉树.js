/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  if (postorder.length === 0) {
    return null;
  }
  const lastIndex = postorder.length - 1;
  const root = new TreeNode(postorder[lastIndex]);
  const index = inorder.indexOf(postorder[lastIndex]);
  const inorderLeft = inorder.slice(0, index);
  const inorderRight = inorder.slice(index + 1);
  const postorderLeft = postorder.slice(0, index);
  const postorderRight = postorder.slice(index, lastIndex);
  root.left = buildTree(inorderLeft, postorderLeft);
  root.right = buildTree(inorderRight, postorderRight);
  return root;
};
// @lc code=end
