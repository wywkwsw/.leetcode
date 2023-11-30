/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
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
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  if (n == 0) return new Array();
  // 构造闭区间 [1, n] 组成的 BST
  return build(1, n);
};

function build(left, right) {
  // 存储 BST 的结果集
  let res = new Array();
  // base case
  if (left > right) {
    // 注意：这里必须添加 null，否则在下面无法递归左右子树

    res.push(null);
    return res;
  }
  // 1、穷举 root 节点的所有可能
  for (var i = left; i <= right; i++) {
    // 2、递归构造出左右子树的所有合法 BST
    let leftTree = build(left, i - 1);
    let rightTree = build(i + 1, right);
    // 3、给 root 节点穷举所有左右子树的组合
    for (var leftNode = 0; leftNode < leftTree.length; leftNode++) {
      for (var rightNode = 0; rightNode < rightTree.length; rightNode++) {
        // i 作为根节点 root 的值
        var root = new TreeNode(i);
        root.left = leftTree[leftNode];
        root.right = rightTree[rightNode];
        res.push(root);
      }
    }
  }
  return res;
}
// @lc code=end
