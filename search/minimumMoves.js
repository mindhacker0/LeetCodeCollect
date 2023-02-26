//1210. 穿过迷宫的最少移动次数
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumMoves = function(grid) {
    let m = grid.length,n = grid[0].length;
    let queue = [],ans = Infinity,visit = new Set;
    queue.push([0,1,0,0]);//头部坐标，当前方向0横1竖,路径长度
    while(queue.length){
        let [x,y,d,path] = queue.shift();
        if(visit.has(`${x}-${y}-${d}`)) continue;
        visit.add(`${x}-${y}-${d}`);
        if(x===m-1 && y == n-1 && d === 0) ans = Math.min(ans,path);
        ++path;
        if(d===0){
            if(y+1<n && grid[x][y+1]===0) queue.push([x,y+1,d,path]);//横向右
            if(x+1<m && grid[x+1][y-1]===0 && grid[x+1][y]===0){
                queue.push([x+1,y,d,path]);//横向下
                queue.push([x+1,y-1,1,path]);//横转竖
            } 
        }
        if(d===1){
            if(x+1<m && grid[x+1][y]===0) queue.push([x+1,y,d,path]);//竖向下
            if(y+1<n && grid[x-1][y+1]===0 && grid[x][y+1]===0){
                queue.push([x,y+1,d,path]);//竖向右
                queue.push([x-1,y+1,0,path]);//竖转横
            } 
        }
    }
    return ans === Infinity?-1:ans;
};
console.log(minimumMoves([
    [0,0,0,0,0,1],
    [1,1,0,0,1,0],
    [0,0,0,0,1,1],
    [0,0,1,0,1,0],
    [0,1,1,0,0,0],
    [0,1,1,0,0,0]
]));