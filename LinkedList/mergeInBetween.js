//1669. 合并两个链表
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    function findIndex(node,index){
        if((typeof index === "undefined"&&node.next === null)||(index == 0||node === null)) return node;
        return findIndex(node.next,typeof index === "undefined"?index:index-1);
    }
    let head = findIndex(list1,a-1);
    let tail = findIndex(list1,b+1);
    let append = findIndex(list2);
    head.next = list2;
    append.next= tail;
    return list1;
};
