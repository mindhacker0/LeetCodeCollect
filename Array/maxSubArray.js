//53. 最大子数组和
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {//动态规划
    if(nums.length === 0) return 0;
    let addArr = [nums[0]];
    let max = nums[0];
    for(let i=1;i<nums.length;i++){
       addArr[i] = Math.max(addArr[i-1]+nums[i],nums[i]);
       if(max<addArr[i]) max = addArr[i];
    }
    return max;
};
var maxSubArray = function(nums) {//线段树
   if(nums.length === 0) return 0;
   function middleSum(start,middle,end){
      let sumL = 0;
      let maxL = Number.MIN_SAFE_INTEGER;
      for(let i = middle;i>=start;i--){
         sumL+=nums[i];
         if(maxL<sumL) maxL = sumL;
      }
      let sumR = 0;
      let maxR = Number.MIN_SAFE_INTEGER;
      for(let i = middle+1;i<=end;i++){
         sumR+=nums[i];
         if(maxR<sumR) maxR = sumR;
      }
      return maxL+maxR;
   }
   function subTree(start,end){
      //console.log(start);
      if(start == end) return nums[start];
      let middle = (end + start)>>1;
      //console.log(start,middle,end);
      let leftSum = subTree(start,middle); 
      let rightSum = subTree(middle+1,end);
      let middleMax = middleSum(start,middle,end);
      return Math.max(leftSum,Math.max(rightSum,middleMax));
   }
   return subTree(0,nums.length-1);
}
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));