/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  let queue = [];
  if (!root) return queue;
  //前序遍历，插入对应数值
  function traveRoot(root, index) {
    if (root) {
      //该层无数据
      if (!queue[index]) {
        queue[index] = [];
      }
      if (index % 2 === 0) {
        queue[index].unshift(root.val);
      } else {
        queue[index].push(root.val);
      }
      traveRoot(root.right, index + 1);
      traveRoot(root.left, index + 1);
    }
  }
  traveRoot(root, 0);
  return queue;
};
// @lc code=end
