/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
//前序遍历
var diameterOfBinaryTree = function (root) {
    var maxDiameter = 0;
    const traverse = function (node) {
        if (node === null) {
            return 0
        }
        // 对每个节点计算直径
        var leftMax = maxDepth(node.left);
        var rightMax = maxDepth(node.right);
        var myDiameter = leftMax + rightMax;
        // 更新全局最大直径
        maxDiameter = Math.max(maxDiameter, myDiameter);
        // 递归遍历左子树
        traverse(node.left);
        // 递归遍历右子树
        traverse(node.right);
    }
    // 计算二叉树的最大深度
    var maxDepth = function (node) {
        if (node == null) {
            return 0;
        }
        // 计算左右子树最大深度
        var leftMax = maxDepth(node.left);
        var rightMax = maxDepth(node.right);
        return 1 + Math.max(leftMax, rightMax);
    }
    traverse(root)
    return maxDiameter
};
//后序遍历
// var diameterOfBinaryTree = function(root) {
//     let maxDiameter = 0;
//     /**
//      * 递归获取深度
//      * @param {TreeNode} root 
//      * @return {number}
//      */
//     const maxDepth = function(root) {
//         if (root === null) {
//             return 0;
//         }
//         let leftMax = maxDepth(root.left);
//         let rightMax = maxDepth(root.right);
//         // 后序位置，顺便计算最大直径
//         let myDiameter = leftMax + rightMax;
//         maxDiameter = Math.max(maxDiameter, myDiameter);
//         return 1 + Math.max(leftMax, rightMax);
//     }
//     maxDepth(root);
//     return maxDiameter;
// };
// @lc code=end

