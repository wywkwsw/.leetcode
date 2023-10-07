/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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


function maxPathSum(root) {
    var maxSum = Number.MIN_SAFE_INTEGER;
    const dp = (root) => {
        if (root == null) return 0;
        var left = dp(root.left)
        var right = dp(root.right)
        const innerMaxSum = left + root.val + right; // 当前子树内部的最大路径和
        maxSum = Math.max(maxSum, innerMaxSum);      // 挑战最大纪录
        const outputMaxSum = root.val + Math.max(0, left, right); // 当前子树对外提供的最大和
        return outputMaxSum < 0 ? 0 : outputMaxSum;
    }
    dp(root)
    return maxSum
}
// @lc code=end

