//1475. 商品折扣后的最终价格
/**
 * @param {number[]} prices
 * @return {number[]}
 */
 var finalPrices = function(prices) {
    let stack = [];
    let len = prices.length;
    let ans = [];
    for(let i=len-1;i>=0;i--){
        while(stack.length && stack[stack.length-1]>prices[i]) stack.pop();
        console.log(stack);
        ans[i] = stack.length===0?prices[i]:prices[i]-stack[stack.length-1];
        stack.push(prices[i]);
    }
    return ans;
};
console.log(finalPrices([8,4,6,2,3]));