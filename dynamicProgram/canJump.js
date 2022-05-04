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
var canJump = function(nums) {//贪心
    let dp = [];
    for(let i=0;i<nums.length;i++){
        dp[i] = i+nums[i];
    }
    return 
}
//console.log(canJump([2,3,1,1,4]));
console.log(canJump([3,2,1,0,4]));
console.log(canJump([2,0,0]));
//console.log(canJump([1,1,1,0]));