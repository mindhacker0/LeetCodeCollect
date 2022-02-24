//200. 岛屿数量
/**
 * @param {character[][]} grid
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
var numIslands = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let djs = new DisjointSet(m*n+1);
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(grid[i][j]==='1'){
                if(i<=m-2 && grid[i+1][j] === "1"){
                    djs.union(i*n+j+1,(i+1)*n+j+1);
                }
                if(j<=n-2 && grid[i][j+1] === "1"){
                    djs.union(i*n+j+1,i*n+j+2);
                }
            }else{//所有的0归于一个集合
                djs.union(m*n+1,i*n+j+1);
            }
        }
    }
    return djs.count-1;//需要减去全是0的集合
};
console.log(numIslands([
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]
));