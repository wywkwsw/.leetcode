/*
 * @lc app=leetcode.cn id=面试题 17.16 lang=javascript
 * @lcpr version=20002
 *
 * [面试题 17.16] 按摩师
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var massage = function (nums) {
  if (nums.length === 0) return 0;
  let dp = new Array(nums.length).fill(0);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }
  return dp[nums.length - 1];
};
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,1]\n
// @lcpr case=end

// @lcpr case=start
// [2,7,9,3,1]\n
// @lcpr case=end

// @lcpr case=start
// [2,1,4,5,3,1,1,3]\n
// @lcpr case=end

 */
