/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
 * @return {number[]}
 */
var rightSideView = function (root) {
  let queue = [];
  let res = [];
  if (!root) {
    return [];
  }
  queue.push(root)
  while (queue.length != 0) {
    const n = queue.length;
    for (let i = 0; i < n; i++) {
      let node = queue.shift();
      if (i + 1 === n) {
        res.push(node.val);
      }
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
  return res
};
// @lc code=end
