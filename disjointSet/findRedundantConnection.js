//684. 冗余连接
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
var findRedundantConnection = function(edges) {//思路，如果一条新的关系两个点都在同一个集合，那么这条关系就是多余的
    let djs = new DisjointSet(edges.length);
    let ans = [];
    for(let i=0;i<edges.length;i++){
        if(djs.isConnected(edges[i][0],edges[i][1])){
            ans = edges[i];
        }else{
            djs.union(edges[i][0],edges[i][1]);
        }
    }
    return ans;
};
console.log(findRedundantConnection([[1,2], [1,3], [2,3]]));