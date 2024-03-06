/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
// 输入：matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
// 输出：4
var maximalSquare = function (matrix) {
  let h = matrix.length;
  let w = matrix[0].length;
  let pointMap = {};
  let maxSq = 0;
//   function dp(matrixArr, x, y) {
//     if (
//       matrixArr[x + 1][y] == 1 &&
//       matrixArr[x][y + 1] == 1 &&
//       matrixArr[x + 1][y + 1] == 1
//     ) {
//       //   pointMap[String(x + 1) + String(y)] = true;
//       //   pointMap[String(x) + String(y + 1)] = true;
//       //   pointMap[String(x + 1) + String(y + 1)] = true;
//       return 1 + dp(matrixArr, x + 1, y + 1);
//     }
//     return 0;
//   }
  for (let i = 0; i < h; i++) {
    for (let n = 0; i < w; n++) {
    //   if (matrix[i][n] == 1) {
        //该点没有访问过
        // let sq = 1;
        // pointMap[String(i) + String(n)] = true;
        // let maxSq = Math.max(maxSq, sq + dp(matrix, i, n));
    //   }
    }
  }
  return w;
};
// @lc code=end
