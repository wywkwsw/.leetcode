/*
 * @lc app=leetcode.cn id=6 lang=javascript
 * @lcpr version=30005
 *
 * [6] Z 字形变换
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  let len = s.length;
  if (numRows === 1) return s;
  let res = new Array(numRows).fill("");
  let i = 0;
  let flag = -1;
  for (let c of s) {
    res[i] += c;
    if (i === 0 || i === numRows - 1) flag = -flag;
    i += flag;
  }
  return res.join("");
};
// @lc code=end

/*
// @lcpr case=start
// "PAYPALISHIRING"\n3\n
// @lcpr case=end

// @lcpr case=start
// "PAYPALISHIRING"\n4\n
// @lcpr case=end

// @lcpr case=start
// "A"\n1\n
// @lcpr case=end

 */
