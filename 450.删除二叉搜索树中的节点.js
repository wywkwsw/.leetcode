/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (root == null) return null;
  if (root.val == key) {
    // 这两个 if 把情况 1 和 2 都正确处理了
    if (root.left == null) return root.right;
    if (root.right == null) return root.left;
    // 处理情况 3
    // 获得右子树最小的节点
    let minNode = getMin(root.right);
    // 删除右子树最小的节点
    root.right = deleteNode(root.right, minNode.val);
    // 用右子树最小的节点替换 root 节点
    minNode.left = root.left;
    minNode.right = root.right;
    root = minNode;
  } else if (root.val > key) {
    root.left = deleteNode(root.left, key);
  } else if (root.val < key) {
    root.right = deleteNode(root.right, key);
  }
  return root;
};

var getMin = function (node) {
  // BST 最左边的就是最小的
  while (node.left != null) node = node.left;
  return node;
};
// @lc code=end
