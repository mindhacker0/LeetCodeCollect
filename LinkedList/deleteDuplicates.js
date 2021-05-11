//Definition for singly-linked list.
function ListNode(val, next) {
   this.val = (val===undefined ? 0 : val)
   this.next = (next===undefined ? null : next)
}
/**
* @param {ListNode} head
* @return {ListNode}
*/
var deleteDuplicates = function(head) {
    let node = head,prev = {};
    while(node!==null){
        if(prev.val === node.val){
            prev.next = node.next;
            node = prev;
        }
        prev = node;
        node = node.next;
        console.log(prev);
    }
    return head;
};
let testLink = new ListNode(1,null);
let node = testLink;
node.next = new ListNode(1,null);
node = node.next;
node.next = new ListNode(1,null);
node = node.next;
console.log(deleteDuplicates(testLink))