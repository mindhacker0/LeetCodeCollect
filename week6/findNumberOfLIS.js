//673. 最长递增子序列的个数
/**
 * @param {number[]} nums
 * @return {number}
*/
var findNumberOfLIS = function(nums) {
    let dp = [];//dp[i]表示以nums[i]结尾的递增子序长度
    let cnt = new Array(nums.length).fill(0);
    let max = 0;
    let maxLen = 0;
    for(let i=0;i<nums.length;i++){
        dp[i] = 1; cnt[i] = 1;
        for(let j=0;j<=i;j++){//找到距离nums[i]最近的数的子序列
            if(nums[j] < nums[i]){
                if(dp[i] < dp[j]+1){//尽可能长的上一个子序列
                    dp[i] = dp[j]+1;
                    cnt[i] = cnt[j];
                }else if(dp[i] === dp[j]+1){
                    cnt[i]+=cnt[j];
                }
            }
        }
        max = Math.max(dp[i],max);
    }
    for(let i=0;i<nums.length;i++){
        if(dp[i] === max) maxLen+=cnt[i];
    }
    console.log(dp,cnt);
    return maxLen;
};
console.log(findNumberOfLIS([1]));
console.log(findNumberOfLIS([1,3,5,4,7]));
console.log(findNumberOfLIS([2,2,2,2,2]));
console.log(findNumberOfLIS([1,2,4,3,5,4,7,2]));