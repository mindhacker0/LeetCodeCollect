//剑指 Offer 14- I. 剪绳子
/**
 * @param {number} n
 * @return {number}
*/
// 分成三段最大面积是等边三角，分成四段最大的面积是正方形，可知分成的长度尽量相等最大。又由函数(n/m)单调可知每段长度为e时可以取到极值。
var cuttingRope = function(n) {//数学法
    if(n===2) return 1;
    if(n===3) return 2;
    if(n%3===0) return Math.pow(3,(n/3));
    if(n%3===1) return 4*Math.pow(3,((n-4)/3));
    if(n%3===2) return 2*Math.pow(3,((n-2)/3));
};
var cuttingRope = function(n) {//动态规划
    let dp = new Array(n+1).fill(1);//dp[i]表示吧长为i的绳子分割为至少两段后的最大乘积
    for(let i=2;i<=n;i++){
        for(let j=1;j<i;j++){
            console.log(i,j,dp[i-j])
            dp[i] = Math.max.call(null,dp[i],j*(i-j),j*dp[i-j]);
        }
    }
    console.log(dp);
    return dp[n];
}
console.log(cuttingRope(4));