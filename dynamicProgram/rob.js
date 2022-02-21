//198. 打家劫舍
/**
 * @param {number[]} nums
 * @return {number}
 */
/*var rob = function(nums) {
    if(!nums.length){return 0;}
    if(nums.length<=2){
        return Math.max.apply(null,nums)
    }
    let dp=[];
    dp[0]=nums[0];
    dp[1]=Math.max(nums[0],nums[1]);
    for(let i = 2;i<nums.length;i++){
      dp[i]=Math.max(dp[i-1],dp[i-2]+nums[i]);
    }
    return dp.pop();
};*/
var rob = function(nums) {
  if(!nums.length){return 0;}
  let dp = [[]];//dp[i][0]表示第i个房间不偷的收益，dp[i][1]表示第i个房间偷的收益
  dp[0][0] = 0;dp[0][1] = nums[0];
  for(let i=1;i<nums.length;i++){
    dp[i] = []
    dp[i][0] = Math.max(dp[i-1][0],dp[i-1][1]);
    dp[i][1] = dp[i-1][0]+nums[i];
  }
  return Math.max(dp[nums.length-1][0],dp[nums.length-1][1]);
}
console.log(rob([1,2,3,1]))