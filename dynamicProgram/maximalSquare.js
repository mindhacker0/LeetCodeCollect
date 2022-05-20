//221. 最大正方形
/**
 * @param {character[][]} matrix
 * @return {number}
*/
var maximalSquare = function(matrix) {//动态规划(20.45%)
    let m = matrix.length,n=matrix[0].length;
    let dp = [];//dp[i][j]表示以i,j结束的正方形边长
    let maxLen = -10e7;
    for(let i=0;i<m;i++){
        dp[i] = [];
        for(let j=0;j<n;j++){
            if(i===0 || j===0 || matrix[i][j]==='0') dp[i][j] = matrix[i][j]*1;
            else{
                dp[i][j] = Math.min(dp[i-1][j-1],dp[i-1][j],dp[i][j-1])+1;
            }
            maxLen = Math.max(maxLen,dp[i][j]);
        }
    }
    console.log(dp);
    return maxLen**2;
};
var maximalSquare = function(matrix) {//dfs
    
}
//console.log(maximalSquare([["1","1","1","1","1"],["1","1","1","1","1"],["0","0","0","0","0"],["1","1","1","1","1"],["1","1","1","1","1"]]));
//console.log(maximalSquare([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]));
console.log(maximalSquare([['1','1'],['1','1']]))