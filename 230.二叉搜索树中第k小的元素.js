/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  //遍历整棵树
  let quent = [root];
  let newArr = [];
  while (quent.length > 0) {
    let n = quent.length;
    for (let i = 0; i < n; i++) {
      let newRoot = quent.shift();
      if (newRoot) newArr.push(newRoot.val);
      if (newRoot && newRoot.left) {
        quent.push(newRoot.left);
      }
      if (newRoot && newRoot.right) {
        quent.push(newRoot.right);
      }
    }
  }
  return newArr.sort((a, b) => a - b)[k - 1];
  //也可以用中序遍历，因为该树为二叉搜索树
};
// @lc code=end
