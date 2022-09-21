//剑指 Offer II 038. 每日温度
//要想观测到更高的气温，至少需要等待的天数。如果气温在这之后都不会升高，请在该位置用 0 来代替。
/**
 * @param {number[]} temperatures
 * @return {number[]}
*/
var dailyTemperatures = function(temperatures) {
    let stack = [];
    let len = temperatures.length;
    let ans = [];
    for(let i=len-1;i>=0;i--){
        while(stack.length && temperatures[stack[stack.length-1]]<=temperatures[i]) stack.pop();
        console.log(stack);
        ans[i] = stack.length?(stack[stack.length-1]-i):0;
        stack.push(i);
    }
    return ans;
};
//console.log(dailyTemperatures([73,74,75,71,69,72,76,73]));
console.log(dailyTemperatures([89,62,70,58,47,47,46,76,100,70]));