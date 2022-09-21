/**
* @param {number[]} prices
* @return {number}
*/
// 假设把某股票的价格按照时间先后顺序存储在数组中，请问买卖该股票一次可能获得的最大利润是多少？
var maxProfit = function(prices) {
    if(prices.length<2) return 0;
    let maxP = [0];
    let cost = prices[0];//成本
    for(var i = 1;i<prices.length;i++){
        maxP = Math.max(maxP,prices[i] - cost);
        cost = Math.min(cost,prices[i]);
    }
    return maxP;
};
var maxProfit = function(prices) {
    let stack = [];
    let ans = 0;
    for(let i=0;i<prices.length;i++){
        while(stack.length && stack[stack.length-1]>prices[i]) stack.pop();
        stack.push(prices[i]);
        if(stack.length>=2) ans = Math.max(ans,stack[stack.length-1]-stack[0]);
        console.log(stack);
    }
    return ans;
}
// console.log(maxProfit([7,1,5,3,6,4]))
// console.log(maxProfit([7,6,4,3,1]))
console.log(maxProfit([2,1,2,1,0,1,2]))