/**
* @param {number[]} prices
* @return {number}
*/
// 假设把某股票的价格按照时间先后顺序存储在数组中，请问买卖该股票一次可能获得的最大利润是多少？
var maxProfit = function(prices) {
    if(prices.length<2) return 0;
    let dp = [0];
    let cost = prices[0];//成本
    for(var i = 1;i<prices.length;i++){
        dp[i] = Math.max(dp[i-1],prices[i] - cost);
        cost = Math.min(cost,prices[i]);
    }
    return dp.pop();
};
console.log(maxProfit([7,1,5,3,6,4]))