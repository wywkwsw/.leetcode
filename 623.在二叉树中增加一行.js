/*
 * @lc app=leetcode.cn id=623 lang=javascript
 *
 * [623] 在二叉树中增加一行
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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function (root, val, depth) {
  function dp(root, val, depth, layers) {
    root && root.left && dp(root.left, val, depth, layers + 1);
    root && root.right &&dp(root.right, val, depth, layers + 1);
    if (depth === layers + 1) {
      //到了父节点
      // if (root && root.left) {
        let left = root.left || null;
        let newRootleft = new TreeNode(val);
        newRootleft.left = left;
        root.left = newRootleft;
      // }
      // if (root && root.right) {
        let right = root.right || null;
        let newRootright = new TreeNode(val);
        newRootright.right = right;
        root.right = newRootright;
      // }
    }
  }
  if(depth === 1) {
    let newRoot = new TreeNode(val)
    newRoot.left = root
    newRoot.right = null
    return newRoot
  }else {
    dp(root, val, depth,1)
    return root
  }
  
};
// @lc code=end
