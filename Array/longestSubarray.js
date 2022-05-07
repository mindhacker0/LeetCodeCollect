//1438. 绝对差不超过限制的最长连续子数组
/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
*/
var longestSubarray = function(nums, limit) {//双指针+单调队列
    let left = 0,right =0;
    let len = nums.length;
    let maxqueue = [],minqueue = [];
    let ans = 0;
    while(right<len){
        while(maxqueue.length && nums[maxqueue[maxqueue.length-1]] > nums[right]) maxqueue.pop();
        while(minqueue.length && nums[minqueue[minqueue.length-1]] < nums[right]) minqueue.pop();
        maxqueue.push(right);
        minqueue.push(right);
        while(maxqueue.length && minqueue.length && (nums[minqueue[0]] - nums[maxqueue[0]])>limit){
            if(left===maxqueue[0]){
                maxqueue.shift();
            }
            if(left===minqueue[0]){
                minqueue.shift();
            }
            left++;
        }
        console.log(left,right,minqueue.map((i)=>nums[i]),maxqueue.map((i)=>nums[i]));
        ans = Math.max(ans,right-left+1);
        right++;
    }
    return ans;
};
// console.log(longestSubarray([8,2,4,7],4));//2
// console.log(longestSubarray([10,1,2,4,7,2],5));//4
// console.log(longestSubarray([4,2,2,2,4,4,2,2],0));//3
//console.log(longestSubarray([1,5,6,7,8,10,6,5,6],4));//5
console.log(longestSubarray([1,8,6,10],8));