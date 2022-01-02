//const ListEntity = require("./makeListFromArray");
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
*/
var mergeTwoLists = function(l1, l2) {
    let root = new ListNode("$");
    let node = root;
    while(l1!==null || l2!==null){
        if(l1 === null){
            node.next = new ListNode(l2.val);
            l2 = l2.next;
        }else if(l2 === null){
            node.next = new ListNode(l1.val);
            l1 = l1.next;
        }else if(l1.val < l2.val){
            node.next = new ListNode(l1.val);
            l1 = l1.next;
        }else{
            node.next = new ListNode(l2.val);
            l2 = l2.next;
        }
        //console.log(ListEntity.getArrayFromList(root));
        node = node.next;
    }
    return root.next;
};

// let l1 = ListEntity.makeListFromArray([-9,3]);
// let l2 = ListEntity.makeListFromArray([5,7]);
// console.log(mergeTwoLists(l1,l2));