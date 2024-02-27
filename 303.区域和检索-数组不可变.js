/*
 * @lc app=leetcode.cn id=303 lang=javascript
 *
 * [303] 区域和检索 - 数组不可变
 */

var NumArray = function (nums) {
  // constructor
  this.nums = nums;

  // method to sum over range
  this.sumRange = function (left, right) {
    var sum = 0;
    for (var i = left; i <= right; i++) {
      sum += nums[i];
    }
    return sum;
  };

  /* 查询闭区间 [left, right] 的累加和 */
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end
