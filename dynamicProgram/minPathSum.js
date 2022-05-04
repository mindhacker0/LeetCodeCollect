//64. 最小路径和
/**
 * @param {number[][]} grid
 * @return {number}
*/
var minPathSum = function(grid) {
    let dp = [];//dp[i][j] 到i,j的最小路径
    let m = grid.length,n = grid[0].length;
    for(let i=0;i<m;i++){
        dp[i] = [];
        for(let j=0;j<n;j++){
            if(i===0 && j===0) dp[i][j] = grid[i][j];
            else if(i===0){dp[i][j] = dp[i][j-1]+grid[i][j] }
            else if(j===0){dp[i][j] = dp[i-1][j]+grid[i][j] }
            else dp[i][j] = Math.min(dp[i-1][j]+grid[i][j],dp[i][j-1]+grid[i][j]);
        }
    }
    console.log(dp);
    return dp[m-1][n-1];
};
console.log(minPathSum([
    [1,3,1],
    [1,5,1],
    [4,2,1]
]));