function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
function makeListFromArray(arr){//通过数组创建链表
    let root = null;
    let node = null;
    for(var i=0;i<arr.length;i++){
        if(i === 0){
            root = new ListNode(arr[i]);
            node = root;
        }else{
            node.next = new ListNode(arr[i]);
            node = node.next;
        }
    }
    return root;
}
function getArrayFromList(root){//链表转为数组
    let arr = [];
    let node = root;
    while(node!=null){
        arr.push(node.val);
        node = node.next;
    }
    return arr;
}
module.exports = {
    makeListFromArray,
    getArrayFromList
}