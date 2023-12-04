/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
var isBalanced = function(root) {
    let isBalanceds = true
    if(root == null) return isBalanceds
    if(root.left == null && root.right == null) return isBalanceds
    let leftDepth = getDepth(root.left)
    let rightDepth = getDepth(root.right)
    if(Math.abs(leftDepth - rightDepth) > 1){
        isBalanceds = false
    }
    return isBalanceds && isBalanced(root.left) && isBalanced(root.right)
};
function getDepth(root){
    if(root == null) return 0
    return Math.max(getDepth(root.left), getDepth(root.right)) + 1
}
// @lc code=end

