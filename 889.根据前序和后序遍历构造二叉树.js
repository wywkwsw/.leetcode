/*
 * @lc app=leetcode.cn id=889 lang=javascript
 *
 * [889] 根据前序和后序遍历构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function(preorder, postorder) {
    const n = preorder.length;
    if (n === 0) { // 空节点
        return null;
    }
    if (n === 1) { // 叶子节点
        return new TreeNode(preorder[0]);
    }
    const leftSize = postorder.indexOf(preorder[1]) + 1; // 左子树的大小
    const pre1 = preorder.slice(1, 1 + leftSize);
    const pre2 = preorder.slice(1 + leftSize);
    const post1 = postorder.slice(0, leftSize);
    const post2 = postorder.slice(leftSize, n - 1);
    const left = constructFromPrePost(pre1, post1);
    const right = constructFromPrePost(pre2, post2);
    return new TreeNode(preorder[0], left, right);
};
// @lc code=end
