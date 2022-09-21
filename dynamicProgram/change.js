//518. 零钱兑换 II
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins){//完全背包问题，物品的大小和价值为 coins[i],背包的大小为amount
    let len = coins.length;
    let dp = [];//dp[i][j]表示取coins前i个的组成总重量j的最大价值,coins[i]可以取多次
    for(let i=0;i<len;i++){
        dp[i] = new Array(amount+1).fill(-Infinity);
        dp[i][0] = 0;
        for(let j=1;j<=amount;j++){
            if(i===0) dp[i][j] = j>=coins[i]?Math.max(dp[i][j],dp[i][j-coins[i]]+coins[i]):0;
            else{
                if(j>=coins[i]){
                    dp[i][j] = Math.max(dp[i-1][j-coins[i]]+coins[i],dp[i-1][j]);
                }else{
                    dp[i][j] = dp[i-1][j];
                }
            }
        }
    }
    return dp;
};
// console.log(change(5,[1, 2, 5]));
console.log(change(18,[2, 9, 8, 1]));