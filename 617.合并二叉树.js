/*
 * @lc app=leetcode.cn id=617 lang=javascript
 *
 * [617] 合并二叉树
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  function traverse(root1, root2) {
    let newTree = new TreeNode();
    if (root1 !== null && root2 !== null) {
      newTree.val = root1.val + root2.val;
      newTree.left = traverse(root1.left, root2.left);
      newTree.right = traverse(root1.right, root2.right);
    }
    if (root1 !== null && root2 == null) {
      newTree.val = root1.val;
      newTree.left = root1.left;
      newTree.right = root1.right;
    }
    if (root1 == null && root2 !== null) {
      newTree.val = root2.val;
      newTree.left = root2.left;
      newTree.right = root2.right;
    }
    if (root1 == null && root2 == null) {
      return null
    }
    return newTree;
  }
  return traverse(root1, root2);
};
// @lc code=end
