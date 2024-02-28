/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let dp = new Array(n + 1).fill(0);
  if (n >= 1) {
    dp[0] = 0;
    dp[1] = 1;
  }

  for (let i = 2; i <= n; i++) {
    if (i % 2 === 0) {
      //改数为偶数
      dp[i] = dp[i / 2];
    } else {
      //当数为奇数时
      dp[i] = dp[i - 1] + 1;
    }
  }
  return dp;
};
// @lc code=end
