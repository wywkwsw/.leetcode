/*
 * @lc app=leetcode.cn id=669 lang=javascript
 *
 * [669] 修剪二叉搜索树
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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
// var trimBST = function (root, low, high) {
//     if (root === null) return root;

//     // 1. 删除节点
//     if (root.val < low) {
//         // 当前节点的值 < low，则 当前节点的左子树一定都 < low 则都要删除，需要递归扫描返回右子树符合 [low, high] 的节点
//         return trimBST(root.right, low, high);
//     } else if (root.val > high) {
//         // 当前节点的值 > low，则 当前节点的右子树一定都 > high 则都要删除，需要递归扫描返回左子树符合 [low, high] 的节点
//         return trimBST(root.left, low, high);
//     }

//     // 2. 递归处理左右子树
//     root.left = trimBST(root.left, low, high);
//     root.right = trimBST(root.right, low, high);
//     return root;
// };
var trimBST = function (root, low, high) {
  if (root === null) return null;

  // 1. 寻找第一个满足在  [low, high] 范围的节点 root，root 就是最后返回的根节点
  while (root && (root.val < low || root.val > high)) {
    root = root.val < low ? root.right : root.left;
  }

  // 2. 对于 root.left 只需考虑将值小于 low 的节点去掉；
  let cur = root;
  while (cur) {
    while (cur.left && cur.left.val < low) {
      cur.left = cur.left.right;
    }
    cur = cur.left;
  }

  // 3. 同理 root.right 只需要考虑将大于 high 的节点去掉即可；
  cur = root;
  while (cur) {
    while (cur.right && cur.right.val > high) {
      cur.right = cur.right.left;
    }
    cur = cur.right;
  }

  return root;
};

// @lc code=end
