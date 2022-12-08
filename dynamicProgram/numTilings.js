//790. 多米诺和托米诺平铺
/**
 * @param {number} n
 * @return {number}
*/
var numTilings = function(n){//动态规划
    let dp = [[0,1,0,0]];//在第n行取形态k（空 满 下空 上空）的积木 可能的种数
    for(let i=1;i<=n;i++){
        dp[i] = [];
        dp[i][0] = dp[i-1][1];
        dp[i][1] = dp[i-1][0] + dp[i-1][1]+dp[i-1][2]+dp[i-1][3];//n行满，可能是上行满+竖着的1,可能是上行上凸加下凸，可能是上行下凸加上凸,
        dp[i][2] = dp[i-1][0] + dp[i-1][3];
        dp[i][3] = dp[i-1][0] + dp[i-1][2];
    }
    console.log(dp);
    return dp[n][1];
};
// 矩阵快速幂
console.log(numTilings(3))