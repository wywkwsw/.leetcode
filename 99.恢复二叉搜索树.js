/*
 * @lc app=leetcode.cn id=99 lang=javascript
 *
 * [99] 恢复二叉搜索树
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
const recoverTree = (root) => {
    let perv = new TreeNode(-Infinity);
    let err1, err2 = null;

    const inOrder = (root) => {
        if (root == null) {
            return;
        }
        inOrder(root.left);

        if (perv.val >= root.val && err1 == null) { // 当前是第一对错误
            err1 = perv;                            // 记录第一个错误点
        }
        if (perv.val >= root.val && err1 != null) { // 第一个错误点已确定
            err2 = root;                            // 记录第二个错误点
        }
        perv = root;       // 更新 perv

        inOrder(root.right);
    };

    inOrder(root);
    const temp = err1.val;
    err1.val = err2.val;
    err2.val = temp;
};
// @lc code=end

