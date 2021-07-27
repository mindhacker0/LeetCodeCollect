// Definition for singly-linked list.
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2){
    let result = Object.create(null);
    let node =  2;
    let val;
    while(l1!==null || l2 !==null){
       if(l1!==null && l2 !==null){
            if(l1.val>l2.val){
                val = l2.val;
                l2 = l2.next;
            }else{
                val = l1.val;
                l1 = l1.next;
            }
       }else{
            if(l1 === null){
                val = l2.val;
                l2 = l2.next;
            }else{
                val = l1.val;
                l1 = l1.next;
            }
       }
       console.log(val);
       if(node === 2){
            result = new ListNode(val,null);
            node = result;
       }else{
            node.next = new ListNode(val,null);
            node = node.next;
       }
    }
    console.log(result);
    return result;
};
let link1 = GenerateLink([1,3,5]);
let link2 = GenerateLink([2,4,6]);
console.log(mergeTwoLists(null,null));
