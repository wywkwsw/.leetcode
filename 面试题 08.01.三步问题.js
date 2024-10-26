/*
 * @lc app=leetcode.cn id=面试题 08.01 lang=javascript
 * @lcpr version=20002
 *
 * [面试题 08.01] 三步问题
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var waysToStep = function (n) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  if (n === 3) return 4;
  let dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 4;
  for (let i = 4; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 3]) % 1000000007;
  }
  return dp[n];
};
// @lc code=end

/*
// @lcpr case=start
// 3\n
// @lcpr case=end

// @lcpr case=start
// 5\n
// @lcpr case=end

 */
