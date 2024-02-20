/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  //n楼的方法可以拆分为n-1 加上n-2的总数只和
  let dictionaries = {};
  function divert(m) {
    if (m === 1) return 1;
    if (m === 2) return 2;
    if (dictionaries[m]) {
      return dictionaries[m];
    }
    dictionaries[m] = divert(m - 1) + divert(m - 2);
    return divert(m - 1) + divert(m - 2);
  }
  return divert(n);
};
// @lc code=end
