/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  let res = [];
  if (!root) return res;
  function ergodicTree(root, path) {
    if(root){
    path += root.val.toString();
    if (root.left === null && root.right === null) {
      res.push(path);
    } else {
    path += "->"
      ergodicTree(root.left, path);
      ergodicTree(root.right, path);
    }
}
  }
  ergodicTree(root, "");
  return res;
};

// @lc code=end
