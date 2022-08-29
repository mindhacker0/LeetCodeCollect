/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
*/
var reversePrint = function(head) {
    let queue = [];
    function tranverse(node){
        if(node === null) return;
        queue.unshift(node.val);
        node = node.next;
        tranverse(node);
    }
    tranverse(head);
    return queue;
};