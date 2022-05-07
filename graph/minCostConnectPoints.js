//1584. 连接所有点的最小费用
/**
 * @param {number[][]} points
 * @return {number}
*/
function GraphNode(val,neighborList,weight){
    this.val = val||null;
    this.neighborList = neighborList||[];//邻节点
    this.weight = weight||[];//权重
}
class minHeap{//小根堆
    constructor(){
        this.heap = [null];
    }
    isEmpty(){
        return this.heap.length === 1;
    }
    swap(i,j){
        let temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }
    insert(elem){//插入元素
        this.heap.push(elem);
        this.heapifyUp(this.heap.length-1);
    }
    heapifyUp(start){//向上调整
        while(start>1 && this.heap[start].val<this.heap[start>>1].val){
            let parent = start>>1;
            this.swap(start,parent);
            start = parent;
        }
    }
    extract(){//提取元素
        let start = 1,end = this.heap.length -1;
        if(start < end) this.swap(start,end);
        let elem = this.heap.pop();
        this.heapifyDown(start);
        return elem;
    }
    heapifyDown(start){//向下调整
        while((start<<1)<this.heap.length){
            let left = start<<1,right = (start<<1)+1;
            let next;
            if(right<this.heap.length){
                next = this.heap[left].val<this.heap[right].val?left:right;
            }else{
                next = left;
            }
            if(this.heap[start].val>this.heap[next].val){
                this.swap(start,next);
                start = next;
            }else{
                break;
            }
        }
    }
}
class DisjointSet{
    constructor(n){//n为该集合的节点数
        this.fa = [];
        for(let i=1;i<=n;i++){//初始化每个节点的父亲是它自己
            this.fa[i] = i;
        }
        this.count = n;//number of component
    }
    union(a,b){//connects two items a and b
        a = this.find(a);
        b = this.find(b);
        if(a!=b){
            this.count--;
            this.fa[b] = a;
        }
    }
    isConnected(a,b){//a and b in the same component?
       return this.find(a) === this.find(b);
    }
    find(x){//component identifier,or the root
       return x === this.fa[x]?x:(this.fa[x] = this.find(this.fa[x]));
    }
}
var minCostConnectPoints = function(points) {//kruskal算法(90.07%)
    let len = points.length;
    let edges = new minHeap();
    for(let i=0;i<len;i++){//枚举所有的边
        let [x,y] = points[i];
        for(let j=i+1;j<len;j++){
            let [x1,y1] = points[j];
            let val = Math.abs(x-x1)+Math.abs(y-y1);//曼哈顿距离
            edges.insert({
                val,
                line:[i,j]
            });
        }
    }
    let joint = new DisjointSet(len);
    let path = 0;
    while(joint.count!==1){
        let {val,line} = edges.extract();
        let [start,end] = line;
        if(joint.isConnected(start+1,end+1)) continue;//两点都在树中将成环
        path+=val;
        joint.union(start+1,end+1);
    }
    //console.log(edges,path);
    return path;
}
var minCostConnectPoints = function(points) {//prime算法(89.15%)
    let edges = new minHeap();
    let len = points.length;
    for(let i=1;i<len;i++){
        let [x,y] = points[0];
        let [x1,y1] = points[i];
        let val = Math.abs(x-x1)+Math.abs(y-y1);//曼哈顿距离
        edges.insert({
            val,
            line:[0,i]
        });
    }
    let vertex = new Set;
    vertex.add(0);
    let path = 0;
    while(vertex.size<len){
        let {val,line} = edges.extract();
        let [start,end] = line;
        if(vertex.has(start) && vertex.has(end)) continue;
        let [x,y] = points[end];
        path+=val;
        for(let i=0;i<len;i++){
            if(vertex.has(i)) continue;
            let [x1,y1] = points[i];
            let val = Math.abs(x-x1)+Math.abs(y-y1);//曼哈顿距离
            edges.insert({
                val,
                line:[end,i]
            })
        }
        vertex.add(end);
    }
    return path;
};
console.log(minCostConnectPoints([[0,0],[2,2],[3,10],[5,2],[7,0]]));//20
console.log(minCostConnectPoints([[0,0],[1,1],[1,0],[-1,1]]));//4
//console.log(minCostConnectPoints([[5,-17],[-3,-14],[-2,18],[-14,15],[-9,-17],[9,-16],[8,-3],[-15,11],[-12,17],[6,6],[4,3]]));//94