/*
 * @lc app=leetcode.cn id=513 lang=javascript
 *
 * [513] 找树左下角的值
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
var findBottomLeftValue = function (root) {
  let depMax = -1;
  let valMax = Math.MIN_SAFE_INTEGER;
  function traver(root, depth) {
    if (!root) return;
    if (depth > depMax) {
      depMax = depth;
      valMax = root.val;
    } else {
      valMax = Math.min(valMax);
    }
    root.left && traver(root.left, depth + 1);
    root.right && traver(root.right, depth + 1);
  }
  traver(root, 0);
  return valMax;
};
// @lc code=end
