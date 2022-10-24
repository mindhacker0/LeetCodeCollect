//886. 可能的二分法
/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
*/
class DisjointSet{
    constructor(n){//初始化
        this.fa = new Array(n+1);
        for(let i=0;i<=n;i++) this.fa[i] = i;
    }
    find(x){//查询x的根节点
        return (this.fa[x]===x)?x:(this.fa[x] = this.find(this.fa[x]));
    }
    join(a,b){//合并两个元素
        a = this.find(a);
        b = this.find(b);
        this.fa[a] = b;
    }
    samecollect(a,b){//两个元素是否同一个集合
        return this.find(a)===this.find(b);
    }
}
var possibleBipartition = function(n,dislikes) {//并查集
    let set1 = new DisjointSet(2*n+1);
    for(let i=0;i<dislikes.length;i++){
        let [x,y] = dislikes[i];
        if(set1.samecollect(x,y)) return false;
        set1.join(x+n,y);
        set1.join(y+n,x);
    }
    return true;
};
var possibleBipartition = function(n,dislikes) {//dfs染色法
    let color = new Array(n+1).fill(-1);//颜色
    let len = dislikes.length;
    let graph = new Array(n+1).fill(false).map(()=>{return new Array();});
    for(let i=0;i<len;i++){//建图
        let [x,y] = dislikes[i];
        graph[x].push(y);
        graph[y].push(x);
    }
    function dfs(node,cr){
        color[node] = cr;//染色该节点
        for(let i=0;i<graph[node].length;i++){//扩展对立节点
            let xNode = graph[node][i];
            if(color[xNode]===-1 && !dfs(xNode,(cr+1)%2)){
               return false;
            }
            if(color[xNode]!==-1 && color[xNode] === cr){
                return false;
            }
        }
        return true;
    }
    for(let i=1;i<=n;i++){
        console.log(color);
        if(color[i]===-1 && !dfs(i,0)){
            return false;
        }
    }
    return true;
}
// console.log(possibleBipartition(4,[[1,2],[1,3],[2,4]]));
// console.log(possibleBipartition(3,[[1,2],[1,3],[2,3]]));
console.log(possibleBipartition(10,[[1,2],[3,4],[5,6],[6,7],[8,9],[7,8]]));