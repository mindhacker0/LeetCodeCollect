//417. 太平洋大西洋水流问题
// 有一个 m × n 的矩形岛屿，与 太平洋 和 大西洋 相邻。 “太平洋” 处于大陆的左边界和上边界，而 “大西洋” 处于大陆的右边界和下边界。
// 这个岛被分割成一个由若干方形单元格组成的网格。给定一个 m x n 的整数矩阵 heights ， heights[r][c] 表示坐标 (r, c) 上单元格 高于海平面的高度 。
// 岛上雨水较多，如果相邻单元格的高度 小于或等于 当前单元格的高度，雨水可以直接向北、南、东、西流向相邻单元格。水可以从海洋附近的任何单元格流入海洋。
// 返回网格坐标 result 的 2D 列表 ，其中 result[i] = [ri, ci] 表示雨水从单元格 (ri, ci) 流动 既可流向太平洋也可流向大西洋 。
/**
 * @param {number[][]} heights
 * @return {number[][]}
*/
class Graph{
    constructor(val,index){
        this.val = val;
        this.index = index;
        this.in = new Set;
        this.out = new Set;
    }
}
var pacificAtlantic = function(heights) {
    let m = heights.length,n = heights[0].length;
    const ans = [];
    const dir = [[-1,0],[1,0],[0,-1],[0,1]];
    const nodeMap = new Map;
    const pac = new Graph(-1,m*n);
    const alt = new Graph(-1,m*n+1);
    nodeMap.set(m*n,pac);
    nodeMap.set(m*n+1,alt);
    //初始化图
    for(let i=0;i<m;++i){
        for(let j=0;j<n;++j){
            const node = new Graph(heights[i][j],i*n+j);
            for(let k=0;k<dir.length;++k){
                let dx = i+dir[k][0],dy = j+dir[k][1];
                if(dx===-1||dy===-1){
                    node.out.add(m*n);
                    pac.in.add(i*n+j);
                }else if(dx===m||dy===n){
                    node.out.add(m*n+1);
                    alt.in.add(i*n+j);
                }else{
                    if(heights[dx][dy]<=heights[i][j]){
                        node.out.add(dx*n+dy);
                    }else{
                        node.in.add(dx*n+dy);
                    }
                }
            }
            nodeMap.set(i*n+j,node);
        }
    }
    //console.log(nodeMap)
    //记忆化查找
    const visit = new Array(m*n).fill(0);
    for(let i=0;i<m;++i){
        for(let j=0;j<n;++j){
            if(search(i*n+j,new Set) === 7){
                ans.push([i,j]);
            }
        }
    }
    function search(start,set){
        if(start === m*n) return 1<<1;
        if(start === m*n+1) return 1<<2;
        const out = nodeMap.get(start).out;
        let ans = 1;
        out.forEach(item => {
            if(!set.has(item)){
                set.add(item)
                let res = visit[item]||search(item,set);
                ans|=res;
            }
        });
        visit[start] = ans;
        return ans;
    }
    return ans;
};
var pacificAtlantic = function(heights) {//从海洋逆向查找
    let m = heights.length,n = heights[0].length;
    const ans = [];
    const dir = [[-1,0],[1,0],[0,-1],[0,1]];
    const nodeMap = new Map;
    const pac = new Graph(-1,m*n);
    const alt = new Graph(-1,m*n+1);
    nodeMap.set(m*n,pac);
    nodeMap.set(m*n+1,alt);
    //初始化图
    for(let i=0;i<m;++i){
        for(let j=0;j<n;++j){
            const node = new Graph(heights[i][j],i*n+j);
            for(let k=0;k<dir.length;++k){
                let dx = i+dir[k][0],dy = j+dir[k][1];
                if(dx===-1||dy===-1){
                    node.out.add(m*n);
                    pac.in.add(i*n+j);
                }else if(dx===m||dy===n){
                    node.out.add(m*n+1);
                    alt.in.add(i*n+j);
                }else{
                    if(heights[dx][dy]<heights[i][j]){
                        node.out.add(dx*n+dy);
                    }else{
                        node.in.add(dx*n+dy);
                    }
                }
            }
            nodeMap.set(i*n+j,node);
        }
    }
    //console.log(nodeMap)
    //记忆化查找
    const visit = new Array(m*n).fill(0);
    const visit2 = new Array(m*n).fill(0);
    search(m*n,visit);
    search(m*n+1,visit2);
    function search(start,vis){
        const node = nodeMap.get(start);
        let next = node.in;
        next.forEach(item => {
            if(!vis[item]){
                vis[item] = 1;
                search(item,vis);
            }
        });
    }
    console.log(visit,visit2);
    for(let i=0;i<m*n;++i){
        if(visit[i] && visit[i] === visit2[i]) ans.push([Math.floor(i/n),i%n]);
    }
    //收集访问的交集
    return ans;
};
console.log(pacificAtlantic([
    [1,2,2,3,5],
    [3,2,3,4,4],
    [2,4,5,3,1],
    [6,7,1,4,5],
    [5,1,1,2,4]
]));