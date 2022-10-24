//1800. 最大升序子数组和
/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxAscendingSum = function(nums) {
    let ans = 0;
    let sum = nums[0];
    for(let i=1;i<nums.length;i++){
        if(nums[i-1]<nums[i]) sum+=nums[i];
        else sum = nums[i];
        ans = Math.max(ans,sum);
    }
    return ans;
};
console.log(maxAscendingSum([10,20,30,5,10,50]));