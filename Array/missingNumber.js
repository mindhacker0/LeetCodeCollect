/**
 * @param {number[]} nums
 * @return {number}
*/
var missingNumber = function(nums) {
    if(nums.length === 1) return nums[0]===0?1:0;
    if(nums[0]!==0) return 0;
    let i = 0,j = nums.length-1;
    let sum = nums[i]+nums[j];
    while(i<j){
        if(nums[i]+nums[j]!==sum){
            return nums[i] === i?sum - nums[i]:sum-nums[j];
        }else{
            i++;
            j--;
        }
    }
    i--;j++;
    if(nums[j] - nums[i] >j-i){
        if(j-i === 2) return nums[i+1] === i+1?i+2:i+1;
        else return nums[i]+1;
    } 
    return sum+1;
};
console.log(missingNumber([0,2]));