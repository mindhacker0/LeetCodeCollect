//907. 子数组的最小值之和
/**
 * @param {number[]} arr
 * @return {number}
*/
var sumSubarrayMins = function(arr) {//单调栈
    let ans = 0;
    let len = arr.length;
    let stack = [len];
    let every = 0;
    for(let i=len-1;i>=0;i--){
        while(stack.length && arr[stack[stack.length-1]]>arr[i]){
            let del = stack.pop();
            every-=arr[del]*(stack[stack.length-1]-del);
        }
        every+=arr[i]*(stack[stack.length-1]-i);
        stack.push(i);
        console.log(stack,every);
        ans+=every;
    }
    return ans;
};
console.log(sumSubarrayMins([3,1,2,4]))
console.log(sumSubarrayMins([11,81,94,43,3]))