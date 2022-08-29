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
var reverseList = function(head) {
  if(head===null||head.next===null) return head;
  let tail = null;
  let next = head;
  while(head){
    head = head.next;
    next.next = tail;
    tail = next;
    next = head;
  }
  return tail;
};
console.log(reverseList(GenerateLink([1,2,3,4,5])))