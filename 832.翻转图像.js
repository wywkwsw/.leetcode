/*
 * @lc app=leetcode.cn id=832 lang=javascript
 *
 * [832] 翻转图像
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  const newImage = image.map((v) => v.reverse());
  console.log('newImage',newImage)
  return newImage.map((v) => {
    return v.map((m) => {
      if (m == 1) {
        return 0;
      } else {
        return 1
      }
    });
  });
};
// @lc code=end
