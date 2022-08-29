/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 function sleep(time){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,time);
    });
}
//统计一个数字在排序数组中出现的次数。
var search = function(nums, target) {
    if(nums.length === 0) return 0;
    if(nums.length === 1) return nums[0] === target?1:0;
    let len = nums.length;
    let i = 0,j = len-1;
    let times = 0;
    while(i<=j){
        let mid = (i+j)>>1;
        if(nums[mid]>target){
            j=mid-1;
        }else if(nums[mid]<target){
            i=mid+1;
        }else{
            let x = mid,y=mid;
            while(nums[x-1] === target) x--;
            while(nums[y+1] === target) y++;
            console.log(x,y);
            times = y-x+1;
            break;
        }
    }
    return times;
};
console.log(search([5,6,6,8],9));