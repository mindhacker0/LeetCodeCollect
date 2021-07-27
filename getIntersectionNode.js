/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    let newHead = headB;
    while(headA){
        newHead = headB;
        while(newHead){
            if(headA === newHead){
                return `Reference of the node with value = ${headA.val}`;
            }
            newHead= newHead.next;
        }
        headA = headA.next;
    }
    return null;
};
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
let linkn = new ListNode(8,null);
let headn = linkn;
headn.next = new ListNode(4,null);
headn= headn.next;
headn.next = new ListNode(5,null);
headn= headn.next;

let linka = new ListNode(4,null);
let heada = linka;
heada.next = new ListNode(1,null);
heada= heada.next;

let linkb = new ListNode(5,null);
let headb = linkb;
headb.next = new ListNode(0,null);
headb= headb.next;
headb.next = new ListNode(1,null);
headb= headb.next;

heada.next = linkn;
headb.next = linkn;

console.log(linka,linkb);
console.log(getIntersectionNode(linka,linkb));