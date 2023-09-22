// 2560. 打家劫舍 IV
// 沿街有一排连续的房屋。每间房屋内都藏有一定的现金。现在有一位小偷计划从这些房屋中窃取现金。
// 由于相邻的房屋装有相互连通的防盗系统，所以小偷 不会窃取相邻的房屋 。
// 小偷的 窃取能力 定义为他在窃取过程中能从单间房屋中窃取的 最大金额 。
// 给你一个整数数组 nums 表示每间房屋存放的现金金额。形式上，从左起第 i 间房屋中放有 nums[i] 美元。
// 另给你一个整数 k ，表示窃贼将会窃取的 最少 房屋数。小偷总能窃取至少 k 间房屋。
// 返回小偷的 最小 窃取能力。
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
*/
var minCapability = function(nums, k) {
    let arr = nums.slice();
    arr.sort((a,b)=>a - b);
    let left = 0,right = arr.length;
    function stfKth(value){// 当最大值为 value 的时候能否找出K个不相邻小于 K 的值
        let dp = [];//dp[i]表示以nums[i]结尾的包含不小于K的元素个数
        for(let i=0;i<nums.length;++i){
            if(nums[i]<=value){
                dp[i] = i<2?1:dp[i-2]+1;
            }else{
                dp[i] = i>0?dp[i-1]:0;
            }
        }
        return dp.pop();
    }
    let result = Infinity;
    while(left<right){// 二分试探出最大的金额
        let mid = (left+right)>>1;
        let kx = arr[mid];
        let x = stfKth(kx);
        if(x<k){
            left = mid+1;
        }else{
            if(x===k){
                result = Math.min(result,kx);
            } 
            right = mid;
        }
    }
    return result;
};
console.log(minCapability([1],1));//1
// console.log(minCapability([2,3,5,9],2));//5
// console.log(minCapability([2,7,9,3,1],2));//2
// console.log(minCapability([9,6,20,21,8],3));// 20