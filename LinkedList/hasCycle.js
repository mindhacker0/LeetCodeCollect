function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
* @param {ListNode} head
* @return {boolean}
*/
// var hasCycle = function(head) {
//     let map = new Map();
//     let node = head;
//     while(node!==null){
//         if(map.get(node)){
//             return true;
//         }
//         map.set(node,true);
//         node = node.next;
//     }
//     return false;
// };
var hasCycle = function(head) {//龟兔赛跑原理
    let fast = head;
    let slow = head;
    if(head === null) return false;
    do{
      slow = slow.next;
      fast = fast.next;
      if(fast!==null){
        fast = fast.next;
        if(slow === fast) return true;
      }
    }while(fast!==null);
    return false;
};
