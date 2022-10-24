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
    let node = head;
    let prev = new ListNode();
    prev.next = head;
    while(node){
        while(node.next && node.next.val === node.val){
           node = node.next;
        }
        if(node!==prev.next){
            console.log(prev.next,head);
            if(prev.next===head){head = node.next;prev = node;}
            else prev.next = node.next;
            node = node.next;
        }else{
            prev = node;
            node = node.next;
        }
    }
    return head;
};
var deleteDuplicates = function(head) {//递归
    if(head===null||head.next===null) return head;
    if(head.val!==head.next.val){head.next = deleteDuplicates(head.next); return head;}
    while(head.next && head.val===head.next.val) head = head.next;
    return deleteDuplicates(head.next);
}
let testLink = new ListNode(1,null);
let node = testLink;
node.next = new ListNode(1,null);
node = node.next;
node.next = new ListNode(1,null);
node = node.next;
console.log(deleteDuplicates(testLink))