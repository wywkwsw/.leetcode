/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
// 递归
// var preorderTraversal = function(root) {
//     if(root == null) return []
//     let result = []
//     result.push(root.val)
//     if(root.left != null) result = result.concat(preorderTraversal(root.left))
//     if(root.right != null) result = result.concat(preorderTraversal(root.right))
//     return result
// };
// 迭代

 var preorderTraversal = function(root) {
    let result = []
    traverse(root,result)
    return result
 }
 traverse = function(root,result){
    if(root == null) return
    result.push(root.val)
    traverse(root.left,result)
    traverse(root.right,result)
 }
// @lc code=end

