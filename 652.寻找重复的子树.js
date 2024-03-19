/*
 * @lc app=leetcode.cn id=652 lang=javascript
 *
 * [652] 寻找重复的子树
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
 * @return {TreeNode[]}
 */
// var findDuplicateSubtrees = function (root) {
//   let rootArr = [];
//   const memo = new Map();
//   function traver(root) {
//     root && rootArr.push(root);
//     root && root.left && rootArr.push(root.left) && traver(root.left);
//     root && root.left && rootArr.push(root.right) && traver(root.right);
//   }
//   traver(root)
//   return Array.from(new Set(rootArr))
// };
var findDuplicateSubtrees = function(root) {
    // 记录所有子树以及出现的次数
    const memo = new Map();
    // 记录重复的子树根节点
    const res = [];

    /* 主函数 */
    const traverse = function(root) {
        if (root == null) {
            return "#";
        }

        const left = traverse(root.left);
        const right = traverse(root.right);

        const subTree = left + "," + right + "," + root.val;

        const freq = memo.get(subTree) || 0;
        // 多次重复也只会被加入结果集一次
        if (freq === 1) {
            res.push(root);
        }
        // 给子树对应的出现次数加一
        memo.set(subTree, freq + 1);
        return subTree;
    };

    traverse(root);
    return res;
};
// @lc code=end
