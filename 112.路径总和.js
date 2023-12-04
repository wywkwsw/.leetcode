/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (root === null) return false;
  return getNodeVal(root, targetSum);
};

function getNodeVal(root, targetSum) {
  if (root === null && targetSum === 0) {
    return true;
  } else if (root === null && targetSum !== 0) {
    return false;
  } else {
    //考虑root节点只有单边节点情况【1，2】，1
    if (!root.right) {
      return getNodeVal(root.left, targetSum - root.val);
    }
    if (!root.left) {
      return getNodeVal(root.right, targetSum - root.val);
    }
    return (
      getNodeVal(root.left, targetSum - root.val) ||
      getNodeVal(root.right, targetSum - root.val)
    );
  }
}
// @lc code=end
