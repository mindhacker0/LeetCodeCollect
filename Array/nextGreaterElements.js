//503. 下一个更大元素 II
/**
 * @param {number[]} nums
 * @return {number[]}
*/
var nextGreaterElements = function(nums) {
    let stack = [];
    let len = nums.length;
    let ans = [];
    for(let i=2*len-1;i>=0;i--){
        while(stack.length && stack[stack.length-1]<=nums[i%len]) stack.pop();
        ans[i%len] = stack.length?stack[stack.length-1]:-1;
        stack.push(nums[i%len]);
    }
    return ans;
};
console.log(nextGreaterElements([1,2,1]));