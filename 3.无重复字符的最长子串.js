/*
 * @lc app=leetcode.cn id=3 lang=javascript
 * @lcpr version=20003
 *
 * [3] 无重复字符的最长子串
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // 1. 滑动窗口
  //   const n = s.length;
  //   const set = new Set();
  //   let res = 0;
  //   let i = 0;
  //   let j = 0;
  //   while (i < n && j < n) {
  //     if (!set.has(s[j])) {
  //       set.add(s[j++]);
  //       res = Math.max(res, j - i);
  //     } else {
  //       set.delete(s[i++]);
  //     }
  //   }
  //   return res;
};
// @lc code=end

/*
// @lcpr case=start
// "abcabcbb"\n
// @lcpr case=end

// @lcpr case=start
// "bbbbb"\n
// @lcpr case=end

// @lcpr case=start
// "pwwkew"\n
// @lcpr case=end
/*
// @lcpr case=start
// "au"\n
// @lcpr case=end
 */
