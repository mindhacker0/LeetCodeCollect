//122. 买卖股票的最佳时机 II
/**
 * @param {number[]} prices
 * @return {number}
 */
/*var maxProfit = function(prices) {//贪心
    if(prices.length<2) return 0;
    let ans = 0;
    for(let i=1;i<prices.length;i++){
        ans+=Math.max(prices[i] - prices[i-1],0);
    }
    return ans;
};*/
var maxProfit = function(prices) {//动规
    if(prices.length<2) return 0;
    let f=[];
    for(let i=0;i<prices.length;i++){
        f[i] = [];
        f[i][0] = Number.MIN_SAFE_INTEGER;
        f[i][1] = Number.MIN_SAFE_INTEGER;
    }
    f[0][0] = 0,f[0][1] = -prices[0];//f[x][0]表示第x天不持有收益，f[x][1]表示第x天持有股票收益
    for(let i=1;i<prices.length;i++){
        f[i][0] = Math.max(f[i][0],f[i-1][1]+prices[i]);
        f[i][1] = Math.max(f[i][1],f[i-1][0]-prices[i]);
        for(let j=0;j<2;j++)
           f[i][j] = Math.max(f[i-1][j],f[i][j]);
    }
    return f[prices.length-1][0]
}
console.log(maxProfit([7,1,5,3,6,4]));