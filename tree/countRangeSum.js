//327. 区间和的个数
/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
*/
var countRangeSum = function(nums, lower, upper) {
    let preSum = [0];
    let len = nums.length;
    for(let i=1;i<=len;i++){
        preSum[i] = preSum[i-1] + nums[i-1];
    }
    let count = 0;
    for(let i=0;i<=len;i++){
        for(let j=i+1;j<=len;j++){
            let sum = preSum[j]-preSum[i];
            if(lower<=sum && sum<=upper ){
               count++;
            }
        }
    }
    return count;
};