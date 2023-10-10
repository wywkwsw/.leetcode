/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
     if (head === null) return null;
    let p1 = head
    let p2 = head
    while(p2 != null) {
        if(p1.val != p2.val) {
            p1.next = p2
            p1 = p1.next
        }
       p2 = p2.next
    }
    p1.next = null
    return head
};
// @lc code=end

