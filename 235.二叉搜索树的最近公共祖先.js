/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// var lowestCommonAncestor = function (root, p, q) {
//   // 创建两个队列，保存二叉树查找路径
//   let queueP = []; //6 2 0
//   let queueQ = []; // 6 8 9
//   function tavers(root, val, path) {
//     if (!root) return;
//     //大于当前节点，往右边树遍历查找
//     path.push(root.val);
//     if (val > root.val) {
//       tavers(root.right, val, path);
//     } else if (val < root.val) {
//       tavers(root.left, val, path);
//     }
//   }
//   tavers(root, q.val, queueQ);
//   tavers(root, p.val, queueP);

//   let res = "";
//   let i = 0;
//   while (i < Math.min(queueP.length, queueQ.length)) {
//     if (queueP[i] === queueQ[i]) {
//       res = queueQ[i];
//     }
//     i++;
//   }
//   return new TreeNode(res);
// };
var lowestCommonAncestor = function(root, p, q) {
  // base case
  if (root === null) return null;
  if (root === p || root === q) return root;

  var left = lowestCommonAncestor(root.left, p, q);
  var right = lowestCommonAncestor(root.right, p, q);
  // 情况 1
  if (left !== null && right !== null) {
      return root;
  }
  // 情况 2
  if (left === null && right === null) {
      return null;
  }
  // 情况 3
  return left === null ? right : left;
};
// @lc code=end
