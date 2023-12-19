/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
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
var averageOfLevels = function (root) {
  let res = [];
  function traverse(root, index) {
    if (!res[index]) {
      res[index] = [];
    }
    if (root !== null) {
      res[index].push(root.val);
      traverse(root.left, index + 1);
      traverse(root.right, index + 1);
    }
  }
  traverse(root, 0);
  return res.filter(m => m.length !== 0).map((v) => {
    return (
      v.reduce((accumulator, currentValue) => accumulator + currentValue, 0) /
      v.length
    );
  });
};
// @lc code=end
