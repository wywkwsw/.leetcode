/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  var m = obstacleGrid.length; // 行数
  var n = obstacleGrid[0].length; // 列数
  var memo = new Array(m); // 创建大小为 m 的一维数组
  for (var i = 0; i < m; i++) {
    memo[i] = new Array(n).fill(0); // 依次创建每一行的大小为 n 的二维数组，并初始化为 0
  }
  return dp(obstacleGrid, m - 1, n - 1); // 返回到达目标格子的路径条数

  function dp(grid, i, j) {
    // 递归函数，记录从起点到达 grid[i][j] 的路径条数
    if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] == 1) {
      // 如果当前格子越界或者是障碍物，返回 0
      return 0;
    }
    if (i == 0 && j == 0) {
      // 如果到达起点，返回 1
      return 1;
    }
    if (memo[i][j] > 0) {
      // 如果已经计算过了，直接返回结果
      return memo[i][j];
    }
    var left = dp(grid, i, j - 1); // 从左边走到达 grid[i][j] 的路径条数
    var upper = dp(grid, i - 1, j); // 从上面走到达 grid[i][j] 的路径条数
    var res = left + upper; // 到达 grid[i][j] 的路径条数等于上面和左边的路径条数之和
    memo[i][j] = res; // 存储结果到备忘录中
    return res; // 返回结果
  }
};
// @lc code=end
