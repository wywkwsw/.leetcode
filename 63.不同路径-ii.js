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
var uniquePathsWithObstacles = function(obstacleGrid) {
 let dp = JSON.parse(JSON.stringify(obstacleGrid))
 let m = dp.length
 let n = dp[0].length
 if()
 for(let i = 0 ;i < m ;i++){
    for(let k = 0;k< n ;k++){
        if(obstacleGrid[i][k] === 1){ //该点为障碍物
            dp[i][k] = 0
        }else {
            if(i === 0 || k === 0) {
                dp[i][k] = 1
            }else {
                dp[i][k] = dp[i-1][k]+dp[i][k-1]
            }
        }
    }
 }
 return dp[m-1][n-1]
};
// @lc code=end

