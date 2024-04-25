/*
 * @lc app=leetcode.cn id=784 lang=javascript
 *
 * [784] 字母大小写全排列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
  let res = [];
  function dfs(s, i, path) {
    if (i === s.length) {
      res.push(path);
      return;
    }
    if (s[i] >= "0" && s[i] <= "9") {
      dfs(s, i + 1, path + s[i]);
    } else {
      dfs(s, i + 1, path + s[i].toLowerCase());
      dfs(s, i + 1, path + s[i].toUpperCase());
    }
  }
  dfs(s, 0, "");
  return res;
};
function letterCasePermutation(s) {
  let queue = [s];
  for (let i = 0; i < s.length; i++) {
    if (isNaN(parseInt(s[i]))) {
      let len = queue.length;
      for (let j = 0; j < len; j++) {
        let str = queue.shift();
        queue.push(changeCase(str, i, true));
        queue.push(changeCase(str, i, false));
      }
    }
  }
  return queue;
}

function changeCase(s, index, isUpper) {
  let arr = s.split("");
  arr[index] = isUpper ? arr[index].toUpperCase() : arr[index].toLowerCase();
  return arr.join("");
}
// @lc code=end
