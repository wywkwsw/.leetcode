/*
 * @lc app=leetcode.cn id=508 lang=javascript
 *
 * [508] 出现次数最多的子树元素和
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
 * @return {number[]}
 */
var findFrequentTreeSum = function (root) {
  let mxOcc = 0;
  const mp = new Map();
  let ans = [];

  const dfs = (root) => {
    if (!root) return 0;
    const cur = root.val + dfs(root.left) + dfs(root.right);
    mp.set(cur, (mp.get(cur) || 0) + 1);
    if (mp.get(cur) > mxOcc) {
      mxOcc = mp.get(cur);
      ans = [cur];
    } else if (mp.get(cur) == mxOcc) {
      ans.push(cur);
    }
    return cur;
  };
  dfs(root);
  return ans;
};
// @lc code=end
