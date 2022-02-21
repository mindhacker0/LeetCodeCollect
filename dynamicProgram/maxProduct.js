//152. 乘积最大子数组
/**
 * @param {number[]} nums
 * @return {number}
*/
var maxProduct = function(nums) {
    let maxDp = [nums[0]];
    let minDp = [nums[0]];
    let max = nums[0];
    for(let i=1;i<nums.length;i++){
        maxDp[i] = Math.max(nums[i],Math.max(maxDp[i-1]*nums[i],minDp[i-1]*nums[i]));
        minDp[i] = Math.min(nums[i],Math.min(maxDp[i-1]*nums[i],minDp[i-1]*nums[i]));
        max = Math.max(maxDp[i],max);
    }
    return max;
};
console.log(maxProduct([-2,3,-4]));