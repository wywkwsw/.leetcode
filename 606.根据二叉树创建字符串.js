/*
 * @lc app=leetcode.cn id=606 lang=javascript
 *
 * [606] 根据二叉树创建字符串
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
 * @return {string}
 */
var tree2str = function(root) {
    let res = ''
    if(root === null) return res
    function traverse (root) {
        if(root === null) {
            return '()'
        }
        if(root.left && root.right){
            return root.val+'('+traverse(root.left)+')'+'('+traverse(root.right)+')'
        }
        if(!root.left && !root.right){
            return root.val
        }
        if(root.left && !root.right){
            return root.val+'('+traverse(root.left)+')'
        }
        if(!root.left && root.right){
            if(traverse(root.left) === '()'){
                return root.val+'()'+'('+traverse(root.right)+')'

            }
            return root.val+'('+traverse(root.left)+')'+'('+traverse(root.right)+')'
        }
    }
    res = traverse(root)
    return String(res)
};
// @lc code=end

