/*
 * @lc app=leetcode.cn id=563 lang=javascript
 *
 * [563] 二叉树的坡度
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
var findTilt = function (root) {
  let num = 0;
  function traverse(root) {
    if (root === null) {
      num += 0;
      return 0;
    }
    let left = traverse(root.left);
    let right = traverse(root.right);
    num += Math.abs(left - right);
    return left + right + root.val;
  }
  traverse(root);
  return num;
};
// @lc code=end
