/**
 * @param {number[]} nums
 * @return {number}
*/
var findPeakElement = function(nums) {
    if(nums.length===1) return 0;
    if(nums.length===2) return nums[0]>nums[1]?0:1;
    let left = 0,right = nums.length-1;
    while(left<right){
        let middle = (left+right)>>1;
        if(nums[middle-1] < nums[middle] && nums[middle] > nums[middle+1]){//找到峰值
            return middle;
        }else if(nums[middle] < nums[middle+1]){
            left = middle+1;
        }else if(nums[middle] > nums[middle+1]){
            right = middle;
        }
    }
    return left;
};
console.log(findPeakElement([1,2,3]));