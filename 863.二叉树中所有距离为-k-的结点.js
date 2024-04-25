/*
 * @lc app=leetcode.cn id=863 lang=javascript
 *
 * [863] 二叉树中所有距离为 K 的结点
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */

var distanceK = function (root, target, k) {
  const graph = new Map();
  const buildGraph = (node, parent) => {
    if (node) {
      if (parent) {
        if (graph.has(node)) {
          graph.get(node).push(parent);
        } else {
          graph.set(node, [parent]);
        }
        if (graph.has(parent)) {
          graph.get(parent).push(node);
        } else {
          graph.set(parent, [node]);
        }
      }
      buildGraph(node.left, node);
      buildGraph(node.right, node);
    }
  };
  buildGraph(root, null);

  const queue = [[target, 0]];
  const visited = new Set();
  const res = [];
  while (queue.length) {
    const [node, dist] = queue.shift();
    if (dist === k) {
      res.push(node.val);
    }
    if (dist < k) {
      visited.add(node);
      (graph.get(node) || []).forEach((neighbor) => {
        if (!visited.has(neighbor)) {
          queue.push([neighbor, dist + 1]);
        }
      });
    }
  }
  return res;
};
// @lc code=end
