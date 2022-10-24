//343. 整数拆分
/**
 * @param {number} n
 * @return {number}
*/
var integerBreak = function(n) {//动规
    let dp = new Array(n+1).fill(0);//dp[i]表示和为i的乘积最大是多少
    dp[2] = 1;
    for(let i=3;i<=n;i++){
        for(let j=1;j<=i-2;j++){
            dp[i] = Math.max.call(null,i-1,dp[i],dp[i-j]*j,(i-j)*j)
        }
    }
    console.log(dp);
    return dp[n];
};
console.log(integerBreak(10));