/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//递增数组
// var twoSum = function(nums, target) {
//     let map = {};
//     for(var i of nums){
//         if(map[i]) return [i,target-i];
//         map[target-i] = 1;
//     }
//     return map;
// };
var twoSum = function(nums, target) {
    let left = 0,right = nums.length-1;
    while(left<right){
        if(nums[left]+nums[right]>target) right--;
        else if(nums[left]+nums[right]<target) left++;
        else return [nums[left],nums[right]];
    }
};
var twoSum = function(nums, target) {//递增数组考虑二分
    let des = target/2;
    let len = nums.length;
    let l =0,r = len-1;
    while(l<r){
        let middle = (l+r)>>1;
        if(nums[middle]<des){
            l = middle+1;
        }else if(nums[middle]>des){
            r = middle;
        }else{
            l=r=middle;
        }
        console.log(l,r);
        if(r-l<=1) break;
    }
    let left = l,right = r;
    while(0<left||right<len){
        if(nums[left]+nums[right]<target) right++;
        else if(nums[left]+nums[right]>target) left--;
        else return [nums[left],nums[right]];
    }
}
// console.log(twoSum([10,26,30,31,47,60],40))
// console.log(twoSum([2,7,8,8,11,15],16));
console.log(twoSum([16,16,18,24,30,32],48));