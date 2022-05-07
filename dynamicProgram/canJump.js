//55. 跳跃游戏
/**
 * @param {number[]} nums
 * @return {boolean}
*/
// var canJump = function(nums) {//dfs
//     if(nums.length===1) return true;
//     let hasEnd = false;
//     function dfs(arr,index){
//         if(index>=nums.length-1){
//             //console.log(arr);
//             hasEnd = true;
//             return;
//         }
//         for(let i=1;i<=arr[arr.length-1];i++){
//             arr.push(nums[index+i]);
//             dfs(arr,index+i);
//             arr.pop();
//         }
//     }
//     dfs([nums[0]],0);
//     return hasEnd;
// };
var canJump = function(nums) {//贪心(18.79%)
    let len = nums.length;
    for(let i=0;i<len;){
        let max = -10e7,maxIndex;
        for(let j=1;j<=nums[i];j++){
            if(i+j+nums[i+j]>=max){
                max = i+j+nums[i+j];
                maxIndex = j;
            }
        }
        console.log(i,maxIndex)
        if(i>=len-1) return true;
        if(typeof maxIndex === "undefined") return false;
        i=i+maxIndex;
    }
    return true;
}
var canJump = function(nums) {//贪心(97.46%)
    let len = nums.length;
    let dp = [nums[0]];//能走的最远距离
    for(let i=1;i<len;i++){
        dp[i] = Math.max(nums[i],dp[i-1]-1);
    }
    for(let i=0;i<len-1;i++){
      if(dp[i]===0) return false;
    }
    return true;
}
console.log(canJump([2,3,1,1,4]));
console.log(canJump([3,2,1,0,4]));
console.log(canJump([2,0,0]));
//console.log(canJump([1,1,1,0]));