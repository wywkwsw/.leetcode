/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
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
var levelOrderBottom = function (root) {
  let queue = [];
  if (!root) return queue;
  //前序遍历，插入对应数值
  function traveRoot(root, index) {
    if (root) {
      //该层无数据
      if (!queue[index]) {
        queue[index] = [];
      }
      queue[index].push(root.val);
      traveRoot(root.left, index + 1);
      traveRoot(root.right, index + 1);
    }
  }
  traveRoot(root, 0);
  return queue.reverse();
};
// @lc code=end
