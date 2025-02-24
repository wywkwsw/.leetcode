/*
 * @lc app=leetcode.cn id=11 lang=javascript
 * @lcpr version=30005
 *
 * [11] 盛最多水的容器
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let len = height.length;
  let left = 0;
  let right = len - 1;
  let max = 0;
  while (left < right) {
    let area = (right - left) * Math.min(height[left], height[right]);
    max = Math.max(max, area);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
};
// @lc code=end

/*
// @lcpr case=start
// [1,8,6,2,5,4,8,3,7]\n
// @lcpr case=end

// @lcpr case=start
// [1,1]\n
// @lcpr case=end

 */
