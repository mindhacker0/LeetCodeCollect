/**
 * @param {number} n
 * @return {number}
*/
// var nthUglyNumber = function(n){//丑数,直接算法，超时
//     if(n===1) return 1;
//     let times = n-1;
//     let i = 1;
//     while(times>0){
//         i++;
//         let isugly = false;
//         if(!(i%2 && i%3 && i%5)){
//             let temp = i;
//             while(!(temp%2 && temp%3 && temp%5)){
//                 if(temp%2===0) temp = temp/2;
//                 if(temp%3===0) temp = temp/3;
//                 if(temp%5===0) temp = temp/5;
//             }
//             if(temp === 1){
//                 isugly = true;
//             }
//         }
//         if(isugly){
//             times--;
//         }
//     }
//     return i;
// };
var nthUglyNumber = function(n){//丑数,动态规划算法
    if(n===1) return 1;
    let num1 =0,num2 =0,num3 =0;
    let dp = new Array;
    dp[0] = 1;
    for(var i = 1;i<=n;i++){
        dp[i] = Math.min(dp[num1]*2,dp[num2]*3,dp[num3]*5);
        if(dp[i] === dp[num1]*2) num1++;
        if(dp[i] === dp[num2]*3) num2++;
        if(dp[i] === dp[num3]*5) num3++;
    }
    // console.log(dp[n-1]);
    return dp[n-1];
};
console.time("sss");
console.log(nthUglyNumber(1407));
console.timeEnd("sss");