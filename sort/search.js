//33. 搜索旋转排序数组
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
*/
var search = function(nums, target) {
    let len = nums.length;
    let l = 0,r = len-1;
    let ans = -1;
    while(l<r){
        let mid = (l+r)>>1;
        if(nums[mid]<target){
            if(nums[r]>nums[mid] && target>nums[r]) r = mid;
            else l = mid+1;
            console.log('r',l,r);
        }else if(nums[mid]>target){
            if(nums[l]<=nums[mid]&&target<nums[l]) l = mid+1;
            else r = mid;
            console.log('l',l,r);
        }else{
            ans = mid;
            break;
        }
    }
    if(l===r&&nums[l]===target) ans = l;
    return ans;
};
// console.log(search([4,5,6,7,0,1,2],6))
// console.log(search([1,3],3))
// console.log(search([4,5,6,7,0,1,2],0))
// console.log(search([4,5,6,7,8,1,2,3],8))
console.log(search([5,1,2,3,4],1))
// console.log(search([4,5,6,7,0,1,2],3))
console.log(search([3,1],1))