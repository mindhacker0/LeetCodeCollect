//547. 省份数量
/**
 * @param {number[][]} isConnected
 * @return {number}
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
var findCircleNum = function(isConnected) {
    let djs = new DisjointSet(isConnected.length);
    for(let i=0;i<isConnected.length;i++){
        for(let j=i;j<isConnected[i].length;j++){
            if(isConnected[i][j] === 1){
                djs.union(i+1,j+1);
            }
        }
    }
    //console.log(djs);
    return djs.count;
};
console.log(findCircleNum([
    [1,1,0],
    [1,1,0],
    [0,0,1]
]));