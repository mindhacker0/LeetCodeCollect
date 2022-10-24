//827. 最大人工岛
/**
 * @param {number[][]} grid
 * @return {number}
*/
class DisjointSet{
    constructor(n){
        this.fa = new Array(n);
        this.size = new Array(n).fill(1);//保存各个集合的大小
        this.maxSize = 1;
        for(let i=0;i<n;i++) this.fa[i] = i;
    }
    union(a,b){
        let ax = this.find(a);
        let bx = this.find(b);
        if(ax!==bx){
            this.fa[bx] = ax;
            this.size[ax]+=this.size[bx];
            this.maxSize = Math.max(this.size[ax]);
        }
    }
    getSize(x){//获取某个集合的大小
        return this.size[this.find(x)];
    }
    find(x){
        return this.fa[x] === x?x:(this.fa[x] = this.find(this.fa[x]));
    }
    isConnect(a,b){
        return this.find(a)===this.find(b);
    }
}
var largestIsland = function(grid) {
    let height = grid.length,width = grid[0].length;
    let djs = new DisjointSet(width*height);
    let dir = [[-1,0],[1,0],[0,-1],[0,1]];
    let empty = [];
    for(let i=0;i<height;i++){
        for(let j=0;j<width;j++){
            if(grid[i][j]===0){empty.push([i,j]);continue;}//保存为0的点
            for(let k=0;k<4;k++){
                let nextX = i+dir[k][0],nextY = j+dir[k][1];
                if(nextX<0||nextX>=height||nextY<0||nextY>=width||grid[nextX][nextY]===0) continue;
                djs.union(i*height+j,nextX*height+nextY);
            }
        }
    }
    //console.log(djs,djs.getSize(3));
    if(empty.length===0) return djs.maxSize;//没有地方可以转换
    let max = 0;
    for(let i=0;i<empty.length;i++){
        let [x,y] = empty[i];
        let join = 0,set =new Set;
        for(let k=0;k<4;k++){
            let nextX = x+dir[k][0],nextY = y+dir[k][1];
            if(nextX<0||nextX>=height||nextY<0||nextY>=width||grid[nextX][nextY]===0) continue;
            //console.log("add",nextX,nextY);
            let parent = djs.find(nextX*height+nextY);
            if(!set.has(parent)){
                join+=djs.getSize(nextX*height+nextY);
                set.add(parent);
            }
        }
        max = Math.max(max,join+1);
    }
    return max;
};
console.log(largestIsland([[1, 1],[1, 0]]));
console.log(largestIsland([
    [1,0,1,1],
    [0,0,1,1]
]));
