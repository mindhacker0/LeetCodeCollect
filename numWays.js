/**
 * @param {number} n
 * @return {number}
*/
var numWays = function(n) {
    let dp = [1,1];
    if(n<2) return dp[n];
    for(var i = 2;i<=n;i++){
        dp[i] = (dp[i-1] + dp[i-2])%1000000007;
    }
    return dp.pop();
};
console.log(numWays(2));