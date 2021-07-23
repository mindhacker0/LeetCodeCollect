//Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
const ListEntity = require("./makeListFromArray");
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
*/
// 返回新的链表
// var deleteNode = function(head, val) {
//     let root = null,newNode = null;
//     while(head!==null){
//         if(head.val !== val){
//             if(root === null){ 
//                 root = new ListNode(head.val);
//                 newNode = root;
//             }else{
//                 newNode.next = new ListNode(head.val);
//                 newNode = newNode.next;
//             }
//         }
//         head = head.next;
//     }
//     return root;
// };
//更改原来的链表
var deleteNode = function(head, val) {
    let root = head,preNode = null;
    while(head!==null){
        if(head.val === val){
            if(preNode === null){
                root = head.next;
            }else{
                preNode.next = head.next;
                head = preNode;
            }
        }else{
            preNode = head;
        }
        head = head.next;
    }
    return root;
};
let l1 = ListEntity.makeListFromArray([2,5,4,1]);
console.log(deleteNode(l1,5));