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
console.log(twoSum([2,7,11,15],9))