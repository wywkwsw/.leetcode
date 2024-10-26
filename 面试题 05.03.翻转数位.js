/*
 * @lc app=leetcode.cn id=面试题 05.03 lang=javascript
 * @lcpr version=20002
 *
 * [面试题 05.03] 翻转数位
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
//给定一个32位整数 num，你可以将一个数位从0变为1。请编写一个程序，找出你能够获得的最长的一串1的长度。
var reverseBits = function (num) {
  let max = 0;
  let pre = 0;
  let cur = 0;
  while (num !== 0) {
    if ((num & 1) === 1) {
      cur++;
    } else {
      pre = (num & 2) === 0 ? 0 : cur;
      cur = 0;
    }
    max = Math.max(max, pre + cur + 1);
    num >>>= 1;
  }
  return max;
};
// @lc code=end

/*
// @lcpr case=start
// 1775(110111011112)\n
// @lcpr case=end

// @lcpr case=start
// 7(01112)\n
// @lcpr case=end

 */
