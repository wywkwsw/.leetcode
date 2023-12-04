/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
// var sortedArrayToBST = function(nums) {
//         const buildTree = (nums, start, end) => {
//             if (start > end) {
//                 return null;
//             }
    
//             const mid = (start + end) >>> 1;
//             const root = new TreeNode(nums[mid]);
//             root.left = buildTree(nums, start, mid - 1);
//             root.right = buildTree(nums, mid + 1, end);
//             return root;
//         }
    
//         return buildTree(nums, 0, nums.length - 1);
// };
var sortedArrayToBST = function(nums) {
   function buildTree (nums, start,end) {
        if(start > end) {
            return null;
        }
        const mid = (start + end) >>> 1;
        const root = new TreeNode(nums[mid]);
        root.left = buildTree(nums, start, mid - 1);
        root.right = buildTree(nums, mid + 1, end);
        return root;
   }
    return buildTree(nums, 0, nums.length - 1);
};
// @lc code=end

