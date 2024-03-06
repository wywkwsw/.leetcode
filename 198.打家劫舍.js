/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var rob = function (nums) {
//   let n = nums.length;
//   const dp = new Array(n).fill(0);
//   dp[0] = nums[0];
//   dp[1] = Math.max(nums[0], nums[1]);
//   for (let i = 2; i < n; i++) {
//     dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
//   }
//   return dp[n-1]
// };
var rob = function (nums) {
  let n = nums.length;
  let small = 0;
  let large = 0;
  let res = 0;
  for (let i = 0; i < n; i++) {
    res = Math.max(large, small + nums[i]);
    small = large;
    large = res;
  }
  return large;
};
// @lc code=end
