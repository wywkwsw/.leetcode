/*
 * @lc app=leetcode.cn id=771 lang=javascript
 *
 * [771] 宝石与石头
 */

// @lc code=start
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count = 0
    if(!stones) return count
    const newStones = stones.split('')
    const newJewels = jewels.split('')
    newStones.map(v => {
        if(newJewels.find(m => m == v)){
            count++
        }
    })
    return count
};
// @lc code=end

