/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
var maxDepth = function (root) {
    let num = 1
    return traverser(root,num)
};
function traverser(root, number) {
    let leftNumber = 0, rightNumber = 0
    if(root == null) return 0
    if (root.left === null && root.right === null)
        return number
    if (root.left != null) {
        leftNumber = traverser(root.left, number + 1)
    }
    if (root.right != null) {
        rightNumber = traverser(root.right, number + 1)
    }
    return Math.max(number, leftNumber, rightNumber)
}
// @lc code=end

