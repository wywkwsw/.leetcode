/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并 K 个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 * 归并解决
 */
var mergeKLists = function(lists) {
    if(!lists.length) return null; // 空的直接返回，不然 lists.length 是负数
    return mergeList(lists, 0, lists.length - 1);
};
//分割
function mergeList(lists, start, end) {
    if(start === end) { //说明分割两边只有一个,停止分割
        return lists[start];
    }
    const mid = Math.floor((start + end)/2)
    const leftList = mergeList(lists, start, mid);
    const rightList = mergeList(lists, mid + 1, end);
    return merge(leftList, rightList); // 进行合并
}
//合并
function merge(head1, head2) {
    let newHead = new ListNode(-1), p = newHead;
    while(head1 && head2) {
        if(head1.val <= head2.val) {
            p.next = head1;
            head1 = head1.next;
        } else {
            p.next = head2;
            head2 = head2.next;
        }
        p = p.next;
    }
    // 没遍历完的接上即可
    p.next = head1 ? head1 : head2;
    return newHead.next;
}
// @lc code=end

