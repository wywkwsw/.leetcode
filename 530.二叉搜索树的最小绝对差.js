/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
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
// var getMinimumDifference = function (root) {
//   let minNumber = Number.MAX_SAFE_INTEGER;
//   if (root === null) return minNumber;
//   function traverse(root) {
//     if (root === null || root.val === 0) return;
//     traverse(root.left);
//     //中序
//     let leftMin =
//       root.left != undefined
//         ? Math.abs(root.left.val - root.val)
//         : Number.MAX_SAFE_INTEGER;
//     let rightMin =
//       root.right != undefined
//         ? Math.abs(root.right.val - root.val)
//         : Number.MAX_SAFE_INTEGER;
//     minNumber = Math.min(minNumber, leftMin, rightMin);
//     traverse(root.right);
//   }
//   traverse(root);
//   return minNumber;
// };
//最小差值，左右两棵树后面的值-前面树的最大值

var getMinimumDifference = function (root) {
    
}
// @lc code=end
