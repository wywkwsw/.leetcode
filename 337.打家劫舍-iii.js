/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
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
// var rob = function (root) {
//   //  root.val > root.left.val + root.right.val
//   function dfs(node) {
//     if (!node) return [0, 0];
//     const left = dfs(node.left);
//     const right = dfs(node.right);
//     const selected = node.val + left[1] + right[1];
//     const notSelected =
//       Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
//     return [selected, notSelected];
//   }
//   const res = dfs(root);
//   return Math.max(res[0], res[1]);
// };

var rob = function (root) {
  function dfs(node) {
    if (!node) return [0, 0];
    let left = dfs(node.left);
    let right = dfs(node.right);
    let selectNode = node.val + left[1] + right[1];
    let noselectNode =
      Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
    return [selectNode, noselectNode];
  }
  const res = dfs(root);
  return Math.max(res[0], res[1]);
};
// @lc code=end
