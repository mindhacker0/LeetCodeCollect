//25. K 个一组翻转链表
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
const ListEntity = require("./makeListFromArray");
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let result = null;
    let cur = null;
    while(head!==null){
        let [rlist,end] = reverseList(head,k);
        if(result === null){
            result = rlist;
            cur = result;
        }else{
            cur.next = rlist;
        }
        while(cur.next){
            cur = cur.next;
        }
        head = end;
    }
    console.log(ListEntity.getArrayFromList(result));
    function reverseList(start,len){//翻转
        let tail = null;
        let shead = null;
        let set = new Set;
        set.add(start);
        let count = 0;
        while(count++<len){
            if(start === null) return [Array.from(set)[0],null];
            shead = new ListNode(start.val,null);
            if(tail){
                shead.next = tail;
            }
            tail = shead;
            start = start.next;
        }
        console.log(shead);
        return [shead,start];
    };
    return result;
};
let l1 = ListEntity.makeListFromArray([1,2,3,4,5]);
reverseKGroup(l1,2);