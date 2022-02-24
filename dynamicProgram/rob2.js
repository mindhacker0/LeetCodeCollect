//213. 打家劫舍 II
/**
 * @param {number[]} nums
 * @return {number}
*/
var rob = function(nums) {//环形的dp,分别计算不偷n和不偷1取最大值
    if(nums.length===1) return  nums[0];
    let len = nums.length;
    let dp = [[],[]];//dp[i][0]第i个不偷的收益，dp[i][1]表示第i个偷的收益
    dp[1][0] = 0;
    dp[1][1] = nums[1];
    for(let i=2;i<len;i++){//不偷第一个
        dp[i] = [];
        dp[i][0] = Math.max(dp[i-1][0],dp[i-1][1]);
        dp[i][1] = dp[i-1][0]+nums[i];
    }
    let max1 = Math.max(dp[len-1][0],dp[len-1][1]);
    let dp1 =  [[]];
    dp1[0][0] = 0;
    dp1[0][1] = nums[0];
    for(let i=1;i<len-1;i++){//不偷第一个
        dp1[i] = [];
        dp1[i][0] = Math.max(dp1[i-1][0],dp1[i-1][1]);
        dp1[i][1] = dp1[i-1][0]+nums[i];
    }
    let max2 = Math.max(dp1[len-2][0],dp1[len-2][1]);
    console.log(dp,dp1);
    return Math.max(max1,max2);
};
console.log(rob([2,3,2]));
console.log(rob([1,2,3,1]));
console.log(rob([1,2]));