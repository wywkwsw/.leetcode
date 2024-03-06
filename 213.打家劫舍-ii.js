/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  function getlarge(nums) {
    let n = nums.length;
    let small = 0;
    let large = 0;
    let res = 0;
    for (let i = 0; i < n; i++) {
      res = Math.max(large, small + nums[i]);
      small = large;
      large = res;
    }
    return large;
  }
  if(nums.length < 2) return nums[0]
  return Math.max(
    getlarge(nums.slice(0, nums.length - 1)), getlarge(nums.slice(1))
  );
};
// @lc code=end
