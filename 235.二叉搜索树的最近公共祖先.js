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
var lowestCommonAncestor = function (root, p, q) {
  // 创建两个队列，保存二叉树查找路径
  let queueP = [];
  let queueQ = [];
  function tavers(root, val, path) {
    if (!root) return;
    //大于当前节点，往右边树遍历查找
    path.push(root.val);
    if (val > root.val) {
      tavers(root.right, val, path);
    } else if (val < root.val) {
      tavers(root.left, val, path);
    }
  }
  tavers(root, p, queueP);
  tavers(root, q, queueQ);
  let res = ''
  let i = 0
  while(i <= Math.min(queueP.length,queueQ.length)) {
    if(Math.min(queueP.length,queueQ.length) === i){
        res =  queueP[i]
    }
    if(queueP[i] === queueQ[i]){
        i++
    }else {
        res =  queueP[i -1]
    }
  }
  return new TreeNode(queueP[1])
};
// @lc code=end
