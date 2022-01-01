//Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
const ListEntity = require("./makeListFromArray");
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
    let set = new Set;
    for(;;){
        if(head===null){break;}
        if(set.has(head)){
            return head
        }
        set.add(head);
        head = head.next;
    }
    console.log(set);
    return null;
};
let l1 = ListEntity.makeListFromArray([-1,-7,7,-4,19,6,-9,-5,-2,-5]);
console.log(detectCycle(l1));