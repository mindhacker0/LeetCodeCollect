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
export {GenerateLink}