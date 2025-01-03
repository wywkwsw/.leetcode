/*
 * @lc app=leetcode.cn id=45 lang=javascript
 * @lcpr version=20004
 *
 * [45] 跳跃游戏 II
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let len = nums.length;
  let maxPosition = 0;
  let end = 0;
  let steps = 0;
  for (let i = 0; i < len - 1; i++) {
    maxPosition = Math.max(maxPosition, i + nums[i]);
    if (i === end) {
      end = maxPosition;
      steps++;
    }
  }
  return steps;
};
// @lc code=end

/*
// @lcpr case=start
// [2,3,1,1,4]\n
// @lcpr case=end

// @lcpr case=start
// [2,3,0,1,4]\n
// @lcpr case=end

 */
