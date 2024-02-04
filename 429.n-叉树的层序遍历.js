/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let queue = [];
    let res = [];
    if (!root) {
      return [];
    }
    queue.push(root)
    while (queue.length != 0) {
      const n = queue.length;
      const levelArr = []
      for (let i = 0; i < n; i++) {
        let node = queue.shift();
        if (node) {
            levelArr.push(node.val);
        }
        for(let childrenNode of node.children){
            queue.push(childrenNode)
        }
      }
      res.push(levelArr)
    }
    return res
};
// @lc code=end

