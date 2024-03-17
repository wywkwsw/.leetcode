/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
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
 * @return {number[]}
 */
var largestValues = function (root) {
  if (!root) return [];
  //层级遍历该树
  let quenu = [root];
  let res = [];
  while (quenu.length > 0) {
    let n = quenu.length;
    let maxArr = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
      let root = quenu.shift();
      root && root.left && quenu.push(root.left);
      root && root.right && quenu.push(root.right);
      maxArr = Math.max(maxArr, root.val);
    }
    res.push(maxArr);
  }
  return res;
};
// @lc code=end
