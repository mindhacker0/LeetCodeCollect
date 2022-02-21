/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
*/
var searchRange = function(nums,target){
    let left =0,right =nums.length-1;
    let bl = -1,br=-1;
    while(left<=right){
        let middle = ~~((left+right)/2);
        if(nums[middle]===target){
            bl = middle;
            br = middle;
            while(nums[--bl] === target);
            while(nums[++br] === target);
            bl++;br--;
            break;
        }else if(nums[middle]<target){
            left = middle+1;
        }else{
            right = middle-1;
        }
    }
    return [bl,br];
};
let nums = [5,7,7,8,8,10];
let target = 8;
console.log(searchRange(nums,target));