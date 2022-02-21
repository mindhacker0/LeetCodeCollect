/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
*/
// 贪心，由局部最优解得到全局最优解
// 贪心算法错误
/*var coinChange = function(coins, amount) {
    if(amount === 0) return 0;
    coins.sort((a,b)=>b-a);
    let ans = 0;
    let sup = amount;
    for(let i=0;i<coins.length;i++){
        let next = sup%coins[i];
        ans+=~~(sup/coins[i]);
        sup = next;
    }
    return sup===0?ans:-1;//取模后没有余数可以找开
};*/
//dfs超时，不是有效解法
/*var coinChange = function(coins, amount) {
    let ans = -1;
    let map = {};
    function dfs(amount,count,arr){
        if(map[amount]) return map[amount];
        if(amount===0){
            if(ans === -1){
                ans = count;
            }else{
                //console.log(arr);
                ans = Math.min(ans,count);
            }
            return;
        }
        count++;
        let min = -1;
        for(let i=0;i<coins.length;i++){
            if((amount-coins[i])>=0){
               let k = dfs(amount-coins[i],count,[...arr,coins[i]]);
                if(k!=-1){
                    if(min===-1) min = k;
                    else min=Math.min(min,k);
                }
            } 
        }
        map[amount] = min;
        return min;
    }
    dfs(amount,0,[]);
    return ans;
};*/
// 动态规划
var coinChange = function(coins, amount){
    let dp = new Array(amount);
    dp[0] = 0;//dp[i]组成金额i所需最少的硬币数量
    for(let i=1;i<=amount;i++){
        dp[i] = Number.MAX_SAFE_INTEGER;
        for(let j=0;j<coins.length;j++){
            if(coins[j]<=i)  dp[i] = Math.min(dp[i],dp[i-coins[j]]+1);
        }
    }
    if(dp[amount]>=Number.MAX_SAFE_INTEGER) dp[amount] = -1;
    return dp[amount];
}
console.log(coinChange([1, 2, 5],11));
console.log(coinChange([2],3));
console.log(coinChange([186,419,83,408],6249));