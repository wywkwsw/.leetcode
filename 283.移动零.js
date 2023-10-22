/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var removeElement = function(nums, val) {
    var i = 0;
    for (var j = 0; j < nums.length; j++) {
        if (nums[j] !== val) {
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
};

var moveZeroes = function(nums) {
    // 去除 nums 中的所有 0，返回不含 0 的数组长度
    var p = removeElement(nums, 0);
    // 将 nums[p..] 的元素赋值为 0
    for (p; p < nums.length; p++) {
        nums[p] = 0;
    }
};
// @lc code=end

