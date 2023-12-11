/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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

var findMode = function (root) {
  let mode = [];
  let prev = null;
  let curCount = 0;
  // 全局的最长相同序列长度
  let maxCount = 0;
  function traverse(root) {
    if (root === null) {
      return;
    }
    traverse(root.left);
    if (prev === null) {
      // 初始化
      curCount = 1;
      maxCount = 1;
      mode.push(root.val);
    } else {
      if (root.val === prev.val) {
        curCount++;
        if (curCount === maxCount) {
          // root.val 是众数
          mode.push(root.val);
        } else if (curCount > maxCount) {
          // 更新众数
          mode = [root.val];
          maxCount = curCount;
        }
      }
      if (root.val !== prev.val) {
        // root.val 不重复的情况
        curCount = 1;
        if (curCount === maxCount) {
          mode.push(root.val);
        }
      }
    }
    // 别忘了更新 prev
    prev = root;

    traverse(root.right);
  }
  traverse(root);
  return mode;
};

// @lc code=end
