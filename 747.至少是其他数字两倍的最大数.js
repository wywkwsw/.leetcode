/*
 * @lc app=leetcode.cn id=747 lang=javascript
 *
 * [747] 至少是其他数字两倍的最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  if (nums.length < 2) return -1;
  let newNums = nums.toSorted((a, b) => b - a); //从大到小排序
  if (newNums[0] >= 2 * newNums[1]) {
    return nums.indexOf(newNums[0]);
  }
  return -1;
};
// @lc code=end
