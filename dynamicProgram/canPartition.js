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
var canPartition = function(nums) {
    let len = nums.length;
    //看做背包问题，将元素放入和一半大小的背包，能放下说明可以分为两个和相同的子集。
    let sum = nums.reduce((a,b)=>a+b,0);
    if(sum&1) return false;//和为奇数无法等分
    let bage = sum>>1;//背包大小
    let dp = [];//dp[i][j]前i个物品选出了体积j的物品,最大的价值
    for(let i=0;i<len;i++){//遍历物品
        dp[i] = new Array(bage+1).fill(-Infinity);
        dp[i][0] = 0;//体积为0，无法放东西，最大价值也为0
        for(let j=1;j<=bage;j++){//遍历背包大小
            if(i===0) dp[i][j] = j>=nums[i]?nums[i]:0;//对于第一个元素，如果背包容量大于元素的体积就可以选，否则不能选价值为0；
            else{
                //我们通过决策选或者不选哪个能获取的价值最大，不选则继承上次的价值不变
                if(nums[i]<=j) dp[i][j] = Math.max(dp[i-1][j],dp[i-1][j-nums[i]]+nums[i]);
                else dp[i][j] = dp[i-1][j];//背包大小不够，继承上次的选择。
            }
        }
    }
    //console.log(dp);
    return dp[len-1][bage] === bage;//能正好装满价值为背包大小的元素
};
console.log(canPartition([3,3,3,4,5]));