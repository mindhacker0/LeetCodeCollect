//70. 爬楼梯
/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    if(n<3) return n;
    let dp = [1,2];
    for(let i = 2;i<n;i++){
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp.pop();
};