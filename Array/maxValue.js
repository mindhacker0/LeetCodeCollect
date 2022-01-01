/**
 * @param {number[][]} grid
 * @return {number}
*/
// var maxValue = function (grid) {//暴力dfs，计算每条路径，找出最大值,超时
//     let stack = [];
//     let maxSum = 0;
//     let pathLen = 0;
//     stack.push([0,0,[]]);
//     while (stack.length) {
//         let [x,y,path] = stack.pop();
//         path.push(grid[x][y]);
//         if(x===grid.length-1 && y===grid[0].length-1){//路径结束
//             let sum = path.reduce((a,b)=>a+b,0);
//             pathLen++;
//             console.log(sum,pathLen);
//             maxSum = sum>maxSum?sum:maxSum;
//         }
//         if(x < grid.length && y < grid[0].length){
//             x+1 < grid.length && stack.push([x+1,y,JSON.parse(JSON.stringify(path))]);
//             y+1 < grid[0].length && stack.push([x,y+1,JSON.parse(JSON.stringify(path))]);
//         }
//     }
//     return maxSum;
// };
var maxValue = function (grid) {//dp 动态规划，数组是这条路径的最大值
    let height = grid.length,width = grid[0].length;
    let dp = new Array;
    dp[0] = new Array;
    for(let i =1;i<=height;i++){
        dp[i] = new Array;
        for(let j =1;j<=width;j++){
            dp[i][j] = Math.max(dp[i-1][j]||0,dp[i][j-1]||0) + grid[i-1][j-1]; 
            console.log(dp[i][j]);
        }
    }
    console.log(dp);
    return dp[height][width];
};
// console.log(maxValue([
//     [7,1,3,5,8,9,9,2,1,9,0,8,3,1,6,6,9,5],
//     [9,5,9,4,0,4,8,8,9,5,7,3,6,6,6,9,1,6],
//     [8,2,9,1,3,1,9,7,2,5,3,1,2,4,8,2,8,8],
//     [6,7,9,8,4,8,3,0,4,0,9,6,6,0,0,5,1,4],
//     [7,1,3,1,8,8,3,1,2,1,5,0,2,1,9,1,1,4],
//     [9,5,4,3,5,6,1,3,6,4,9,7,0,8,0,3,9,9],
//     [1,4,2,5,8,7,7,0,0,7,1,2,1,2,7,7,7,4],
//     [3,9,7,9,5,8,9,5,6,9,8,8,0,1,4,2,8,2],
//     [1,5,2,2,2,5,6,3,9,3,1,7,9,6,8,6,8,3],
//     [5,7,8,3,8,8,3,9,9,8,1,9,2,5,4,7,7,7],
//     [2,3,2,4,8,5,1,7,2,9,5,2,4,2,9,2,8,7],
//     [0,1,6,1,1,0,0,6,5,4,3,4,3,7,9,6,1,9]
// ]));
console.log(maxValue([
    [1,3,1],
    [1,5,1],
    [4,2,1]
]));