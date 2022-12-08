//862. 和至少为 K 的最短子数组
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
*/
var shortestSubarray = function(nums, k) {//单调栈
    let len = nums.length;
    let presum = [];
    presum[0] = 0;
    for(let i=1;i<=len;i++){
       presum[i] = presum[i-1]+nums[i-1];
    }
    console.log(presum);
    let ans = Infinity;
    let queue = []
    for(let i=0;i<=len;i++){
       while(queue.length && presum[queue[queue.length-1]]>presum[i]) queue.pop();
       queue.push(i);
        if(queue.length>1&&presum[queue[queue.length-1]]-presum[queue[0]]>=k){
            while(queue.length>2&&presum[queue[queue.length-1]]-presum[queue[1]]>=k) queue.shift();
            ans = Math.min(ans,queue[queue.length-1] - queue[0]);
        } 
       console.log(queue);
    }
    return ans === Infinity?-1:ans;
};
console.log(shortestSubarray([2,-1,2],3));
console.log(shortestSubarray([-28,81,-20,28,-29],89));//3
console.log(shortestSubarray([17,85,93,-45,-21],150));