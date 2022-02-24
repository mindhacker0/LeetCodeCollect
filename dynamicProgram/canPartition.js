//416. 分割等和子集
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {//看成背包问题，从数组中取任意的元素使得总和为整个数组总和的一半
    let sum = 0;
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
    }
    if(sum&1) return false;//奇数必然找不到和为一半
    let capacity = sum>>1;
    let dp = [];//dp[i][j]表示从前i个物品中选出总体积为j的物品放入背包，物品的最大价值
    dp = new Array(capacity+1).fill(0);
    for(let i=1;i<=nums.length;i++){
        for(let j=capacity;j>=nums[i];j--){
            if(dp[j-nums[i]]+nums[i]>dp[j]){
                dp[j] = dp[j-nums[i]]+nums[i];
            }
        }
    }
    console.log(capacity,dp);
    for(let i=0;i<dp.length;i++){
        if(dp[i] === capacity) return true;
    }
    return false;
};
console.log(canPartition([1,5,11,5]));