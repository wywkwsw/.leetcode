/*
 * @lc app=leetcode.cn id=117 lang=javascript
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
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
  //二叉树层序遍历
  if (root === null) {
    return null;
  }
  let queue = [root];
  while (queue.length > 0) {
    let n = queue.length;
    for (let i = 0; i < n; i++) {
      let node = queue.shift();
      if (i < n-1) node.next = queue[0];
      node.left&&queue.push(node.left);
      node.right&&queue.push(node.right);
    }
  }
  return root;
};
// var connect = function (root) {
//   const pre = [];
//   function dfs(node, depth) {
//       if (node === null) {
//           return;
//       }
//       if (depth === pre.length) { // node 是这一层最左边的节点
//           pre.push(node);
//       } else { // pre[depth] 是 node 左边的节点
//           pre[depth].next = node; // node 左边的节点指向 node
//           pre[depth] = node;
//       }
//       dfs(node.left, depth + 1);
//       dfs(node.right, depth + 1);
//   }
//   dfs(root, 0); // 根节点的深度为 0
//   return root;
// };

// @lc code=end
