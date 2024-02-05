/*
 * @lc app=leetcode.cn id=538 lang=javascript
 *
 * [538] 把二叉搜索树转换为累加树
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
 * @return {TreeNode}
 */
var convertBST = function(root) {
    let sum = 0;
    function traverse (root){
        if (!root) {
            return;
        }
        traverse(root.right);  // 先遍历右子树
        sum += root.val;  // 维护累加和
        root.val = sum;  // 将 BST 节点的值更新为累加和
        traverse(root.left);  // 遍历左子树
    }
    traverse(root);
    return root;
};
// @lc code=end

