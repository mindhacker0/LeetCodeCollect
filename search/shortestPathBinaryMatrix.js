//1091. 二进制矩阵中的最短路径
/**
 * @param {number[][]} grid
 * @return {number}
 */
// var shortestPathBinaryMatrix = function(grid) {//普通的bfs(击败7%)
//     let m = grid.length;
//     let n = grid[0].length;
//     let dx = [-1,-1,-1,0,0,1,1,1];
//     let dy = [-1,0,1,-1,1,-1,0,1];
//     let ans = 10e7;
//     let queue = [];
//     let visit = new Array(m*n).fill(0);
//     queue.push([0,0,0]);
//     while(queue.length){
//         let [x,y,level] = queue.shift();
//         if(x<0||x>=m||y<0||y>=n) continue;
//         if(visit[x*m+y]||grid[x][y]===1) continue;
//         if(x === m-1 && y=== n-1) ans = Math.min(ans,level+1);
//         for(let i=0;i<8;i++){
//             let nx = x+dx[i],ny = y+dy[i];
//             queue.push([nx,ny,level+1]);
//         }
//         visit[x*m+y] = 1;
//         //console.log(queue);
//     }
//     return ans === 10e7?-1:ans;
// };
// var shortestPathBinaryMatrix = function(grid) {//双向bfs(击败55%)
//     let m = grid.length;
//     let n = grid[0].length;
//     let dx = [-1,-1,-1,0,0,1,1,1];
//     let dy = [-1,0,1,-1,1,-1,0,1];
//     let ans = 10e7;
//     let sQueue = [],eQueue = [];
//     let svisit = new Array(m*n).fill(0);
//     let evisit = new Array(m*n).fill(0);
//     sQueue.push([0,0,1]);
//     svisit[0] = 1;
//     eQueue.push([m-1,n-1,1]);
//     evisit[m*n-1] = 1;
//     while(sQueue.length||eQueue.length){
//         let queue=sQueue,visit=svisit;
//         if((eQueue.length && eQueue.length<sQueue.length) || (sQueue.length===0)){
//             queue = eQueue;
//             visit = evisit;
//         }
//         let [x,y,level] = queue.shift();
//         if(x<0||x>=m||y<0||y>=n) continue;
//         if(grid[x][y]===1) continue;
//         if(svisit[x*m+y] && evisit[x*m+y]){
//             //console.log(x,y,svisit,evisit);
//             ans = Math.min(ans,svisit[x*m+y]+evisit[x*m+y]-1);
//             break;
//         } 
//         for(let i=0;i<8;i++){
//             let nx = x+dx[i],ny = y+dy[i];
//             if(visit[nx*m+ny]) continue;
//             if(nx<0||nx>=m||ny<0||ny>=n||grid[nx][ny]===1) continue;
//             queue.push([nx,ny,level+1]);
//             visit[nx*m+ny] = level+1;
//         }
//         //console.log(sQueue,eQueue)
//     }
//     return ans === 10e7?-1:ans;
// };
class minHeap{//二叉树小根堆
    constructor(){
        this.heap = [null];
    }
    swap(i,j){
        let temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }
    insert(elem){//存元素
        this.heap.push(elem);
        let tail = this.heap.length-1;
        while(tail>1 && this.heap[tail].val < this.heap[(tail>>1)].val){//从下往上调整
            let parent = tail>>1;
            this.swap(tail,parent);
            tail = tail>>1;
        }
        //console.log("insert",elem.val,this.heap)
    }
    extract(){//取元素
        if(this.heap.length<2) return null;
        let start = 1,end = this.heap.length-1;
        if(start<end){//交换头尾，然后取出
           this.swap(start,end);
        }
        let elem = this.heap.pop();
        while((start<<1)<this.heap.length){
            let left = start<<1,right = (start<<1)+1;
            let next;
            if(right<this.heap.length){
                next = this.heap[left].val < this.heap[right].val?left:right;
            }else{
                next = left;
            }
            if(this.heap[start].val > this.heap[next].val){
                this.swap(start,next);
                start = next;
            }else{
                break;
            }
        }
        //console.log("take",elem.val)
        return elem;
    }
}
var shortestPathBinaryMatrix = function(grid) {//带有A*估值的BFS
    let m = grid.length;
    let n = grid[0].length;
    let dx = [1,1,1,0,0,-1,-1,-1,];
    let dy = [-1,0,1,-1,1,-1,0,1];
    let ans = 10e7;
    let queue = new minHeap();
    let visit = new Array(m*n).fill(0);
    queue.insert({
        val:(0-(m-1))**2 + (0-(n-1))**2,
        payload:[0,0,0]
    });
    visit[0] = 1;
    while(queue.heap.length>1){
        let {payload:[x,y,level],val} = queue.extract();
        if(x<0||x>=m||y<0||y>=n) continue;
        if(grid[x][y]===1) continue;
        if(x === m-1 && y=== n-1){
            ans = Math.min(ans,level+1);
            break;
        }
        //console.log(x,y)
        for(let i=0;i<8;i++){
            let nx = x+dx[i],ny = y+dy[i];
            if(nx<0||nx>=m||ny<0||ny>=n||grid[nx][ny]===1) continue;
            if(visit[nx*m+ny]) continue;
            queue.insert({
                val:val+level+((dx[i]==0||dy[i]==0)?1:1.4)+((m-1)-nx)+((n-1)-ny),
                payload:[nx,ny,level+1]
            });
            visit[nx*m+ny] = 1;
        }
    }
    return ans === 10e7?-1:ans;
};
console.log((shortestPathBinaryMatrix([
    [0,0,0],
    [1,1,0],
    [1,1,1]
])));//-1
console.log(shortestPathBinaryMatrix([
    [0,1],
    [1,0]
]));//2
console.log(shortestPathBinaryMatrix([
    [0,0,0],
    [1,0,0],
    [1,1,0]
]));//3
console.log(shortestPathBinaryMatrix([
    [0,1,0,0,0,0],
    [0,1,0,1,1,0],
    [0,1,1,0,1,0],
    [0,0,0,0,1,0],
    [1,1,1,1,1,0],
    [1,1,1,1,1,0]
]));//14
console.log(shortestPathBinaryMatrix([
    [0,0,1,0,0,0,0],
    [0,1,0,0,0,0,1],
    [0,0,1,0,1,0,0],
    [0,0,0,1,1,1,0],
    [1,0,0,1,1,0,0],
    [1,1,1,1,1,0,1],
    [0,0,1,0,0,0,0]
]));//10
console.log(shortestPathBinaryMatrix([
    [0,0,0,0,0,0,0,0,0],
    [0,1,1,0,0,0,0,0,0],
    [1,0,0,1,0,0,0,0,0],
    [0,1,0,0,1,1,0,0,1],
    [0,0,1,0,0,1,0,0,1],
    [0,1,0,1,0,0,1,1,0],
    [0,0,0,0,0,1,0,0,0],
    [0,1,0,1,0,0,1,0,0],
    [0,1,1,0,0,0,0,1,0]
]));//10
console.log(shortestPathBinaryMatrix([
    [0,0,1,0,0,1,0,1,0],
    [0,0,0,0,0,0,0,0,0],
    [0,1,1,0,1,1,1,1,1],
    [0,0,0,1,0,0,0,0,0],
    [1,1,0,0,0,1,0,0,0],
    [1,0,1,0,0,1,0,0,1],
    [1,1,1,1,0,0,1,0,0],
    [1,0,0,1,0,0,1,1,1],
    [0,0,0,0,0,0,0,0,0]
]));//11