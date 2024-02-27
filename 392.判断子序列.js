/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  //两个指针做法
  let sArr = s.split("");
  let tArr = t.split("");
  let sIndex = 0;
  if (tArr.length < sArr.length) {
    return false;
  }
  for (let i = 0; i < tArr.length; i++) {
    if (tArr[i] === sArr[sIndex]) {
      //数据匹配
      sIndex++;
    }
  }
  return sIndex === sArr.length;
};
// @lc code=end
