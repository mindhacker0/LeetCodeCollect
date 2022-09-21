//698. 划分为k个相等的子集
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
*/
var canPartitionKSubsets = function(nums, k) {
    let len = nums.length;
    let sum = 0,max = -1;
    for(let i=0;i<len;i++){
        sum+=nums[i];
        max = Math.max(max,nums[i]);
    }
    if((sum%k)!==0) return false;//不能被k整除无法分出来
    let per = sum/k;//每个背包大小
    if(max>per) return false;//有元素超过背包容量也没法分
    let visit = new Array(len).fill(false);//标记已经取过的元素
    let ans = false;
    nums.sort((a,b)=>a-b);
    function trace(index,sum,arr){
        if(sum===per) sum=0;
        if(sum>per||ans) return;
        if(index === len){
            console.log(arr,sum);
            if(sum===0) ans = true;
            return;
        }
        for(let i=0;i<len;i++){
            if(visit[i]) continue;
            visit[i] = true;
            arr.push(nums[i]);
            trace(index+1,sum+nums[i],arr);
            arr.pop();
            visit[i] = false;
        }
    }
    trace(0,0,[]);
    // for(let i=0;i<k;i++){
    //     let dp = new Array(per+1).fill(0);
    //     let put = new Array(per+1).fill(0).map(()=>[]);
    //     for(let j=0;j<len;j++){
    //         if(visit[j]) continue;
    //         for(let n = per;n>=nums[j];n--){
    //             if(dp[n-nums[j]]+nums[j]>dp[n]){
    //                 dp[n]=dp[n-nums[j]]+nums[j];
    //                 put[n]=[...put[n-nums[j]],j];
    //             }
    //         }
    //     }
    //     console.log(dp,put);
    //     if(dp[per]===per){
    //         for(let m=0;m<put[per].length;m++){
    //             visit[put[per][m]] = true;
    //         }
    //     }else return false;
    // }
    return ans;
};
// console.log(canPartitionKSubsets([4, 3, 2, 3, 5, 2, 1],4));
// console.log(canPartitionKSubsets([1,1,1,1,2,2,2,2],4));
// console.log(canPartitionKSubsets([4,4,4,6,1,2,2,9,4,6],3));
console.log(canPartitionKSubsets([18,20,39,73,96,99,101,111,114,190,207,295,471,649,700,1037],4))