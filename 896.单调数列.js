/*
 * @lc app=leetcode.cn id=896 lang=javascript
 *
 * [896] 单调数列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  let isBoolean = true;
  if (nums.length == 1) return isBoolean;
  if (nums.length > 1) {
    for (let i = 0;  i <= nums.length - 2;i++) {
      if (nums[0] - nums[nums.length - 1] > 0) {
        //递减
        if (nums[i] - nums[i + 1] < 0) {
          isBoolean = false;
          break;
        }
      }
      if (nums[0] - nums[nums.length - 1] < 0) {
        //递减
        if (nums[i] - nums[i + 1] > 0) {
          isBoolean = false;
          break;
        }
      }
      if(nums[0] - nums[nums.length - 1] == 0){
        if (nums[i] - nums[i + 1] != 0) {
            isBoolean = false;
            break;
          }
      }
    }
  }
  return isBoolean;
};
// @lc code=end
