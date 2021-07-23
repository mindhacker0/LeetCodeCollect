//Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
const ListEntity = require("./makeListFromArray");
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
*/
var getKthFromEnd = function(head, k) {
    let arr = [];
    while(head!==null){
        arr.push(head);
        head = head.next;
    }
    return arr[arr.length-k]
};
let l1 = ListEntity.makeListFromArray([1,2,3,4,5]);
console.log(getKthFromEnd(l1,2))