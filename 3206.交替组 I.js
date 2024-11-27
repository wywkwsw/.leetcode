/*
 * @lc app=leetcode.cn id=3206 lang=javascript
 * @lcpr version=20003
 *
 * [3206] 交替组 I
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} colors
 * @return {number}
 */
var numberOfAlternatingGroups = function (colors) {
  const n = colors.length;
  let res = 0;
  for (let i = 0; i < n; i++) {
    if (
      colors[i] !== colors[(i - 1 + n) % n] &&
      colors[i] !== colors[(i + 1) % n]
    ) {
      res++;
    }
  }
  return res;
};
// @lc code=end

/*
// @lcpr case=start
// [1,1,1]\n
// @lcpr case=end

// @lcpr case=start
// [0,1,0,0,1]\n
// @lcpr case=end

 */
