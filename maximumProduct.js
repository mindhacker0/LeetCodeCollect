//给你一个整型数组 nums ，在数组中找出由三个数组成的最大乘积，并输出这个乘积。
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
   nums.sort((a,b)=>a-b);
   console.log(nums)
   let len=nums.length;
   return Math.max(nums[0]*nums[1]*nums[len-1],nums[len-3]*nums[len-2]*nums[len-1]);
};
console.log(maximumProduct([-1,-2,-3,-4]));