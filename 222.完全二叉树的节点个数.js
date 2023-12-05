/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
 * @return {number}
 */
//自写
// var countNodes = function (root) {
//   if (!root) return 0;
//   return getRootNum(root) + 1;
// };
// function getRootNum(root) {
//   let res = 0;
//   if (!root) return res;
//   let leftNum = getRootNum(root.left);
//   let rightNum = getRootNum(root.right);
//   if (root.right) {
//     res++;
//   }
//   if (root.left) {
//     res++;
//   }
//   return res + leftNum + rightNum;
// }

//题解
var countNodes = function(root) {
  let l = root, r = root;
  // 记录左、右子树的高度
  let hl = 0, hr = 0;

  while (l !== null) {
      l = l.left;
      hl++;
  }

  while (r !== null) {
      r = r.right;
      hr++;
  }

  // 如果左右子树的高度相同，则是一棵满二叉树
  if (hl === hr) {
      return Math.pow(2, hl) - 1;
  }

  // 如果左右高度不同，则按照普通二叉树的逻辑计算
  return 1 + countNodes(root.left) + countNodes(root.right);
};
// @lc code=end
