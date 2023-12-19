/*
 * @lc app=leetcode.cn id=671 lang=javascript
 *
 * [671] 二叉树中第二小的节点
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
var findSecondMinimumValue = function(root) {
    let res = []
    function traverse(root) {
        if(root != null && root.left != null) {
            res.push(Math.min(root.left.val,root.right.val))
            traverse(root.left)
            traverse(root.right)
        }
        if(root != null && root.left == null){
            res.push(root.val)
        }
    }
    traverse(root)
    res = Array.from(new Set(res))
    if(res.length <2){
        return -1
    }else {
        return res.sort((a,b) => a-b)[1]
    }
};
// @lc code=end

