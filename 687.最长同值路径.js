/*
 * @lc app=leetcode.cn id=687 lang=javascript
 *
 * [687] 最长同值路径
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
// /**
//  * @param {TreeNode} root
//  * @return {number}
//  */
var longestUnivaluePath = function (root) {
  let max = 0;
  if (root === null) return max;
  function traves(root) {
    if (root === null) return 0;
    let left = traves(root.left);
    let right = traves(root.right);
    let leftValue = 0;
    let rightValue = 0;
    if (root.left && root.left.val === root.val) {
      leftValue = left + 1;
    }
    if (root.right && root.right.val === root.val) {
      rightValue = right + 1;
    }
    max = Math.max(max, leftValue + rightValue);
    return Math.max(leftValue, rightValue);
  }

  traves(root);
  return max;
};
//最长同值路径
// var longestUnivaluePath = function (root) {
//   let max = 0;
//   if (root === null) return max;
//   function traves(root) {
//     if (root === null) return 0;
//     let left = traves(root.left);
//     let right = traves(root.right);
//     let leftValue = 0;
//     let rightValue = 0;
//     if (root.left && root.left.val === root.val) {
//       leftValue = left + 1;
//     }
//     if (root.right && root.right.val === root.val) {
//       rightValue = right + 1;
//     }
//     max = Math.max(max, leftValue + rightValue);
//     return Math.max(leftValue, rightValue);
//   }

//   traves(root);
//   return max;
// };

// @lc code=end
