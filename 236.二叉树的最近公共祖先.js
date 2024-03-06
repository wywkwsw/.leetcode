/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// 注意：javascript 代码由 chatGPT🤖 根据我的 java 代码翻译，旨在帮助不同背景的读者理解算法逻辑。
// 本代码已经通过力扣的测试用例，应该可直接成功提交。

var lowestCommonAncestor = function(root, p, q) {
    // base case
    if (root === null) return null;
    if (root === p || root === q) return root;

    var left = lowestCommonAncestor(root.left, p, q);
    var right = lowestCommonAncestor(root.right, p, q);
    // 情况 1
    if (left !== null && right !== null) {
        return root;
    }
    // 情况 2
    if (left === null && right === null) {
        return null;
    }
    // 情况 3
    return left === null ? right : left;
};
// @lc code=end
