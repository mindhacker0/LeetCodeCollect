/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
class DisJointSet {//并查集
    constructor(len){
        this.fa = new Array(len);
        for(let i=0;i<len;++i) this.fa[i] = i;
    }
    find(x){//查找根节点
       return x === this.fa[x]?x:(this.fa[x] = this.find(this.fa[x]));
    }
    union(a,b){//合并集合
        const faa = this.find(a);
        const fab = this.find(b);
        if(faa!==fab){
            this.fa[faa] = fab;
        }
        return fab;
    }
}
var maxAreaOfIsland = function(grid) {
    const m = grid.length,n = grid[0].length;
    const dir = [[0,1],[1,0]];
    const djs = new DisJointSet(m*n+1);
    for(let i=0;i<m;++i){
        for(let j=0;j<n;++j){
            if(grid[i][j] === 1){
                for(let k=0;k<dir.length;++k){
                    const dx = i+dir[k][0],dy = j + dir[k][1];
                    if(dx<0||dx>=m||dy<0||dy>=n) continue;
                    if(grid[dx][dy] === 1){
                        djs.union(i*n+j,dx*n+dy);
                    }
                }
            }else{
                djs.union(i*n+j,m*n);
            }
        }
    }
    const areaMap = new Map;
    let max = 0;
    for(let i=0;i<djs.fa.length-1;++i){
        const k = djs.find(i);
        let num = areaMap.get(k) || 0;
        areaMap.set(k,num+1);
        if(k === m*n) continue;
        max=Math.max(max,num+1);
    }
    return  areaMap.get(m*n) === m*n?0:max;
}
//console.log(maxAreaOfIsland([[0,0,0,0,0,0,0,0]]));
//console.log(maxAreaOfIsland([[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]))
// @lc code=end

