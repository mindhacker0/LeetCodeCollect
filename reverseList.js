function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
function GenerateLink(list){
  let head = Object.create(null);
  let node = Object.create(null);
  for(let i=0;i<list.length;i++){
      if(i===0){
        head = new ListNode(list[i],null);
        node = head;
      }else{
        node.next = new ListNode(list[i],null);
        node = node.next;
      }
  }
  return head;
}
/**
* @param {ListNode} head
* @return {ListNode}
*/
var reverseList = function(head) {
    let tail = null;
    let shead = null;
    while(head){
        shead = new ListNode(head.val,null);
        if(tail){
            shead.next = tail;
        }
        tail = shead;
        head = head.next;
    }
    console.log(shead);
    return shead;
};
console.log(reverseList(GenerateLink([1,2,3,4,5])))