/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
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
var constructMaximumBinaryTree = function (nums) {
  function tavaer(list) {
    if (list.length === 0) return null;
    const maxValue = Math.max(...list)//Math.max(...list);
    const index = list.indexOf(maxValue);
    const leftList = list.slice(0, index);
    const rightList = list.slice(index+1);
    const node1= tavaer(leftList);
    const node2= tavaer(rightList);
    const node = new TreeNode(maxValue);
    node.left = node1
    node.right = node2
    // node.left = tavaer(leftList);
    // node.right= tavaer(rightList);
    return node;
  }
  return tavaer(nums);
};
// @lc code=end
