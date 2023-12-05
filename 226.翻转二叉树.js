/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
//分解
// var invertTree = function (root) {
//     if(!root) return null
//     return reversal(root)
// };
// function reversal(root) {
//     if(!root) return null
//   if (!root.left && !root.right) {
//     return root;
//   }
//   let leftNode = reversal(root.left);
//   let rightNode = reversal(root.right);
//   root.left = rightNode;
//   root.right = leftNode;
//   return root;
// }

// 遍历
var invertTree = function (root) {
    ergodicTree(root);
    return root;
};
function ergodicTree (root) {
    if(!root) return
    let tempNode = root.left
    root.left = root.right
    root.right = tempNode
    ergodicTree(root.left)
    ergodicTree(root.right)
}
// @lc code=end
