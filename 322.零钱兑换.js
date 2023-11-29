/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let memo = new Array(amount + 1).fill(-666);
    function dp(coins, amount) {
        if (amount == 0) return 0;
        if (amount < 0) return -1;
        // 查备忘录，防止重复计算
        if (memo[amount] != -666){
            return memo[amount];
        }
        let res = Number.MAX_SAFE_INTEGER
        for(let coin of coins){
            let subproblem = dp(coins, amount - coin);
            if(subproblem == -1) continue;
            res = Math.min(res, 1 + subproblem);
        }
        // 记入备忘录
        memo[amount] = res != Number.MAX_SAFE_INTEGER ? res : -1;
        return memo[amount];
    
    }
    return dp(coins, amount);
};

// @lc code=end

