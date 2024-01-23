/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */

// var isValidBST = function (root) {
//   if (!root) return false;
//   function traverse(root) {
//     //后续遍历

//     let center = true;
//     let left = true;
//     let right = true;

//     if (root && root.left && root.right) {
//       if (root.val <= root.left.val || root.val >= root.right.val) {
//         center = false;
//       }
//       left = traverse(root.left);
//       right = traverse(root.right);
//       return left && right && center;
//     }
//     if (root && !root.left && !root.right) {
//       return true;
//     }
//     if (root && ((!root.left && root.right) || (root.left && !root.right))) {
//       return false;
//     }
//   }
//   return traverse(root);
// };
var isValidBST = function(root, min, max) {
    // base case
    if (root == null) return true;
    // 若 root.val 不符合 max 和 min 的限制，说明不是合法 BST
    if (min != null && root.val <= min.val) return false;
    if (max != null && root.val >= max.val) return false;
    // 限定左子树的最大值是root.val，右子树的最小值是root.val
    return isValidBST(root.left, min, root) && isValidBST(root.right, root, max);
};
// @lc code=end
