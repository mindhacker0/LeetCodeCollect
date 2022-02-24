//130. 被围绕的区域
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
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
var solve = function(board) {
    let m = board.length;
    let n = board[0].length;
    let djs = new DisjointSet(m*n + 1);
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(board[i][j] === "X") continue;
            if(i===0||j===0||i===m-1||j===n-1){//归于和外界相连的集合中
                djs.union(m*n + 1,i*n+j+1);
            }
            //只需要关心左侧和下方的元素即可全部便历
            if(i<=m-2 && board[i+1][j] === "O"){
                djs.union(i*n+j+1,(i+1)*n+j+1);
            }
            if(j<=n-2 && board[i][j+1] === "O"){
                djs.union(i*n+j+1,i*n+j+2);
            }
        }
    }
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(board[i][j] === "O" && !djs.isConnected(m*n + 1,i*n+j+1)){//不在和外界相连的集合中就可以设置为X
                board[i][j] = "X";
            }
        }
    }
    return board;
};
console.log(solve([
    ["X","O","X","X"],
    ["O","X","O","X"],
    ["X","O","X","O"],
    ["O","X","O","X"],
    ["X","O","X","O"],
    ["O","X","O","X"]
]));
console.log(solve([
    ["X","O","O","X","X","X","O","X","O","O"],
    ["X","O","X","X","X","X","X","X","X","X"],
    ["X","X","X","X","O","X","X","X","X","X"],
    ["X","O","X","X","X","O","X","X","X","O"]
]));
