//300. 最长递增子序列
/**
 * @param {number[]} nums
 * @return {number}
*/
var lengthOfLIS = function(nums) {
    let dp = [];//dp[i]表示以nums[i]结尾的递增数组位数
    let max = 1;
    for(let i=0;i<nums.length;i++){
        dp[i] = 1;
        for(let j=0;j<i;j++){
            if(nums[i]>nums[j]){
                dp[i] = Math.max(dp[i],dp[j]+1);
            }
        }
        max = Math.max(max,dp[i]);
    }
    return max;
};
console.log(lengthOfLIS([1,3,6,7,9,4,10,5,6]));