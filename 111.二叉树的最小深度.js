/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (root == null) return 0;
  let leftDep = minDepth(root.left);
  let rightDep = minDepth(root.right);
  if (root.left && root.right) {
    return Math.min(leftDep, rightDep) + 1;
  }
  if(leftDep === 0) return rightDep+1
  if(rightDep === 0) return leftDep+1
};
// @lc code=end
