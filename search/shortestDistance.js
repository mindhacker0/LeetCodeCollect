//317. 离建筑物最近的距离
// 给你一个 m × n 的网格，值为 0 、 1 或 2 ，其中:
// 每一个 0 代表一块你可以自由通过的 空地 
// 每一个 1 代表一个你不能通过的 建筑
// 每个 2 标记一个你不能通过的 障碍 
// 你想要在一块空地上建造一所房子，在 最短的总旅行距离 内到达所有的建筑。你只能上下左右移动。
// 返回到该房子的 最短旅行距离 。如果根据上述规则无法建造这样的房子，则返回 -1 。
// 总旅行距离 是朋友们家到聚会地点的距离之和。
// 使用 曼哈顿距离 计算距离，其中距离 (p1, p2) = |p2.x - p1.x | + | p2.y - p1.y | 。
/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestDistance = function(grid) {//bfs 从空地出发 3216ms 
    let m = grid.length,n = grid[0].length;
    let dir = [[-1,0],[1,0],[0,-1],[0,1]];
    let home = 0,min = Infinity;
    for(let i=0;i<m;++i){
        for(let j=0;j<n;++j){
            if(grid[i][j] === 1) home++;
        }
    }
    for(let i=0;i<m;++i){
        for(let j=0;j<n;++j){
            if(grid[i][j] === 0){
                let visit = new Array(m*n).fill(0);
                min = Math.min(min,bfs([i,j,0],visit));
            }
        }
    }
    function bfs(start,visit){
        const queue = [start];
        let total = 0,count = 0;
        while(queue.length){
            const [x,y,distance] = queue.shift();
            if(grid[x][y] === 1){
                total+=distance;
                count++;
                continue;
            }
            for(let i=0;i<dir.length;++i){
                let dx = x + dir[i][0],dy = y + dir[i][1];
                if(dx<0||dx>=m||dy<0||dy>=n||visit[dx*n+dy]||grid[dx][dy]===2) continue;
                visit[dx*n+dy] = 1;
                queue.push([dx,dy,distance+1]);
            }
        }
        return count===home?total:Infinity;
    }
    return min===Infinity?-1:min;
};
var shortestDistance = function(grid) {//bfs 从房子出发，到空地的距离累计 208ms
    let m = grid.length,n = grid[0].length;
    let dir = [[-1,0],[1,0],[0,-1],[0,1]];
    let home = 0,min = Infinity;
    let dist = new Array(m*n).fill(0);
    let count = new Array(m*n).fill(0);
    let visit = new Array(m*n).fill(0);
    for(let i=0;i<m;++i){
        for(let j=0;j<n;++j){
            if(grid[i][j] === 1) home++;
        }
    }
    let vis = 0;
    for(let i=0;i<m;++i){
        for(let j=0;j<n;++j){
            if(grid[i][j] === 1){
                bfs([i,j,0],vis);
                vis++;
            }
        }
    }
    function bfs(start){
        const queue = [start];
        let index = 0;
        while(index<queue.length){
            const [x,y,distance] = queue[index++];//避免使用shift操作，因为它是O(n)
            if(grid[x][y] === 0){
                dist[x*n+y]+= distance;
                count[x*n+y]++;
                if(count[x*n+y] === home) min = Math.min(min,dist[x*n+y]);
            }
            for(let i=0;i<dir.length;++i){
                let dx = x + dir[i][0],dy = y + dir[i][1];
                if(dx<0||dx>=m||dy<0||dy>=n||visit[dx*n+dy]!==vis||grid[dx][dy]===2||grid[dx][dy]===1) continue;
                visit[dx*n+dy]++;
                queue.push([dx,dy,distance+1]);
            }
        }
    }
    return min===Infinity?-1:min;
}

// console.log(shortestDistance([
//     [1,0,2,0,1],
//     [0,0,0,0,0],
//     [0,0,1,0,0]
// ]));
console.log(shortestDistance([
    [1,1,1,1,1,1,1,0],
    [0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,0,1],
    [1,0,0,0,1,1,0,1],
    [1,0,1,1,1,1,0,1],
    [1,0,1,0,0,1,0,1],
    [1,0,1,1,1,1,0,1],
    [1,0,0,0,0,0,0,1],
    [0,1,1,1,1,1,1,0]
]))