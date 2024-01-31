/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (preorder.length === 0) {
        return null;
    }
    const root = new TreeNode(preorder[0])
    const index = inorder.indexOf(preorder[0])
    const left = inorder.slice(0,index)
    const right = inorder.slice(index+1)
    const preLeft = preorder.slice(1, index + 1);
    const preRight = preorder.slice(index + 1);
    root.left = buildTree(preLeft, left);
    root.right = buildTree(preRight, right);
    return root;
};
// @lc code=end

