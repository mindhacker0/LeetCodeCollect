//45. 跳跃游戏 II
/**
 * @param {number[]} nums
 * @return {number}
*/
var jump = function(nums) {
    let ans = 0;
    for(let i=0;i<nums.length-1;ans++){
        if(i+nums[i]>=nums.length-1){i+=nums[i];continue;}
        let maxStep = nums[i];
        let max = nums[i];
        let step = maxStep;
        let j = 1;
        while(j<=maxStep){
            if(max<nums[i+j]+j){
                step = j;
                max = nums[i+j]+j;
            }
            j++;
        }
        console.log(maxStep,step)
        i+=step;
        
    }
    return ans;
};
console.log(jump([2,3,1]));
//console.log(jump([3,2,1]));
//console.log(jump([2,3,0,1,4]));
//console.log(jump([2,3,1,1,4]));