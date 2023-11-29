/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
//递归
// var inorderTraversal = function(root) {
//     if(!root)return []
//     return inorderTraversal(root.left).concat(root.val,inorderTraversal(root.right))
// };
//迭代
var inorderTraversal = function(root) {
    let res = []
    function dp(root){
        if(!root)return
        dp(root.left)
        res.push(root.val)
        dp(root.right)
    }
    dp(root)
    return res
}
// @lc code=end

