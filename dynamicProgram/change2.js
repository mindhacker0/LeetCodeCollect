//518. 零钱兑换 II
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {//背包问题，背包体积为amount,可以取的物品为coins
   let dp = new Array(amount+1).fill(0);
   coins.unshift(0);
   dp[0] = 1;
   for(let i = 1;i<=coins.length;i++){
      for(let j=coins[i];j<=amount;j++){
        dp[j] += dp[j-coins[i]];
      }
   }
   console.log(dp);
   return dp[amount];
};
console.log(change(5,[1,2,5]));