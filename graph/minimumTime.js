//3112. 访问消失节点的最少时间
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} disappear
 * @return {number[]}
*/
// var minimumTime = function(n, edges, disappear) {//超时
//     const nb = [];
//     const dist = new Array(n).fill(10e7);
//     for(let i=0;i<edges.length;++i){
//         const [from,to,len] = edges[i];
//         if(typeof nb[from] === "undefined") nb[from] = [];
//         if(typeof nb[to] === "undefined") nb[to] = [];
//         nb[from].push([to,len]);
//         nb[to].push([from,len]);
//     }
//     //find short way to every node use bellamn ford
//     dist[0] = 0;//start point
//     for(let i=0;i<n-1;++i){
//         for(let j=0;j<n;++j){
//             if(typeof nb[j] === "undefined") continue;
//             for(let k=0;k<nb[j].length;++k){
//                 const [to,len] = nb[j][k];
//                 if(dist[j]+len<dist[to] && disappear[to]>dist[j]+len){
//                     dist[to] = dist[j]+len;
//                 }
//             }
//         }
//     }
//     // console.log(nb)
//     // console.log(dist)
//     //evalue if can reach 
//     const res = [];
//     for(let i=0;i<n;++i){
//         res[i] = dist[i]<disappear[i]?dist[i]:-1;
//     }
//     return res
// };
function swap(arr,i,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
class HeapNode{
    constructor(weight,payload){
        this.weight = weight;
        this.payload = payload;
    }
}
class MinHeap{//小根堆
    constructor(){
       this.root = [null];
    }
    offer(value,payload){
       this.root.push(new HeapNode(value,payload));
       this.heapifyUp();
    }
    take(){
      const len = this.root.length;
      if(len<=1) return null;
      swap(this.root,1,len-1);
      const take = this.root.pop();
      this.heapifyDown();
      return take;
    }
    heapifyUp(){
      let lastIndex = this.root.length - 1;
      while((lastIndex>>1)>0){
        const parent = lastIndex>>1;
        if(this.root[parent].weight > this.root[lastIndex].weight) swap(this.root,lastIndex,parent);
        else break;
        lastIndex = parent;
      }
    }
    heapifyDown(){
        let head = 1;
        const len = this.root.length;
        while(head<<1<=len-1){
            const left = head<<1,right = left+1;
            const next = (right>len-1||this.root[left].weight<this.root[right].weight)?left:right;
            if(this.root[next].weight < this.root[head].weight) swap(this.root,head,next);
            else break;
            head = next;
        }
    }
}
var minimumTime = function(n, edges, disappear) {//djikstra
    const nb = [];
    const heap = new MinHeap();
    const dist = new Array(n).fill(Infinity);
    for(let i=0;i<edges.length;++i){
        const [from,to,len] = edges[i];
        if(typeof nb[from] === "undefined") nb[from] = [];
        if(typeof nb[to] === "undefined") nb[to] = [];
        nb[from].push([to,len]);
        nb[to].push([from,len]);
    }
    dist[0] = 0;//start point
    heap.offer(0,0);
    while (heap.root.length>1) {
        const minNode = heap.take();
        const { weight, payload } = minNode;
        if (typeof nb[payload] === 'undefined'||weight!==dist[payload]) continue;
        for (const [to, time] of nb[payload]) {
            const nextTime = weight + time;
            if (dist[to] > nextTime && disappear[to] > nextTime) {
                dist[to] = nextTime;
                heap.offer(nextTime, to);
            }
        }
    }
    return dist.map(v=>v===Infinity ?-1:v);
};
// var minimumTime = function(n, edges, disappear) {//bfs
//     const nb = [];
//     const visit = new Array(n).fill(false);
//     const dist = new Array(n).fill(10e7);
//     for(let i=0;i<edges.length;++i){
//         const [from,to,len] = edges[i];
//         if(typeof nb[from] === "undefined") nb[from] = [];
//         if(typeof nb[to] === "undefined") nb[to] = [];
//         nb[from].push([to,len]);
//         nb[to].push([from,len]);
//     }
//     dist[0] = 0;//start point
//     const queue = [];
//     queue.push([0,0,0]);//from,to,len
//     while(queue.length){
//         const [from,to,len] = queue.shift();
//         const next = nb[to];
//         if(typeof next === "undefined"||visit[to]) continue;
//         for(let i=0;i<next.length;++i){
//             const [nTo,time] = next[i];
//             if(disappear[nTo]<=len+time) continue;
//             queue.push([to,nTo,len+time]);
//             dist[nTo] = Math.min(dist[nTo],len+time);
//         }
//         visit[to] = true;
//     }
//     console.log(dist)
//     return dist.map(v=>v===10e7?-1:v);
// }
// console.log(minimumTime(3,[[0,1,2],[1,2,1],[0,2,4]],[1,1,5]));
// console.log(minimumTime(8,[[4,0,5],[3,7,3],[0,2,3],[3,5,3],[7,0,1],[2,0,3],[7,7,10]],[15,8,4,3,9,18,9,13]));//[0,-1,3,-1,5,-1,-1,1]
//console.log(minimumTime(7,[[1,2,10],[5,1,7],[2,4,8],[4,0,5],[4,1,8],[4,4,6]],[9,7,17,15,5,17,17]));//[0,-1,-1,-1,-1,-1,-1]
console.log(minimumTime(7,[[1,4,3],[3,4,2],[2,5,5],[3,3,10]],[10,1,13,1,7,1,19]));//