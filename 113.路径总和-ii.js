/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  let formation = [];
  function travser(root, targetSum, newList) {
    if (!root) {
      return;
    } else {
      //判断是否是叶子节点
      if (!root.left && !root.right) {
        if (targetSum - root.val === 0) {
          newList.push(root.val);
          formation.push(newList);
          return;
        }
      }
      newList.push(root.val);
      if (root.left) {
        travser(
          root.left,
          targetSum - root.val,
          JSON.parse(JSON.stringify(newList))
        );
      }
      if (root.right) {
        travser(
          root.right,
          targetSum - root.val,
          JSON.parse(JSON.stringify(newList))
        );
      }
    }
  }
  travser(root, targetSum, []);
  return formation;
};

// @lc code=end
