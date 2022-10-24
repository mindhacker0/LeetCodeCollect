//817. 链表组件
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} nums
 * @return {number}
*/
var numComponents = function(head, nums) {
    let count = 0;
    let ans = 0;
    let numSet = new Set;
    nums.forEach((val)=>numSet.add(val));
    while(head){
        if(numSet.has(head.val)){count++;}
        else{
            if(count!==0) ans++;
            count = 0;
        }
        numSet.delete(head.val);
        head = head.next;
    }
    if(count!==0) ans++;
    return ans;
};