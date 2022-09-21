//918. 环形子数组的最大和
/**
 * @param {number[]} nums
 * @return {number}
*/
var maxSubarraySumCircular = function(nums) {//动态规划，暴力
    let len = nums.length;
    let max = -Infinity;
    for(let i=0;i<len;i++){
        let dp = [];//dp[i]表示以i结尾的子数组的最大和
        for(let j=i;j<i+len;j++){
            dp[j-i]=j===i?nums[i]:Math.max(nums[j%len],dp[j-i-1]+nums[j%len]);
            max = Math.max(max,dp[j-i]);
        }
    }
    return max;
};
var maxSubarraySumCircular = function(nums) {//分情况讨论
    let len = nums.length;
    let max = -Infinity;
    let min = Infinity;
    let dpMax = [];//dpMax[i]表示以i结尾的子数组的最大和
    let dpMin = [];//dpMin[i]表示以i结尾的子数组的最大和
    let sum = 0;
    for(let i=0;i<len;i++){
        dpMax[i]=i==0?nums[i]:Math.max(nums[i],dpMax[i-1]+nums[i]);
        dpMin[i]=i==0?nums[i]:Math.min(nums[i],dpMin[i-1]+nums[i]);
        max = Math.max(max,dpMax[i]);
        min = Math.min(min,dpMin[i]);
        sum+=nums[i];
    }
    //console.log(dpMax,dpMin)
    return sum===min?max:Math.max(max,sum-min);
}
var maxSubarraySumCircular = function(nums) {//单调栈
    let len = nums.length;
    let presum = [0];
    let ans = -Infinity;
    for(let i=1;i<2*len;i++){
        presum[i] = i===1?nums[i-1]:presum[i-1]+nums[(i-1)%len];
        ans = Math.max(ans,nums[(i-1)%len]);
    }
    console.log(presum);
    //找出prsum[j]-presum[i]的最大值
    let stack = [];
    for(let i=0;i<presum.length;i++){
        while(stack.length && presum[stack[stack.length-1]]>presum[i]) stack.pop();
        while(stack.length && i-stack[0]>len) stack.shift();
        if(stack.length){
            // console.log(presum[i] - presum[stack[0]]);
            ans = Math.max(ans,presum[i] - presum[stack[0]]);
        }
        stack.push(i);
        // console.log(stack);
    }
    return ans;
}
var maxSubarraySumCircular = function(nums) {//kadena
    let len = nums.length;
    let min = Infinity,max = -Infinity,sum = 0;
    let minCur,maxCur;
    for(let i=0;i<len;i++){
        minCur = i===0?nums[0]:Math.min(nums[i],minCur+nums[i]);
        maxCur = i===0?nums[0]:Math.max(nums[i],maxCur+nums[i]);
        sum+=nums[i];
        min = Math.min(min,minCur);
        max = Math.max(max,maxCur);
    }
    console.log(max,min)
    return sum===min?max:Math.max(max,sum-min);
}
// console.log(maxSubarraySumCircular([1,-2,3,-2]));//3
// console.log(maxSubarraySumCircular([-1,2,3,2]));//7
// console.log(maxSubarraySumCircular([5,-3,5]));//10
// console.log(maxSubarraySumCircular([2]));
console.log(maxSubarraySumCircular([-3,-2,-4]));