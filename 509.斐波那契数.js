/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// 递归
// var fib = function (n) {
//   if (n === 0 || n === 1) return n;
//   return fib(n - 1) + fib(n - 2);
// };
// 迭代
// var fib = function (n) {
//   // 备忘录全初始化为 0
//   let memo = new Array(n + 1).fill(0);
//   // 进行带备忘录的递归
//   return dp(memo, n);
// };
// function dp(memo, n) {
//   if (n === 0 || n === 1) return n;
//   if (memo[n] !== 0) return memo[n];
//   memo[n] = dp(memo, n - 1) + dp(memo, n - 2);
//   return memo[n];
// }
//dp 数组的迭代（递推）解法
var fib = function(N) {
    if (N === 0) return 0;
    let dp = new Array(N + 1).fill(0);
    // base case
    dp[0] = 0; dp[1] = 1;
    // 状态转移
    for (let i = 2; i <= N; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[N];
};
// @lc code=end
