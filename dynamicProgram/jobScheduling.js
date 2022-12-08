//1235. 规划兼职工作
/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
*/
var jobScheduling = function(startTime, endTime, profit){//动态规划
    let len = startTime.length;
    let dp = new  Array(len).fill(0).map(()=>new Array(2).fill(0));//选与不选第i个所获得的价值
    let ans = 0;
    let arr = [];
    for(let i=0;i<len;i++){
        arr.push([startTime[i],endTime[i],profit[i]])
    }
    arr.sort((a,b)=>a[0]-b[0]);
    for(let i=0;i<len;i++){
        if(i===0){
            dp[i][1] = [arr[0][2],arr[0][1]];
            dp[i][0] = [0,1];
            continue;
        }else{
            dp[i][0] = dp[i-1][0][0]>dp[i-1][1][0]?dp[i-1][0]:dp[i-1][1];
            dp[i][1] = [arr[i][2],arr[i][1]];
            for(let j=0;j<=i;j++){
                for(let k=0;k<2;k++){
                    if(arr[i][0]>=dp[j][k][1] && dp[i][1][0]<(dp[j][k][0]+arr[i][2])){dp[i][1] = [dp[j][k][0]+arr[i][2],arr[i][1]];}
                }
            }
        }
        ans = Math.max.call(null,ans,dp[i][0][0],dp[i][1][0]);
    }
    console.log(arr,dp);
    return ans;
};
// console.log(jobScheduling([1,2,3,3],[3,4,5,6],[50,10,40,70]));//120
// console.log(jobScheduling([1,2,3,4,6],[3,5,10,6,9], [20,20,100,70,60]));//150
// console.log(jobScheduling([1,1,1],[2,3,4],[5,6,9]));//6
console.log(jobScheduling(
    [ 6,15, 7,11, 1, 3,16, 2],
    [19,18,19,16,10, 8,19, 8],
    [ 2, 9, 1,19, 5, 7, 3,19]
));//44