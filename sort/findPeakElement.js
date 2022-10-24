//162. 寻找峰值
/**
 * @param {number[]} nums
 * @return {number}
*/
var findPeakElement = function(nums) {
    nums.unshift(-Infinity);
    nums.push(-Infinity);
    let len = nums.length;
    let l = 0,r = len-1;
    while(l<r){
        let mid = (l+r)>>1;
        if(nums[mid+1]>nums[mid]){
            l = mid+1;
        }else if(nums[mid+1]<nums[mid]){
            r = mid;
        }else{
            l = r = mid;
            break;
        }
    }
    console.log(l,r);
    return l-1;
};
// console.log(findPeakElement([1,2,1,3,5,6,4]));
console.log(findPeakElement([1,2,3,1]));