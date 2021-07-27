// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} head
 * @return {number}
 */
 var getDecimalValue = function(head) {
    console.log(head);
    let str = "";
    var node =head;
    while(1){
        str+=node.val;
        if(node.next === null){
            break;
        }else{
            node = node.next;
        }
    }
   return parseInt(str,2);
};
var tree = new ListNode(1);
var head = tree;
tree.next =new ListNode(0);
tree = tree.next;
tree.next =new ListNode(1);
console.log(getDecimalValue(head));