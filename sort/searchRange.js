//34. 在排序数组中查找元素的第一个和最后一个位置
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
*/
var searchRange = function(nums, target) {//二分查找
    let len = nums.length;
    let l = 0,r = len-1;
    while(l<=r){
        let mid = (l+r)>>1;
        if(nums[mid]>target){
            r = mid-1;
        }else if(nums[mid]<target){
            l = mid+1;
        }else{
            l = r = mid;
            break;
        }
        console.log(l,r);
    }
    console.log(l,r);
    if(l>r) return [-1,-1];
    while(nums[l]===target&&l>=0) l--;
    while(nums[r]===target&&r<len) r++;
    return [l+1,r-1];
};
console.log(searchRange([5,7,7,8,8,10],6));