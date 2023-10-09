/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var detectCycle = function(head) {
//     let fast = slow = head
//     let keep1 = 0,keep2 = 0,deep=0,count = 0
//     while(!fast && !fast.next) {
//         fast = fast.next.next
//         slow = slow.next
//         deep++
//         if(slow == fast) {
//             if(count === 0) {
//                 keep1 = deep+1
//                 deep=0
//                 count = 1
//             }else {
//                 keep2 = deep+1
//                 return keep1 - keep2
//             }
//         }
//     }
//     return null
// };
var detectCycle = function (head) {
    let fast = slow = head
    
    // !fast && !fast.next 此判断条件会导致结果错误
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next
        slow = slow.next
        if (fast === slow) {
            break;
        }
    }
    if (fast === null || fast.next === null) {
        return null
    }
    slow = head
    while (slow !== fast) {
        slow = slow.next
        fast = fast.next

    }
    return slow;
}

// @lc code=end

