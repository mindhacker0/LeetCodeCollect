//复杂链表的复制
function ListNode(val, next, random) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
    this.random = (random === undefined ? null : random);
}
/**
 * @param {Node} head
 * @return {Node}
*/
var copyRandomList = function (head) {
    if(head===null) return null;
    let root = new ListNode(head.val, null, null);
    let visit = new Set;
    let map = new Map;
    map.set(head,root);
    function tranverse(sroot,cnode) {
        if(visit.has(sroot)) return;
        visit.add(sroot);
        if(sroot.next!==null){
            let node = map.get(sroot.next);
            if(!node){
                node = new ListNode(sroot.next.val);
                map.set(sroot.next,node);
            }
            cnode.next = node;
            tranverse(sroot.next,cnode.next);
        }
        if(sroot.random!==null){
            let node = map.get(sroot.random);
            if(!node){
                node = new ListNode(sroot.random.val);
                map.set(sroot.random,node);
            }
            cnode.random = node;
            tranverse(sroot.random,cnode.random);
        }
    }
    tranverse(head,root);
    return root;
};