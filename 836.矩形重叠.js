/*
 * @lc app=leetcode.cn id=836 lang=javascript
 *
 * [836] 矩形重叠
 */

// @lc code=start
/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function (rec1, rec2) {
  let newRec = [
    Math.max(rec1[0], rec2[0]),
    Math.max(rec1[1], rec2[1]),
    Math.min(rec1[2], rec2[2]),
    Math.min(rec1[3], rec2[3]),
  ];
  return (
    newRec[2] - newRec[0] > 0 &&
    newRec[3] - newRec[1] > 0 &&
    (newRec[2] - newRec[0]) * (newRec[3] - newRec[1]) <
      Math.max(
        Math.abs(rec1[2] - rec1[0]) * Math.abs(rec1[3] - rec1[1]),
        Math.abs(rec2[2] - rec2[0]) * Math.abs(rec2[3] - rec2[1])
      )
  );
};
// @lc code=end
