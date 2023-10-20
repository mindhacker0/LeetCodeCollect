//378. 有序矩阵中第 K 小的元素
//给你一个 n x n 矩阵 matrix ，其中每行和每列元素均按升序排序，找到矩阵中第 k 小的元素。
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
function swap(arr,x,y,x1,y1){
    let temp = arr[x][y];
    arr[x][y] = arr[x1][y1];
    
}
function TreeNode(val,pos){
    this.val = val;
    this.pos = pos;
    this.left = null;
    this.right = null;
}
var kthSmallest = function(matrix, k) {//类比堆的弹出操作
    let m = matrix.length,n = matrix[0].length;
    const dir = [[1,0],[0,1]];
    const root = new TreeNode(matrix[0][0],[0,0])
    const queue = [[0,0,root]];
    let index = 0;
    const visit = new Array(m*n).fill(0);
    visit[0] = 1;
    while(index<queue.length){
        let pos = queue[index++];
        if(pos){
           let [x,y,parent] = pos;
           for(let i=0;i<dir.length;++i){
                let dx = x+dir[i][0],dy = y+dir[i][1];
                if(dx<0||dx>=m||dy<0||dy>=n) continue;
                if(visit[dx*n+dy]) queue.push(null);
                else{
                   let node = new TreeNode(matrix[dx][dy],[dx,dy]);
                   if(parent.left) parent.right = node;
                   else parent.left = node;
                   queue.push([dx,dy,node]);
                }
                visit[dx*n+dy] = 1;
            }
            if(parent.right && parent.left.val>parent.right.val){
                let temp = parent.right;
                parent.right = parent.left;
                parent.left = temp;
            }
        }
    }
    console.log(root)
    // function take(){
    //   let elem = matrix[0][0];
    //   matrix[0][0] = matrix[Math.floor(last/n)][last%n];
    //   let start = [0,0];
    //   while(start[0]*){}
    // }
};
function swap(arr,i,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
class HeapNode{
    constructor(val,pos){
        this.val = val;
        this.pos = pos;
    }
}
class MinHeap{
    constructor(){
        this.root = [null];
    }
    offer(node){
       this.root.push(node);
       this.heapfyUp();
    }
    poll(){
        let elem = null;
        if(this.root.length>1){
            swap(this.root,1,this.root.length-1);
            elem = this.root.pop();
            this.heapfyDown();
        }
        return elem;
    }
    heapfyUp(){
        let start = this.root.length -1,end = 1;
        while(start>end){
            let parent = start>>1;
            if(this.root[parent].val>this.root[start].val) swap(this.root,start,parent);
            start = parent;
        }
    }
    heapfyDown(){
        let start = 1,end = this.root.length-1;
        while((start<<1)<=end){
            let left = start<<1,right = left+1;
            let next = (right>end||this.root[left].val<this.root[right].val)?left:right;
            if(this.root[next].val<this.root[start].val) swap(this.root,start,next);
            start = next;
        }
    }
}
var kthSmallest = function(matrix, k) {// 归并法
    let m = matrix.length,n = matrix[0].length;
    let mh = new MinHeap;
    for(let i=0;i<m;++i){
       mh.offer(new HeapNode(matrix[i][0],[i,0]));
    }
    let elem = null;
    for(let i=0;i<k;++i){
        elem = mh.poll();
        const {pos:[x,y]} = elem;
        if(y<n-1){
            mh.offer(new HeapNode(matrix[x][y+1],[x,y+1]));
        }
    }
    return elem?.val;
}
var kthSmallest = function(matrix, k) {//二分法
    let m = matrix.length,n = matrix[0].length;
    let left = matrix[0][0],right = matrix[m-1][n-1];//矩阵数值范围
    while(left<right){//二分寻找每个数的对应

    }

}
console.log(kthSmallest([
    [ 1, 5, 9],
    [10,11,13],
    [12,13,15]
],8));
console.log(kthSmallest([
    [ 1, 4, 7,11,15],
    [ 2, 5, 8,12,19],
    [ 3, 6, 9,16,22],
    [10,13,14,17,24],
    [18,21,23,26,30]
],5));