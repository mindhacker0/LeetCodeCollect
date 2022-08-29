//662. 二叉树最大宽度
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// class Maxheap{//大根堆
//     constructor(){
//         this.heap = [null];
//         this.size = 0;
//     }
//     swap(i,j){
//         let temp = this.heap[i];
//         this.heap[i] = this.heap[j];
//         this.heap[j] = temp;
//     }
//     insert(val){
//         this.heap.push(val);
//         this.size++;
//         this.heapfiyUp();
//     }
//     take(){
//         if(this.size<=0) return null;
//         let start = 1,end = this.size;
//         if(end>start) this.swap(start,end);
//         let item = this.heap.pop();
//         this.size--;
//         this.heapfiyDown();
//         return item;
//     }
//     heapfiyUp(){
//         let index = this.size;
//         while(index>1 && this.heap[index>>1]<this.heap[index]){this.swap(index,index>>1);index>>=1;}
//     }
//     heapfiyDown(){
//         let index = 1;
//         while((index>>1)<=this.size){
//             let left = index<<1,right = left+1;
//             let next = this.heap[right]>this.heap[left]?right:left;
//             if(this.heap[next]>this.heap[index]){
//                 this.swap(next,index);
//                 index = next;
//             }else break;
//         }
//     }
// }
var widthOfBinaryTree = function(root) {//32.55%
    let arr = [];
    function tranverse(node,index,level){
        if(node === null) return;
        if(typeof arr[level] === "undefined") arr[level] = [];
        arr[level].push(index);
        tranverse(node.left,(index*2)%Number.MAX_SAFE_INTEGER,level+1);
        tranverse(node.right,(index*2+1)%Number.MAX_SAFE_INTEGER,level+1);
    }
    tranverse(root,1,0);
    let result = -1;
    for(let i=0;i<arr.length;i++){
        let level = arr[i];
        result = Math.max(result,level[level.length-1]-level[0]+1);
    }
    return result;
};
var widthOfBinaryTree = function(root) {//32.55%
    let arr = [];
    function tranverse(node,index,level){
        if(node === null) return;
        if(typeof arr[level] === "undefined") arr[level] = index;
        return Math.max.call(null,arr[level]-index,tranverse(node.left,(index*2)%Number.MAX_SAFE_INTEGER,level+1),tranverse(node.right,(index*2+1)%Number.MAX_SAFE_INTEGER,level+1));
    }
    return tranverse(root,1,0);
}