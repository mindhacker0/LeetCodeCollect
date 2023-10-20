//361. 轰炸敌人
// 给你一个大小为 m x n 的矩阵 grid ，其中每个单元格都放置有一个字符：
// 'W' 表示一堵墙
// 'E' 表示一个敌人
// '0'（数字 0）表示一个空位
// 返回你使用 一颗炸弹 可以击杀的最大敌人数目。你只能把炸弹放在一个空位里。
// 由于炸弹的威力不足以穿透墙体，炸弹只能击杀同一行和同一列没被墙体挡住的敌人。
/**
 * @param {character[][]} grid
 * @return {number}
 */
var maxKilledEnemies = function(grid) {//暴力
    let m = grid.length,n = grid[0].length;
    const dir = [[0,1],[1,0],[0,-1],[-1,0]];
    let ans = 0;
    for(let i=0;i<m;++i){
        for(let j=0;j<n;++j){
            if(grid[i][j] === "0") ans = Math.max(ans,bomb([i,j]));
        }
    }
    function bomb(pos){
        const [x,y] = pos;
        let enmi = 0;
        let bot = x;
        while(bot>=0 && grid[bot][y]!=='W'){ if(grid[bot][y]==='E') enmi++; bot--; }
        let top = x;
        while(top<m && grid[top][y]!=='W'){ if(grid[top][y]==='E') enmi++; top++; }
        let left = y;
        while(left>=0 && grid[x][left]!=='W'){ if(grid[x][left]==='E') enmi++; left--; }
        let right = y;
        while(right<n && grid[x][right]!=='W'){ if(grid[x][right]==='E') enmi++;   right++; }
        return enmi;
    }
    return ans;
};
var maxKilledEnemies = function(grid) {//动态规划
    let m = grid.length,n = grid[0].length; 
    const dp = [];//dp[i][j]表示
    for(let i=0;i<m;++i){
        for(let j=0;j<n;++j){
        }
    }
}
console.log(maxKilledEnemies([["0","E","0","0"],["E","0","W","E"],["0","E","0","0"]]))