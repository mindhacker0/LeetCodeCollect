//685. 冗余连接 II
/**
 * @param {number[][]} edges
 * @return {number[]}
 */
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
var findRedundantDirectedConnection = function(edges) {
    let len = edges.length;
    let djs = new DisjointSet(len);
    for(let i=0;i<len;i++){
        if(djs.isConnected(edges[i][0],edges[i][1])){
        }else{
            djs.union(edges[i][0],edges[i][1]);
        }
        console.log(djs.fa.join(","));

    }
    return djs;
};
console.log(findRedundantDirectedConnection([
    [2,1],
    [3,1],
    [4,2],
    [1,4]
]));//[2,1]