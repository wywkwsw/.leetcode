/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let left = 0, right = numbers.length - 1
    while (numbers[left] + numbers[right] != target) {
        if (numbers[left] + numbers[right] > target) {
            right--
        } else {
            left++
        }
    }
    return [left+1, right+1]
};
// @lc code=end

