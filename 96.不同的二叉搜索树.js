/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    let dp = new Array(n+1).fill(0).map(() => new Array(n+1).fill(0));
    function count(left,right) {
        if(left > right) return 1;
        if(dp[left][right] !== 0) return dp[left][right];
        let res = 0;
        for(let i = left; i <= right; i++) {
            let leftCount = count(left, i-1);
            let rightCount = count(i+1, right);
            res += leftCount * rightCount;
        }
        dp[left][right] = res;
        return res
    }
    return count(1,n);
};
// @lc code=end

