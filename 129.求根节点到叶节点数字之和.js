/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根节点到叶节点数字之和
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
var sumNumbers = function (root) {
  let res = 0;
  function traverser(root, str) {
    if (root) {
      let numStr = String(str) + String(root.val);
      traverser(root.left, numStr);
      traverser(root.right, numStr);
      if (!root.left && !root.right) {
        res += Number(numStr);
      }
    }
  }
  traverser(root, "");
  return res;
};
// @lc code=end
