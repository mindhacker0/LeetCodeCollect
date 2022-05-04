//23. 合并K个升序链表
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
class BinTreeHeap{//最小二叉堆
    constructor(){//使用一维数组存储堆数据
        this.cache = [null];
    }
    insert(elem){//插入新元素
        this.cache.push(elem);
        let index = this.cache.length-1;
        while(index>1 && this.cache[index]<this.cache[~~(index/2)]){
            let parent = ~~(index/2);
            this.cache[index]^=this.cache[parent];
            this.cache[parent]^=this.cache[index];
            this.cache[index]^=this.cache[parent];
            index = parent;
        }
    }
    extract(){//取出堆顶
        if(this.cache.length<2) return null;
        //交换堆头和堆尾，然后取出堆尾
        let start = 1,end = this.cache.length-1;
        if(this.cache.length>2){
            this.cache[start]^=this.cache[end];
            this.cache[end]^=this.cache[start];
            this.cache[start]^=this.cache[end];
        }
        let taken = this.cache.pop();
        //调整堆头，找到正确的位置
        while(start<this.cache.length){
            let left = start*2,right = start*2+1;
            let next;
            if(right < this.cache.length){
                next = this.cache[left]<this.cache[right]?left:right;
            }else{
                next = left;
            }
            if(this.cache[start]>this.cache[next]){
                let temp = this.cache[start];
                this.cache[start]=this.cache[next];
                this.cache[next]=temp;
                start = next;
            }else{
                break;
            }
        }
        return taken;
    }
}
var mergeKLists = function(lists) {//二叉堆做法n*logn
    let heap = new BinTreeHeap();
    for(let i=0;i<lists.length;i++){
        let link = lists[i];
        while(link!==null){
            heap.insert(link.val);
            link = link.next;
        } 
    }
    let head = null;
    let node = null;
    while(heap.cache.length>1){
        let elem = heap.extract();
        let link = new ListNode(elem);
        if(head === null){
            head = link;
            node = head;
        }else{
            node.next = link;
            node = node.next;
        }
    }
    return head;
};
var mergeKLists = function(lists) {//分治法合并，类似归并排序(这里用递归，因为写起来简单)
    if(!lists.length) return null;
    if(lists.length === 1) return lists[0];//1个不需要合并
    var mergeTwoLists = function(l1, l2) {
        let root = new ListNode();
        let node = root;
        while(l1||l2){
            if((l1 && l2 && l1.val < l2.val)||!l2){
                node.next = l1;
                l1 = l1.next;
            }else{
                node.next = l2;
                l2 = l2.next;
            }
            node = node.next;
        }
        return root.next;
    };
    function recursion(start,end){
        if(start === end) return lists[start];
        let middle = (start+end)>>1;
        return mergeTwoLists(recursion(start,middle),recursion(middle+1,end))
    }
    return recursion(0,lists.length-1);
};
console.log(mergeKLists([]));
console.log(mergeKLists([[]]));
console.log(mergeKLists([[1,4,5],[1,3,4],[2,6]]));