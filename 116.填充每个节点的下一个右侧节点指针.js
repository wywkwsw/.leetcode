/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (root === null) return null;
  travser(root.left, root.right);
  return root;
};
function travser(node1, node2) {
  if (node1 === null || node2 === null) {
    return;
  }
  node1.next = node2;
  travser(node1.left, node1.right);
  travser(node1.right, node2.left);
  travser(node2.left, node2.right);
}
// // 三叉树遍历框架
// function traverse(node1, node2) {
//     if (node1 === null || node2 === null) {
//         return;
//     }
//     /**** 前序位置 ****/
//     // 将传入的两个节点穿起来
//     node1.next = node2;
    
//     // 连接相同父节点的两个子节点
//     traverse(node1.left, node1.right);
//     traverse(node2.left, node2.right);
//     // 连接跨越父节点的两个子节点
//     traverse(node1.right, node2.left);
// }
// @lc code=end
