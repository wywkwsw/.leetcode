/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let dp = new Array(m).fill(new Array(n));
  for (let i = 0; i < m; i++) {
    for (let k = 0; k < n; k++) {
      if (i === 0 || k === 0) {
        dp[i][k] = 1;
      } else {
        dp[i][k] = dp[i - 1][k] + dp[i][k - 1];
      }
    }
  }
  return dp[m-1][n-1];
};
// @lc code=end
