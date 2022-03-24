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
    if(nums.length===1) return true;
    let step = 0;//当前下标
    while(step<nums.length-1){
        let next = step,nextadd = nums[step];//下一步的跨度
        for(let i=1;i<=nums[step];i++){
            if(i==1){
                next = nums[step+1];
                nextadd = 1;
            }else if((nums[step+i]-i+1)>=next){
                next = nums[step+i]-i+1;
                nextadd = i;
            }
        }
        console.log(step,step+nextadd);
        step = step+nextadd;
        if(next === step) break;
    }
    return step>= nums.length-1?true:false;
}
//console.log(canJump([2,3,1,1,4]));
//console.log(canJump([3,2,1,0,4]));
console.log(canJump([2,0,0]));
//console.log(canJump([1,1,1,0]));