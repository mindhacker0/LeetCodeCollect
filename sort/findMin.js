//153. 寻找旋转排序数组中的最小值
/**
 * @param {number[]} nums
 * @return {number}
*/
var findMin = function(nums) {console.log(nums);
    let len = nums.length;
    if(nums[0]<nums[len-1]||len===1) return nums[0];
    let mid = (0+len-1)>>1;
    if(nums[mid]>=nums[0] && nums[mid]>=nums[len-1]) return findMin(nums.slice(mid+1,len));//最小值存在后半部分
    else return findMin(nums.slice(0,mid+1));//最小值存在前半部分
};
console.log(findMin([5,1,2]));
console.log(findMin([1,3]));
console.log(findMin([3,2]));