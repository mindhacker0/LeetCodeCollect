//1438. 绝对差不超过限制的最长连续子数组
/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
*/
var longestSubarray = function(nums, limit) {
    let minQueue = [],maxQueue = [];
    let ans = 0;
    let left =0,right=0;
    while(right<nums.length){
        while(minQueue.length && nums[minQueue[minQueue.length-1]] > nums[right]) minQueue.pop();
        while(maxQueue.length && nums[maxQueue[maxQueue.length-1]] < nums[right]) maxQueue.pop();
        minQueue.push(right);
        maxQueue.push(right);
        while(minQueue.length && maxQueue.length && nums[maxQueue[0]] - nums[minQueue[0]]>limit && left<=right){
            if(left === minQueue[minQueue[0]]){
                minQueue.shift();
            }
            if(left === maxQueue[maxQueue[0]]){
                maxQueue.shift();
            }
            left++;
        }
        ans = Math.max(ans,right-left+1);
        right++;
        
        console.log(left,right,minQueue.map(i=>nums[i]),maxQueue.map(i=>nums[i]));
    }
  
    return ans;
};
//console.log(longestSubarray([8,2,4,7],4));//2
//console.log(longestSubarray([10,1,2,4,7,2],5));//4
//console.log(longestSubarray([4,2,2,2,4,4,2,2],0));//3
console.log(longestSubarray([1,5,6,7,8,10,6,5,6],4));//5